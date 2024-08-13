'use client'

import React, { ReactNode } from "react"
import { CircleUserRound } from "lucide-react"
import Image from 'next/image'

export default function About() {
    return (
        <div className="h-screen w-full p-40 bg-cover bg-center bg-no-repeat flex flex-col items-center gap-20 py-20"
        style={{ backgroundImage: "url('bg-2.jpg')" }}>
            <div className="h-1/8 w-full flex flex-col justify-start gap-6">
                <h1 className=" text-white text-5xl flex items-center justify-center gap-2 font-bold "><CircleUserRound size={50} color="#16a34a" />About Me</h1>
            </div>
            <div className="h-full w-full flex">
                <div className="h-full w-5/12 flex flex-col justify-start items-center gap-10">
                    <p className="text-white text-2xl pt-20 font-bold ">
                        Hello, I'm Gustavo and I'm a Full Stack Developer with a degree in Systems Analysis and Development and a postgraduate degree in Software Engineering, Network Security and Data Engineering.</p>
                    <p className="text-white text-2xl font-bold ">
                        I really like this big world of programming. Since I was 12 years old, I have been playing with different languages ​​and tools in the field. And as always, creativity is at my side, creating new doors of knowledge and fun.</p>
                </div>
                <div className="h-full w-1/2 flex justify-start flex-col items-center ml-auto pt-10">
                    <Image 
                    src="/perfil.JPG" 
                    alt="Foto de perfil"
                    width={500} 
                    height={500}
                    className="w-1/2 h-auto object-cover rounded-full border-4 border-green-600"
                    />
                    <h1 className="text-white text-4xl pt-5 font-bold ">Gustavo Romão</h1>
                </div>

            </div>
        </div>
    )
}
