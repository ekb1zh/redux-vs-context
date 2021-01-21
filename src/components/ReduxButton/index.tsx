import { useDispatch, useSelector } from 'react-redux'
import type { State, Action } from './redux'
import Button from 'components/Button'

type Props = {
  name: keyof State
}

const ReduxButton: React.FC<Props> = ({ name }) => {
  console.log(`Button: '${name}'`)

  const value = useSelector((state: State) => state[name])
  const dispatch = useDispatch()

  function handleClick() {
    dispatch({
      type: 'SET',
      payload: {
        name: name,
        value: value + 1,
      },
    })
  }

  return <Button onClick={handleClick}>{value}</Button>
}

export default ReduxButton
