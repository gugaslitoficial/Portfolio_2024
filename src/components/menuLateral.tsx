'use client'

import React, { ReactNode, useState } from "react"
import {
  AlignJustify,
  X,
  BriefcaseBusiness,
  CircleUserRound,
  Github,
  House,
  Search
} from "lucide-react"

export default function Menu() {
  const [isActive, setIsActive] = useState<boolean>(false)
  const items = [
    { icon: <House size={15} />, label: 'Home', targetId: 'home' },
    { icon: <Search size={15} />, label: 'About', targetId: 'about' },
    { icon: <BriefcaseBusiness size={15} />, label: 'Services', targetId: 'service' },
    { icon: <Github size={15} />, label: 'Portfolio', targetId: 'portfolio' },
    { icon: <CircleUserRound size={15} />, label: 'Contact', targetId: 'contact' },
  ]

  const handleScroll = (targetId: string) => {
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="fixed right-0 p-10">
      <div onClick={() => setIsActive(!isActive)} className="cursor-pointer bg-neutral-950 rounded-full p-3 shadow-md shadow-neutral-900">
        {isActive ? <X size={25} className="text-white" /> : <AlignJustify size={25} className="text-white" />}
      </div>
      {isActive &&
        <div className="h-auto w-[200px] flex flex-col gap-2 absolute right-24 top-14 p-2 bg-neutral-950 text-white rounded-xl shadow-md shadow-neutral-900">
          {items.map((item, index) => (
            <MenuLink key={index} icon={item.icon} label={item.label} targetId={item.targetId}
            onClick={() => handleScroll(item.targetId)}/>
          ))}
        </div>
      }
    </div>
  )
}

function MenuLink({ icon, label, targetId, onClick }: { icon: ReactNode, label: string, targetId: string, onClick: () => void}) {
  return (
    <div onClick={onClick} className="w-full h-auto flex items-center gap-2 cursor-pointer p-2 rounded-md hover:bg-neutral-900 hover:duration-200">
      {icon}{label}
    </div>
  )
}