import { PokemonGrid, PokemonResponse, SimplePokemon } from "@/pokemons";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Favoritos',
  description: 'Listado de Favotitos'
}

export default async function PokemonsPage() {

  return (
    <div className="flex flex-col">
      <div className="flex justify-center my-6">
        <div className="bg-white text-black py-1 shadow text-2xl text-center border rounded w-2/4">
          <div className="flex flex-col">
            <span>Pokemons Favoritos</span>
            <small className="text-black/50">(Global State)</small>
          </div>
        </div>
      </div>
      <PokemonGrid pokemons={[]} />
    </div>
  );
}