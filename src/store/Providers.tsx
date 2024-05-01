'use client'
import { useEffect } from 'react';
import { store } from './index';
import { Provider } from 'react-redux';
import { setFavoritePokemons } from './pokemons/pokemon';

interface Props {
  children: React.ReactNode
}

export const Providers = ({ children }: Props) => {

  useEffect(() => {
    const getInitialState = () => {
      const favorites = JSON.parse(localStorage.getItem('favorite-pokemons') ?? '{}')
      console.log({ favorites });
      store.dispatch(setFavoritePokemons(favorites))
    }
    getInitialState()
  }, [])

  return (
    <div>
      <Provider store={store}>
        {children}
      </Provider>
    </div>
  )
}
