import { HeaderPage } from "@/components";
import { PokemonGrid, PokemonResponse, SimplePokemon } from "@/pokemons";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Listado de Pokemons',
  description: 'Listado de Pokemons'
}

const getPokemons = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {
  const data: PokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    .then(res => res.json())

  const pokemons = data.results.map(pokemon => ({
    id: Number(pokemon.url.split('/').at(-2)!),
    name: pokemon.name
  }))

  return pokemons
}

export default async function PokemonsPage() {
  const pokemons = await getPokemons(151)

  return (
    <div className="flex flex-col">
      <HeaderPage name="Listado de Pokemons" description="estaticos" />
      <PokemonGrid pokemons={pokemons} />
    </div>
  );
}