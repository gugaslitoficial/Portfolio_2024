'use client'

import React, { ReactNode, useState } from "react"
import {
  AlignJustify,
  BriefcaseBusiness,
  CircleUserRound,
  Github,
  House,
  Search
} from "lucide-react"

export default function Menu() {
  const [isActive, setIsActive] = useState<boolean>(false)
  const items = [
    { icon: <House size={15} />, label: 'Inicial' },
    { icon: <Search size={15} />, label: 'Sobre' },
    { icon: <BriefcaseBusiness size={15} />, label: 'Serviços' },
    { icon: <Github size={15} />, label: 'Porfólio' },
    { icon: <CircleUserRound size={15} />, label: 'Contato' },
  ]

  return (
    <div className="fixed right-0 p-10">
      <div onClick={() => setIsActive(!isActive)} className="cursor-pointer bg-neutral-950 rounded-full p-3 shadow-md shadow-neutral-900">
        <AlignJustify size={25} className="text-white" />
      </div>
      {isActive &&
        <div className="h-auto w-[200px] flex flex-col gap-2 absolute right-24 top-14 p-2 bg-neutral-950 text-white rounded-xl shadow-md shadow-neutral-900">
          {items.map((item: { icon: ReactNode, label: string, }, index: number) => (
            <MenuLink key={index} icon={item.icon} label={item.label} />
          ))}
        </div>
      }
    </div>
  )
}

function MenuLink({ icon, label }: { icon: ReactNode, label: string }) {
  return (
    <div className="w-full h-auto flex items-center gap-2 cursor-pointer p-2 rounded-md hover:bg-neutral-900 hover:duration-200">
      {icon}{label}
    </div>
  )
}