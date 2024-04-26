import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { SimplePokemon } from '@/pokemons';

interface PokemonFavoriteState {
  [key: string]: SimplePokemon
}

const getInitialState = (): PokemonFavoriteState => {
  const favorites = JSON.parse(localStorage.getItem('favorite-pokemons') ?? '{}')
  return favorites
}

const initialState: PokemonFavoriteState = {
  ...getInitialState()
  // '1': { id: 1, name: 'bulbasaur' },
  // '5': { id: 5, name: 'charmeleon' },
}

const pokemonSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<SimplePokemon>) => {

      const pokemon = action.payload
      const { id } = pokemon

      if (!!state[id]) {
        delete state[id]
        // return;
      } else {
        state[id] = pokemon
      }

      localStorage.setItem('favorite-pokemons', JSON.stringify(state))

    }
  }
});

export const { toggleFavorite } = pokemonSlice.actions

export default pokemonSlice.reducer