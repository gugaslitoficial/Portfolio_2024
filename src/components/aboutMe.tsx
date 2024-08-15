'use client'

import React, { ReactNode, useState, useEffect } from "react"
import { CircleUserRound } from "lucide-react"
import Image from 'next/image'

export default function About() {
    const [iconSize, setIconSize] = useState(80);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1536) { // 2xl
                setIconSize(56);
            } else if (window.innerWidth >= 1280) { // xl
                setIconSize(40);
            } else if (window.innerWidth >= 1024) { // lg
                setIconSize(36);
            } else if (window.innerWidth >= 768) { // lg
                setIconSize(32);
            } else {
                setIconSize(30);
            } 
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    return (
        <div className="h-screen w-full p-8 sm:p-4 md:p-8 lg:p-12 xl:p-16 2xl:p-20 bg-cover bg-center bg-no-repeat flex flex-col items-center gap-10 py-20"
        style={{ backgroundImage: "url('bg-2.jpg')" }}>
            <div className="w-full flex flex-col justify-start gap-6">
                <h1 className=" text-white text-3xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl flex items-center justify-center gap-2 font-bold "><CircleUserRound size={iconSize} color="#16a34a" />About Me</h1>
            </div>
            <div className="w-full flex flex-col sm:flex-row">
                <div className="w-full sm:w-2/4 md:w-2/4 lg:w-3/6 xl:w-1/2 2xl:w-5/12 flex flex-col text-center sm:text-left justify-start items-center gap-3 py-14 sm:py-0 sm:gap-4 md:gap4 lg:gap-6 xl:gap-10 2xl:gap-14 order-2 sm:order-none">
                    <p className="text-white text-lg sm:text-base md:text-base lg:text-lg xl:text-xl 2xl:text-2xl pt-0 sm:pt-8 md:pt-8 lg:pt-10 xl:pt-20 2xl:pt-36 font-bold ">
                        Hello, I&apos;m Gustavo and I&apos;m a Full Stack Developer with a degree in Systems Analysis and Development and a postgraduate degree in Software Engineering, Network Security and Data Engineering.</p>
                    <p className="text-white text-lg sm:text-base md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold ">
                        I really like this big world of programming. Since I was 12 years old, I have been playing with different languages ​​and tools in the field. And as always, creativity is at my side, creating new doors of knowledge and fun.</p>
                </div>
                <div className="w-full sm:w-2/4 md:w-2/4 lg:w-3/6 xl:w-1/2 2xl:w-1/2 flex justify-start flex-col items-center ml-auto pt-12 sm:pt-6 md:pt-6 lg:pt-10 xl:pt-14 2xl:pt-14 order-1 sm:order-none">
                    <Image 
                    src="/perfil.JPG" 
                    alt="Foto de perfil"
                    width={500} 
                    height={500}
                    className="w-72 sm:w-64 md:w-64 lg:w-72 xl:w-72 2xl:w-96 h-auto object-cover rounded-full border-4 sm:border-2 md-border-2 lg:border-2 xl:border-2 2xl:border-4 border-green-600"
                    />
                    <h1 className="text-white text-2xl sm:text-xl md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl pt-5 font-bold ">Gustavo Romão</h1>
                </div>

            </div>
        </div>
    )
}
