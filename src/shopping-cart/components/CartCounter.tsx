'use client'
import { useAppDispatch, useAppSelector } from "@/store"
import { addOne, initCounterState, subtractOne } from "@/store/counter/counterSlice"
import { useEffect } from "react"

interface Props {
  value?: number
}

interface CounterRes {
  method: string;
  count: number;
}

const getApiCounter = async () => {
  const data = await fetch('/api/counter').then(res => res.json())
  console.log({ data });

  return data as CounterRes
}

export const CartCounter = ({ value = 0 }: Props) => {

  const count = useAppSelector(state => state.counter.count)
  const dispatch = useAppDispatch()

  // useEffect(() => {
  //   dispatch(initCounterState(value))
  // }, [dispatch, value])

  useEffect(() => {
    getApiCounter().then(({ count }) => dispatch(initCounterState(count)))
  }, [dispatch])


  return (
    <>
      <span className="text-9xl">{count}</span>
      <div className="flex">
        <button
          onClick={() => dispatch(addOne())}
          className="flex items-center justify-center p-1 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[80px] mr-2"
        >
          +1
        </button>

        <button
          onClick={() => dispatch(subtractOne())}
          className="flex items-center justify-center p-1 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[80px] mr-2"
        >
          -1
        </button>
      </div>
    </>
  )
}