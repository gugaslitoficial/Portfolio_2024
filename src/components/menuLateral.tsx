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
import { Link } from 'react-router-dom';

export default function Menu() {
  const [isActive, setIsActive] = useState<boolean>(false)
  const items = [
    { icon: <House size={15} />, label: 'Home', path: '/home' },
    { icon: <Search size={15} />, label: 'About', path: '/aboutMe' },
    { icon: <BriefcaseBusiness size={15} />, label: 'Services', path: '/myService' },
    { icon: <Github size={15} />, label: 'Portfolio', path: '/portfolio' },
    { icon: <CircleUserRound size={15} />, label: 'Contact', path: '/contactMe' },
  ]

  return (
    <div className="fixed right-0 p-10">
      <div onClick={() => setIsActive(!isActive)} className="cursor-pointer bg-neutral-950 rounded-full p-3 shadow-md shadow-neutral-900">
        <AlignJustify size={25} className="text-white" />
      </div>
      {isActive &&
        <div className="h-auto w-[200px] flex flex-col gap-2 absolute right-24 top-14 p-2 bg-neutral-950 text-white rounded-xl shadow-md shadow-neutral-900">
          {items.map((item, index) => (
            <MenuLink key={index} icon={item.icon} label={item.label} path={item.path} />
          ))}
        </div>
      }
    </div>
  )
}

function MenuLink({ icon, label, path }: { icon: ReactNode, label: string, path: string }) {
  return (
    <Link to={path} className="w-full h-auto flex items-center gap-2 cursor-pointer p-2 rounded-md hover:bg-neutral-900 hover:duration-200">
      {icon}{label}
    </Link>
  )
}