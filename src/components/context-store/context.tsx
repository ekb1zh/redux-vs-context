import React, { useContext, useState } from 'react'

type Store = {
  a: number
  b: number
}

type ContextValue = {
  store: Store
  setStore: React.Dispatch<React.SetStateAction<Store>>
}

const Context = React.createContext<ContextValue>(null!)

function createInitialStore() {
  return {
    a: 0,
    b: 0,
  }
}

const Provider: React.FC = ({ children }) => {
  const [store, setStore] = useState(createInitialStore)
  return (
    <Context.Provider value={{ store, setStore }}>{children}</Context.Provider>
  )
}

function useContextStore() {
  return useContext<ContextValue>(Context)
}

export { Provider, useContextStore }
