import { createStore, Reducer, Action as ActionBase } from 'redux'
import { Provider } from 'react-redux'

type State = Indexable
type Action = ActionBase<'SET'> & {
  payload: {
    name: string
    value: number
  }
}

const reducer: Reducer<State, Action> = (state = {}, action) => {
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

export { ReduxProvider }
export type { State, Action }
