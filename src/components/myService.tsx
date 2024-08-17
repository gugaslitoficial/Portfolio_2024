'use client'

import React, { ReactNode, useState, useEffect } from "react"
import { Cpu } from "lucide-react"

export default function Service() {

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

    return (
        /*Para manter a responsividade no projeto irei deixar a configuração padrão voltada para o Mobile e, das configuurações do sm até o 2xl deixarei para as telas de Desktop - Claro, também deixarei algumas configurações padrões para ambos*/
        <div className="h-screen w-full p-3 sm:p-4 md:p-8 lg:p-10 xl:p-16 2xl:p-20 bg-cover bg-center bg-no-repeat flex flex-col items-end gap-16 sm:gap-2 md:gap-2 lg:gap-0 xl:gap-8 2xl:gap-10 py-20" 
        style={{ backgroundImage: "url('bg-3.jpg')" }}>
            <div className="w-full flex flex-col justify-start gap-6">
                <h1 className="text-white text-3xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl flex items-center justify-center gap-2 font-bold"><Cpu size={iconSize} color="#16a34a" />My Service</h1>
            </div>
            <div className="w-full flex justify-start text-start sm:text-end sm:items-end">
                <div className="w-full sm:w-6/12 md:w-6/12 lg:w-3/6 xl:w-1/2 2xl:w-1/2 flex flex-col">
                    <h1 className="text-slate-950 text-xl sm:text-sm md:text-base lg:text-base xl:text-xl 2xl:text-4xl pt-0 pb-3 sm:pt-3 sm:pb-1 md:pt-1 md:pb-2 lg:pt-5 xl:py-0 font-bold">
                        WEB DEVELOPMENT</h1>
                        <p 
                        className=" text-slate-50 sm:text-white text-sm sm:text-sm md:text-sm lg:text-sm xl:text-lg 2xl:text-2xl font-bold sm:font-semibold"
                        style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                            I offer specialized web development services to transform your ideas into exceptional digital experiences. With expertise in HTML, CSS, JavaScript and modern frameworks, such as React and Vue.js, I&apos;m prepared to create websites and web applications that captivate and engage your target audience. From responsive design to performance optimization, I&apos;m committed to delivering high-quality projects that drive your online success. Let&apos;s collaborate to make your web presence truly memorable.</p>
                    <h1 
                    className="text-slate-950 text-xl sm:text-sm md:text-base lg:text-base xl:text-xl 2xl:text-4xl pt-4 pb-3 sm:pb-0 sm:pt-0 sm:py-2 md:py-2 lg:py-3 xl:py-5 font-bold ">
                        PROFESSIONAL QUALIFICATION</h1>
                        <p 
                        className="text-slate-50 sm:text-white text-sm sm:text-sm md:text-sm lg:text-sm xl:text-lg 2xl:text-2xl font-bold sm:font-semibold "
                        style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                            HTML, CSS, JavaScript, TypeScript, Java, Python, Flask, Django, Rest, React, Vue.js, Node.js, Next.js, Spring Boot, Airflow, Maven, Spark, Bootstrap, JUnit, SQL (Oracle, SQLServer , MySQL, PostgreSQL), NoSQL (MongoDB), GIT, GitHub, JSON, APIs, Cloud, Figma, GraphQL, Kafka, YARN, Jupyter, Colab, RabbitMQ, Swiper.js, Selenium, AJAX, Docker, VSCode, Eclipse and IntelliJ .</p>
                </div>
            </div>

        </div>
    )
}