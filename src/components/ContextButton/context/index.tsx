import React, { useContext, useState } from 'react'

type ContextValue = {
  store: Indexable<number>
  setStore: React.Dispatch<React.SetStateAction<Indexable<number>>>
}

const initialStore: Indexable<number> = {
  contextButton_1: 0,
  contextButton_2: 0,
}

const Context = React.createContext<ContextValue>(null!)

const ContextProvider: React.FC = ({ children }) => {
  const [store, setStore] = useState(initialStore)
  return (
    <Context.Provider value={{ store, setStore }}>{children}</Context.Provider>
  )
}

function useContextStore() {
  return useContext<ContextValue>(Context)
}

export { ContextProvider, useContextStore, initialStore }
