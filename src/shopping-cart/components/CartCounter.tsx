'use client'
import { useState } from "react"

interface Props {
  value?: number
}

export const CartCounter = ({ value = 10 }: Props) => {
  const [counter, setCounter] = useState(value)

  return (
    <>
      <span className="text-9xl">{counter}</span>
      <div className="flex">
        <button
          onClick={() => setCounter(counter + 1)}
          className="flex items-center justify-center p-1 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[80px] mr-2"
        >
          +1
        </button>

        <button
          onClick={() => setCounter(counter - 1)}
          className="flex items-center justify-center p-1 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[80px] mr-2"
        >
          -1
        </button>
      </div>
    </>
  )
}