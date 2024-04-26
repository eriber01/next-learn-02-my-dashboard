'use client'

import Link from "next/link"
import { MenuItemsI } from "../interfaces"
import { usePathname } from "next/navigation"

export const SidebarMenuItem = ({ path, icon, title, subTitle }: MenuItemsI) => {
  const pathName = usePathname()

  return (
    <>
      <Link
        href={path}
        className={
          `${pathName === path && 'bg-blue-800'} 
          rounded w-full px-2 inline-flex space-x-2 items-center border border-slate-700 py-3 my-1 hover:bg-white/5 transition ease-linear duration-150`
        }
      >
        <div>
          {icon}
        </div>
        <div className="flex flex-col">
          <span className="text-base font-bold leading-5 text-white">{title}</span>
          <span className="text-sm text-white/50 hidden md:block">{subTitle}</span>
        </div>
      </Link>
    </>
  )
}
