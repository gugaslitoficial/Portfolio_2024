'use client'

import React, { useEffect, useState } from "react"
import { Github } from "lucide-react"
import Image from 'next/image'

interface CardProps {
  name: string
  description: string
  isPrivate: boolean
  avatar_url: string
  homepage: string
  html_url: string
}

export default function GitHub() {
  const [repositories, setRepositories] = useState([])

  async function fetchApiGitHub() {
    fetch('https://api.github.com/users/gugaslitoficial/repos').then((response) => response.json()).then((repos) => {
      setRepositories(repos)
    }).catch((error) => {
      console.log(error)
    })
  }

  useEffect(() => {
    fetchApiGitHub()
  }, [])

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
    <div className="min-h-screen w-full flex flex-col items-center md:gap-8 lg:gap-12 xl:gap-16 2xl:gap-20 py-20 lg:p-12 xl:p-16 2xl:p-20"
    style={{ backgroundImage: "url('bg-4.jpg')" }}>
      <h1 className="text-white md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl flex items-center justify-center gap-2 font-bold"><Github size={iconSize} color="#16a34a" />Portfolio</h1>
      <div className="w-full grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-8 justify-items-center">
        {repositories.map((repository: any) => {
          if (repository.homepage) {
            return (
              <Card
                key={repository.id}
                name={repository.name}
                description={repository.description}
                homepage={repository.homepage}
                avatar_url={repository.owner.avatar_url}
                html_url={repository.html_url}
                isPrivate={repository.private}
              />
            )
          }
        })}
      </div>
    </div>
  )
}

function Card({ name, description, isPrivate, avatar_url, homepage, html_url }: CardProps) {
  return (
    <div className="md:w-4/5 lg:w-2/3 xl:w-5/6 2xl:w-3/4 bg-neutral-950 flex flex-col items-start justify-between gap-2 rounded-xl shadow-md shadow-slate-800 border border-neutral-700 p-6 ">
      <div className="w-full flex items-center justify-between ">
        <h1 className="text-white uppercase font-bold">{name}</h1>
        <Image 
        className="md:h-10 md:w-10 lg:h-12 lg:w-12 xl:h-14 xl:w-14 h-20 w-20 rounded-full"
        width={500} 
        height={500} 
        src={avatar_url} alt="Avatar" />
      </div>
      <p className="text-neutral-400 font-semibold">{description}</p>
      <div className="flex items-start">
        <p className={`text-white py-1 px-3 rounded-2xl text-sm ${isPrivate ? 'bg-neutral-800' : 'bg-green-700'}`}>{isPrivate ? 'Private' : 'Public'}</p>
      </div>
      <div className="w-full flex items-center justify-center md:gap-5 lg:gap-5 xl:gap-4 2xl:gap-3 md:mt-2 lg:mt-4 xl:mt-6 2xl:mt-8">
      <button 
        onClick={() => window.open(homepage, "_blank", "noopener noreferrer")} 
        className="md:w-3/5 lg:w-2/5 xl:w-2/5 2xl:w-1/3 text-white border border-neutral-700 rounded-md px-3 py-1 text-base hover:border-transparent hover:bg-neutral-800">
        Deploy
      </button>

      <button 
        onClick={() => window.open(html_url, "_blank", "noopener noreferrer")} 
        className="md:w-3/5 lg:w-2/5 xl:w-2/5 2xl:w-1/3 text-white bg-blue-900 rounded-md px-3 py-1 text-base hover:bg-blue-950">
        Repository
      </button>

      </div>
    </div>
  )
}