import { HeaderPage } from "@/components";
import { PokemonFavorites, PokemonGrid, PokemonResponse, SimplePokemon } from "@/pokemons";
import type { Metadata } from "next";
import { IoHeart } from "react-icons/io5";

export const metadata: Metadata = {
  title: 'Favoritos',
  description: 'Listado de Favotitos'
}

export default async function PokemonsPage() {

  return (
    <div className="flex flex-col">
      <HeaderPage name="Pokemons Favoritos" description="Global State" />
      <PokemonFavorites />
    </div>
  );
}