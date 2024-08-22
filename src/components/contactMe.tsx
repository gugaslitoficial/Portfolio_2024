'use client'

import React, { useState, useEffect } from "react";
import * as z from 'zod';
import { MessageSquareText, Phone, Mail, LocateFixed } from "lucide-react";

// Definindo o esquema de validação
const schema = z.object({
    firstName: z.string()
      .min(1, 'First Name is required')
      .regex(/^[A-Za-z]+$/, 'First Name cannot contain spaces or numbers'),
    lastName: z.string()
      .min(2, 'Last Name must contain at least 2 characters')
      .regex(/^[A-Za-z\s]+$/, 'Last Name cannot contain numbers'),
    email: z.string()
      .min(1, 'E-mail is required')
      .email('Invalid e-mail address'),
    message: z.string()
      .min(1, 'Message is required')
  });
  
  export default function Contact() {

    const [iconSize, setIconSize] = useState(100);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1536) { // 2xl
                setIconSize(56);
            } else if (window.innerWidth >= 1280) { // xl
                setIconSize(40);
            } else if (window.innerWidth >= 1024) { // lg
                setIconSize(36);
            } else if (window.innerWidth >= 768) { // md
                setIconSize(32);
            } else if (window.innerWidth >= 640) { // sm
                setIconSize(28);
            } else {
                setIconSize(28);
            } 
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    });
    const [errors, setErrors] = useState<Partial<Record<keyof typeof formData, string>>>({});
  
    const handleSubmit = (event: React.FormEvent) => {
      event.preventDefault();
  
      const result = schema.safeParse(formData);
  
      if (!result.success) {
        const newErrors = result.error.format();
        setErrors({
          firstName: newErrors.firstName?._errors.join(', '),
          lastName: newErrors.lastName?._errors.join(', '),
          email: newErrors.email?._errors.join(', '),
          message: newErrors.message?._errors.join(', ')
        });
      } else {
        setErrors({});
        console.log('Form submitted successfully');
        // Processar o envio do formulário aqui
      }
    };
  
    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = event.target;
      setFormData({ ...formData, [name]: value });
    };

  return (
    <div className="h-screen w-full p-2 sm:p-8 md:p-8 lg:p-12 xl:p-16 2xl:p-20 bg-cover bg-center bg-no-repeat flex flex-col items-center gap-20 sm:gap-2 md:gap-2 lg:gap-2 xl:gap-14 2xl:gap-20 py-20 bg-neutral-950">
      <div className="h-1/8 w-full flex flex-col justify-start gap-6">
        <h1 className="text-white text-3xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl flex items-center justify-center gap-2 font-bold">
          <MessageSquareText size={iconSize} color="#16a34a" />
          Contact
        </h1>
      </div>
      <div className="h-full w-full flex flex-col sm:flex-row md:ml-10 sm:gap-0 lg:gap-6 xl:gap-8 2xl:gap-10">
        <div className="w-full sm:w-1/2 flex flex-col justify-center">
          <form className="flex flex-col pb-10 sm:pb-0 gap-8 md:py-10 lg:py-10 xl:py-28" onSubmit={handleSubmit}>
            <div className="flex gap-4">
              <div className="flex-1">
                <label htmlFor="first-name" className="block text-gray-600"></label>
                <input
                  type="text"
                  id="first-name"
                  name="firstName"
                  placeholder="First Name"
                  className="w-full border-2 border-green-600 rounded-lg p-2 bg-transparent text-white"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                {errors.firstName && <span className="text-red-500">{errors.firstName}</span>}
              </div>
              <div className="flex-1">
                <label htmlFor="last-name" className="block text-gray-600"></label>
                <input
                  type="text"
                  id="last-name"
                  name="lastName"
                  placeholder="Last Name"
                  className="w-full border-2 border-green-600 rounded-lg p-2 bg-transparent text-white"
                  value={formData.lastName}
                  onChange={handleChange}
                />
                {errors.lastName && <span className="text-red-500">{errors.lastName}</span>}
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-600"></label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="E-mail"
                className="w-full border-2 border-green-600 rounded-lg p-2 bg-transparent text-white"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span className="text-red-500">{errors.email}</span>}
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-600"></label>
              <textarea
                id="message"
                name="message"
                placeholder="Message..."
                className="w-full border-2 border-green-500 rounded-lg p-2 bg-transparent text-white"
                rows={4}
                value={formData.message}
                onChange={handleChange}
              />
              {errors.message && <span className="text-red-500">{errors.message}</span>}
            </div>
            <button
              type="submit"
              className="mt-4 bg-green-600 text-white rounded px-4 py-2 hover:bg-green-700"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="w-full h-full sm:h-auto sm:w-2/3 md:w-2/3 lg:w-1/2 xl:w-1/2 2xl:w-1/2 flex items-center justify-center p-20 sm:p-0 sm:pt-0">
          <div className="h-full w-full sm:h-1/3 sm:w-3/4 md:h-1/3 md:w-3/4 lg:h-1/3 lg:w-3/4 xl:h-2/5 xl:w-4/6 2xl:h-2/5 2xl:w-3/6 text-white md:text-sm lg:text-base xl:text-lg 2xl:text-xl flex flex-col justify-center gap-3 md:gap-3 lg:gap-4 xl:gap-8 2xl:gap-10 font-bold bg-gradient-to-r from-green-400 to-green-800 rounded-3xl">
            <p className="flex gap-4 ml-3 md:ml-6 lg:ml-6 xl:ml-9 2xl:ml-12">
              <LocateFixed size={27} />Londrina/PR
            </p>
            <p className="flex gap-4 ml-3 md:ml-6 lg:ml-6 xl:ml-9 2xl:ml-12">
              <Mail size={27} />
              <a href="mailto:gustavo-romao@hotmail.com" className="text-white no-underline cursor-pointer">
                gustavo-romao@hotmail.com
              </a>
            </p>
            <p className="flex gap-4 ml-3 md:ml-6 lg:ml-6 xl:ml-9 2xl:ml-12">
              <Phone size={27} />
              <a href="tel:+5543988786969" className="text-white no-underline cursor-pointer">
                +55 43 98878-6969
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
