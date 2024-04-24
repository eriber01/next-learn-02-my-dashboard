import { PokemonResponse, SimplePokemon } from "@/app/pokemons";

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
  const pokemons = await getPokemons()
  console.log(pokemons);

  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap gap-10 items-center justify-center">
    
      </div>
    </div>
  );
}