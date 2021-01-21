import { useContextState } from './context'
import Button from 'components/Button'

type Props = {
  name: string
}

const ContextButton: React.FC<Props> = ({ name }) => {
  console.log(`Button: '${name}'`)

  const { state, setState } = useContextState()

  function handleClick() {
    setState((prev) => ({
      ...prev,
      [name]: prev[name] + 1,
    }))
  }

  return <Button onClick={handleClick}>{state[name]}</Button>
}

export default ContextButton
