import { useContextState } from './context'
import Button from 'components/Button'
import { useEffect } from 'react'

type Props = {
  name: string
}

const ContextButton: React.FC<Props> = ({ name }) => {
  console.log(name)

  const { state, setState } = useContextState()

  const increment = () => {
    setState((prev) => ({
      ...prev,
      [name]: typeof prev[name] === 'number' ? prev[name] + 1 : 0,
    }))
  }

  useEffect(increment, [])

  return <Button onClick={increment}>{state[name]}</Button>
}

export default ContextButton
