import { useEffect } from 'react'
import { useContextStore } from './context'

type Props = {
  name: 'a' | 'b'
}

const Button: React.FC<Props> = ({ name }) => {
  const { store, setStore } = useContextStore()

  useEffect(() => {
    console.log({ name })
  })

  function handleClick() {
    setStore((prev) => ({
      ...prev,
      [name]: prev[name] + 1,
    }))
  }

  return <button onClick={handleClick}>{store[name]}</button>
}

export default Button
