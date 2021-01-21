import React, { useContext, useState } from 'react'

type ContextValue = {
  state: Indexable<number>
  setState: React.Dispatch<React.SetStateAction<Indexable<number>>>
}

const Context = React.createContext<ContextValue>(null!)

const ContextProvider: React.FC = ({ children }) => {
  const [state, setState] = useState({})
  return (
    <Context.Provider value={{ state, setState }}>{children}</Context.Provider>
  )
}

function useContextState() {
  return useContext<ContextValue>(Context)
}

export { ContextProvider, useContextState }
