'use client'

import React, { ReactNode } from "react"
import { Cpu } from "lucide-react"

export default function Service() {
    return (
        <div className="h-screen w-full p-10 bg-cover bg-center bg-no-repeat flex flex-col items-end gap-10 py-20"
        style={{ backgroundImage: "url('bg-3.jpg')" }}>
            <div className="h-1/8 w-full flex flex-col justify-start gap-6">
                <h1 className="text-white text-5xl flex items-center justify-center gap-2 font-bold"><Cpu size={50} color="#16a34a" />My Service</h1>
            </div>
            <div className="h-full w-full flex justify-start text-end items-end">
                <div className="h-full w-1/2 flex flex-col ">
                    <h1 className="text-slate-950 text-4xl py-5 font-bold">
                        WEB DEVELOPMENT</h1>
                        <p 
                        className="text-white text-2xl font-semibold ">
                            I offer specialized web development services to transform your ideas into exceptional digital experiences. With expertise in HTML, CSS, JavaScript and modern frameworks, such as React and Vue.js, I am prepared to create websites and web applications that captivate and engage your target audience. From responsive design to performance optimization, I'm committed to delivering high-quality projects that drive your online success. Let's collaborate to make your web presence truly memorable.</p>
                    <h1 
                    className="text-slate-950 text-4xl py-5 font-bold ">
                        PROFESSIONAL QUALIFICATION</h1>
                        <p 
                        className="text-white text-2xl font-semibold ">
                            HTML, CSS, JavaScript, TypeScript, Java, Python, Flask, Django, Rest, React, Vue.js, Node.js, Next.js, Spring Boot, Airflow, Maven, Spark, Bootstrap, JUnit, SQL (Oracle, SQLServer , MySQL, PostgreSQL), NoSQL (MongoDB), GIT, GitHub, JSON, APIs, Cloud, Figma, GraphQL, Kafka, YARN, Jupyter, Colab, RabbitMQ, Swiper.js, Selenium, AJAX, Docker, VSCode, Eclipse and IntelliJ .</p>
                </div>
            </div>

        </div>
    )
}