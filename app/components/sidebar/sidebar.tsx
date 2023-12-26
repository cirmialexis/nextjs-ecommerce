'use client'

import { useSidebarContext } from '@/app/context/context'
import { Burger } from '../burger/burger'

export const Sidebar = () => {
  const { sidebar } = useSidebarContext()

  return (
    <div
      className={`flex flex-col fixed top-0 h-screen w-48 z-20 bg-slate-100 border-r border-solid border-slate-200 ${
        sidebar
          ? 'translate-x-0 transition-all'
          : '-translate-x-48 transition-all'
      }`}
    >
      <Burger className='mx-auto my-5' />
      <ul className='mt-5'>
        <li className='ps-3 py-3 my-1 hover:bg-slate-200 transition-all'>
          Hola
        </li>
        <li className='ps-3 py-3 my-1 hover:bg-slate-200 transition-all'>
          cómo
        </li>
        <li className='ps-3 py-3 my-1 hover:bg-slate-200 transition-all'>
          estás
        </li>
      </ul>
    </div>
  )
}
