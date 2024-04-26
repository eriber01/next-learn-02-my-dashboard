'use client'

import { SimpleWidget } from './SimpleWidget'
import { useAppSelector } from '@/store'
import { IoCafeOutline } from "react-icons/io5"


export const WidgetsGrid = () => {
  const count = useAppSelector(state => state.counter.count)

  return (
    <div className="flex flex-wrap p-2 items-center justify-center">
      <SimpleWidget
        title={count.toString()}
        label='Contador'
        subTitle='Productos en Carrito'
        href='/dashboard/counter'
        icon={<IoCafeOutline size={40} className="text-blue-500" />}
      />
      {/* <SimpleWidget /> */}
    </div>
  )
}
