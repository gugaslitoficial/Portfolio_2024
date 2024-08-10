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
        <div className="h-screen w-full p-40 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('..//bg-1.jpg')" }}>

            <div className="h-full w-1/2 flex flex-col justify-center gap-6">
                <p className="text-white text-3xl font-bold">Hello, I'm</p>
                <h1 className="text-white text-7xl font-bold">Gustavo Romão</h1>
                <p className="text-white text-3xl font-semibold">FULL-STACK DEVELOPER | FREELANCER</p>
                <div className="flex items-center gap-3 my-10">
                    <Linkedin
                        size={35}
                        onClick={() => window.open("https://www.linkedin.com/in/gustavo-rom%C3%A3o-901376200/")}
                        className="cursor-pointer text-white bg-transparent text-base font-semibold hover:scale-110 hover:duration-75 hover:text-neutral-100"
                    />
                    <Github size={35} onClick={() => window.open("https://github.com/gugaslitoficial")} className="cursor-pointer text-white bg-transparent text-base font-semibold hover:scale-110 hover:duration-75 hover:text-neutral-100" />
                    <a href="https://www.instagram.com/gugaslito_oficial/?igsh=MWR1cGw5emR6Znc4NA%3D%3D" target="_blank" rel="noopener noreferrer">
                        <Instagram size={35} className="cursor-pointer text-white bg-transparent text-base font-semibold hover:scale-110 hover:duration-75 hover:text-neutral-100" />
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=5543988786969" target="_blank" rel="noopener noreferrer">
                        <MessageCircle size={35} className="cursor-pointer text-white bg-transparent text-base font-semibold hover:scale-110 hover:duration-75 hover:text-neutral-100" />
                    </a>
                </div>
                <div>
                    <a href="/CVGustavoRomão-Atualizado01.04.2024.pdf.pdf" target="_blank" rel="noopener noreferrer">
                        <button className="cursor-pointer text-white bg-transparent text-2xl font-bold hover:scale-110 hover:duration-75 hover:text-neutral-100">
                            Download CV
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}