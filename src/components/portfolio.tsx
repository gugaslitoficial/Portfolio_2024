'use client'

import React, { useEffect, useState } from "react"
import { Github } from "lucide-react"

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

  return (
    <div className="min-h-screen w-full flex flex-col items-center gap-20 py-20 "
    style={{ backgroundImage: "url('bg-4.jpg')" }}>
      <h1 className="text-white text-5xl flex items-center justify-center gap-2 font-bold"><Github size={50} color="#16a34a" />Portfolio</h1>
      <div className="w-full grid grid-cols-3 gap-8 justify-items-center">
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
    <div className="w-3/4 bg-neutral-950 flex flex-col items-start justify-between gap-2 rounded-xl shadow-md shadow-slate-800 border border-neutral-700 p-6 ">
      <div className="w-full flex items-center justify-between ">
        <h1 className="text-white uppercase font-bold">{name}</h1>
        <img className="h-20 w-20 rounded-full" src={avatar_url} alt="Avatar" />
      </div>
      <p className="text-neutral-400 font-semibold">{description}</p>
      <div className="flex items-start">
        <p className={`text-white py-1 px-3 rounded-2xl text-sm ${isPrivate ? 'bg-neutral-800' : 'bg-green-700'}`}>{isPrivate ? 'privado' : 'público'}</p>
      </div>
      <div className="w-full flex items-center justify-center gap-3 mt-8">
      <button 
        onClick={() => window.open(homepage, "_blank", "noopener noreferrer")} 
        className="w-1/3 text-white border border-neutral-700 rounded-md px-3 py-1 text-base hover:border-transparent hover:bg-neutral-800">
        Deploy
      </button>

      <button 
        onClick={() => window.open(html_url, "_blank", "noopener noreferrer")} 
        className="w-1/3 text-white bg-blue-900 rounded-md px-3 py-1 text-base hover:bg-blue-950">
        Repositório
      </button>

      </div>
    </div>
  )
}