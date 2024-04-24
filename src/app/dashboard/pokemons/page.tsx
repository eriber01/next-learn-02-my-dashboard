import { PokemonGrid, PokemonResponse, SimplePokemon } from "@/pokemons";

const getPokemons = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {
  const data: PokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    .then(res => res.json())

  const pokemons = data.results.map(pokemon => ({
    id: Number(pokemon.url.split('/').at(-2)!),
    name: pokemon.name
  }))

  // throw new Error("Esto es un Error");

  return pokemons
}

export default async function PokemonsPage() {
  const pokemons = await getPokemons(151)

  return (
    <div className="flex flex-col">
      <div className="flex justify-center my-6">
        <div className="bg-white text-black py-1 shadow text-2xl text-center border rounded w-2/4">
          <div className="flex flex-col">
            <span>Listado de Pokemons</span>
            <small className="text-black/50">(estaticos)</small>
          </div>
        </div>
      </div>
      <PokemonGrid pokemons={pokemons} />
    </div>
  );
}