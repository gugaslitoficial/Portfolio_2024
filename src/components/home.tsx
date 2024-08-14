'use client'

import React from "react";

import {
    Linkedin,
    Github,
    Instagram,
    MessageCircle,
} from "lucide-react"

export default function Home() {

    return (
        <div className="h-screen w-full p-8 md:p-16 lg:p-24 xl:p-32 bg-cover bg-center bg-no-repeat"
     style={{ backgroundImage: "url('..//bg-1.jpg')" }}>

    <div className="h-full w-1/2 md:w-1/2 xl:w-1/3 flex flex-col justify-center gap-6 border-2">
        <p className="text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">Hello, I&apos;m</p>
        <h1 className="text-white text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold">Gustavo Romão</h1>
        <p className="text-white text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold">FULL-STACK DEVELOPER | FREELANCER</p>
        <div className="flex flex-wrap items-center gap-3 my-8 md:my-10 xl:my-12">
            <Linkedin
                size={30}
                onClick={() => window.open("https://www.linkedin.com/in/gustavo-rom%C3%A3o-901376200/")}
                className="cursor-pointer text-white bg-transparent text-base font-semibold hover:scale-110 hover:duration-75 hover:text-neutral-100"
            />
            <Github size={30} onClick={() => window.open("https://github.com/gugaslitoficial")} className="cursor-pointer text-white bg-transparent text-base font-semibold hover:scale-110 hover:duration-75 hover:text-neutral-100" />
            <a href="https://www.instagram.com/gugaslito_oficial/?igsh=MWR1cGw5emR6Znc4NA%3D%3D" target="_blank" rel="noopener noreferrer">
                <Instagram size={30} className="cursor-pointer text-white bg-transparent text-base font-semibold hover:scale-110 hover:duration-75 hover:text-neutral-100" />
            </a>
            <a href="https://api.whatsapp.com/send?phone=5543988786969" target="_blank" rel="noopener noreferrer">
                <MessageCircle size={30} className="cursor-pointer text-white bg-transparent text-base font-semibold hover:scale-110 hover:duration-75 hover:text-neutral-100" />
            </a>
        </div>
        <div>
            <a href="/CVGustavoRomão-Atualizado01.04.2024.pdf.pdf" target="_blank" rel="noopener noreferrer">
                <button className="cursor-pointer text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-white bg-transparent hover:scale-110 hover:duration-75 hover:text-neutral-100">
                    Download CV
                </button>
            </a>
        </div>
    </div>
</div>


    )
}