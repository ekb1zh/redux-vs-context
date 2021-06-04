import { useDispatch, useSelector } from 'react-redux'
import type { State } from './redux'
import Button from 'components/Button'
import { useEffect } from 'react'

type Props = {
  name: string
}

const ReduxButton: React.FC<Props> = ({ name }) => {
  console.log(name)

  const value = useSelector((state: State) => state[name])
  const dispatch = useDispatch()

  const increment = () => {
    dispatch({
      type: 'SET',
      payload: {
        name: name,
        value: typeof value === 'number' ? value + 1 : 0,
      },
    })
  }

  useEffect(increment, [])

  return <Button onClick={increment}>{value}</Button>
}

export default ReduxButton
