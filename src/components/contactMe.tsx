import React, { useState } from 'react';
import * as z from 'zod';

// Esquema de validação atualizado
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
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<Partial<Record<keyof typeof formData, string>>>({});

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Validação
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
    <form onSubmit={handleSubmit} className="flex flex-col pb-10 sm:pb-0 gap-8 md:py-10 lg:py-10 xl:py-28">
      <div className="flex gap-4">
        <div className="flex-1">
          <label htmlFor="first-name" className="block text-gray-600"></label>
          <input
            type="text"
            id="first-name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            className="w-full border-2 border-green-600 rounded-lg p-2 bg-transparent text-white"
            required
          />
          {errors.firstName && <p className="text-red-500">{errors.firstName}</p>}
        </div>
        <div className="flex-1">
          <label htmlFor="last-name" className="block text-gray-600"></label>
          <input
            type="text"
            id="last-name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            className="w-full border-2 border-green-600 rounded-lg p-2 bg-transparent text-white"
            required
          />
          {errors.lastName && <p className="text-red-500">{errors.lastName}</p>}
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-gray-600"></label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="E-mail"
          className="w-full border-2 border-green-600 rounded-lg p-2 bg-transparent text-white"
          required
        />
        {errors.email && <p className="text-red-500">{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="message" className="block text-gray-600"></label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message..."
          className="w-full border-2 border-green-500 rounded-lg p-2 bg-transparent text-white"
          rows={4}
          required
        />
        {errors.message && <p className="text-red-500">{errors.message}</p>}
      </div>
      <button
        type="submit"
        className="mt-4 bg-green-600 text-white rounded px-4 py-2 hover:bg-green-700"
      >
        Submit
      </button>
    </form>
  );
}

