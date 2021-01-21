import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import type { Store, Action } from './redux'

type Props = {
  name: keyof Store
}

const Button = styled.button`
  height: 100px;
  width: 100px;
`

const ReduxButton: React.FC<Props> = ({ name }) => {
  const value = useSelector((store: Store) => store[name])
  const dispatch = useDispatch()

  console.log(`Button: '${name}'`)

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
