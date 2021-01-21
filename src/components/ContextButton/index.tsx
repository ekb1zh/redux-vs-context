import { useContextStore } from './context'
import styled from 'styled-components'

type Props = {
  name: string
}

const Button = styled.button`
  height: 100px;
  width: 100px;
`

const ContextButton: React.FC<Props> = ({ name }) => {
  const { store, setStore } = useContextStore()

  console.log(`Button: '${name}'`)

  function handleClick() {
    setStore((prev) => ({
      ...prev,
      [name]: prev[name] + 1,
    }))
  }

  return <Button onClick={handleClick}>{store[name]}</Button>
}

export default ContextButton
