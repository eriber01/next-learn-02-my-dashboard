import React from 'react'
import { store } from './index';
import { Provider } from 'react-redux';

interface Props {
  children: React.ReactNode
}

export const Providers = ({ children }: Props) => {
  return (
    <div>
      <Provider store={store}>
        {children}
      </Provider>
    </div>
  )
}