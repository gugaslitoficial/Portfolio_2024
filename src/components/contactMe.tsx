'use client'

import React, { ReactNode } from "react"
import { 
    MessageSquareText,
    Phone,
    Mail ,
    LocateFixed
} from "lucide-react"

export default function Contact() {
    return (
        <div className="h-screen w-full p-40 bg-cover bg-center bg-no-repeat flex flex-col items-center gap-20 py-20 bg-neutral-950">
            <div className="h-1/8 w-full flex flex-col justify-start gap-6">
                <h1 className="text-white text-5xl flex items-center justify-center gap-2 font-bold "><MessageSquareText size={50} color="#16a34a" />Contact</h1>
            </div>
            <div className="h-full w-full flex flex-row gap-10">
                <div className="w-1/2 flex flex-col justify-start p-4">
                    <form className="flex flex-col gap-8 py-28">
                        <div className="flex gap-4">
                            <div className="flex-1">
                                <label htmlFor="first-name" className="block text-gray-600"></label>
                                <input
                                    type="text"
                                    id="first-name"
                                    name="first-name"   
                                    placeholder="First Name"
                                    className="w-full border-2 border-green-600 rounded-lg p-2 bg-transparent text-white"
                                    required
                                />
                            </div>
                            <div className="flex-1">
                                <label htmlFor="last-name" className="block text-gray-600"></label>
                                <input
                                    type="text"
                                    id="last-name"
                                    name="last-name"
                                    placeholder="Last Name"
                                    className="w-full border-2 border-green-600 rounded-lg p-2 bg-transparent text-white"
                                    required
                                />
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
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-gray-600"></label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Message..."
                                className="w-full border-2 border-green-500 rounded-lg p-2 bg-transparent text-white"
                                rows={4}
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="mt-4 bg-green-600 text-white rounded px-4 py-2 hover:bg-green-700"
                        >
                            Submit
                        </button>
                    </form>
                </div>
                <div className="w-1/2 flex items-center justify-center ">
                    <div className="h-2/4 w-4/6 text-white text-xl flex flex-col justify-center gap-10 font-bold bg-gradient-to-r from-green-400 to-green-800 rounded-3xl">
                        <p className="flex gap-4 ml-20"><LocateFixed size={27}/>Londrina/PR</p>
                        <p className="flex gap-4 ml-20"><Mail size={27}/>
                        <a href="mailto:gustavo-romao@hotmail.com" className="text-white no-underline cursor-pointer">gustavo-romao@hotmail.com</a></p>
                        <p className="flex gap-4 ml-20"><Phone size={27}/><a href="tel:+5543988786969" className="text-white no-underline cursor-pointer">(43) 98878-6969</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}