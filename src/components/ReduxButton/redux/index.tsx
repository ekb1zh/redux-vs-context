import { createStore, Reducer, AnyAction } from 'redux'
import { Provider } from 'react-redux'

type State = typeof initialState
type Action = AnyAction & {
  payload: {
    name: string
    value: number
  }
}
const initialState: Indexable<number> = {
  redux_value_1: 0,
  redux_value_2: 0,
}

const reducer: Reducer<State, Action> = (state = initialState, action) => {
  if (action.type === 'SET') {
    const { name, value } = action.payload
    return {
      ...state,
      [name]: value,
    }
  } else {
    return state
  }
}

const ReduxProvider: React.FC = ({ children }) => {
  return <Provider store={createStore(reducer)}>{children}</Provider>
}

export { ReduxProvider, initialState }
export type { State, Action }
