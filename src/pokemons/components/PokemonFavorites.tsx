'use client'

import { useAppSelector } from "@/store"
import { PokemonGrid } from "./PokemonGrid"
import { useEffect, useState } from "react"
import { IoHeartOutline } from "react-icons/io5"

export const PokemonFavorites = () => {
  const favoritePokemons = useAppSelector(state => Object.values(state.pokemons.favorites))

  return (
    <div>
      {
        favoritePokemons.length
          ? <PokemonGrid pokemons={favoritePokemons} />
          : <NoFavorites />
      }
    </div>
  )
}

export const NoFavorites = () => {
  return (
    <div className="flex flex-col h-[50vh] items-center justify-center">
      <div className="flex flex-col justify-center items-center border bg-white rounded-lg p-5 shadow">
        <IoHeartOutline size={100} className="text-red-500" />
        <span className="text-black/50">No hay Favoritos</span>
      </div>
    </div>
  )
}