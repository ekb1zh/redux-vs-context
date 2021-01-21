import { createStore, Reducer, AnyAction } from 'redux'
import { Provider } from 'react-redux'

type State = typeof initialStore
type Action = AnyAction & {
  payload: {
    name: string
    value: number
  }
}
type Store = typeof initialStore

const initialStore: Indexable<number> = {
  reduxButton_1: 0,
  reduxButton_2: 0,
}

const reducer: Reducer<State, Action> = (store = initialStore, action) => {
  if (action.type === 'SET') {
    const { name, value } = action.payload
    return {
      ...store,
      [name]: value,
    }
  } else {
    return store
  }
}

const ReduxProvider: React.FC = ({ children }) => {
  return <Provider store={createStore(reducer)}>{children}</Provider>
}

export { ReduxProvider, initialStore }
export type { Store, Action }
