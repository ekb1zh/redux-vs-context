import { Provider } from './context'
import Button from './Button'

const ContextStore: React.FC = () => {
  return (
    <Provider>
      <div>
        {['a', 'b'].map((name: any) => (
          <Button name={name} />
        ))}
      </div>
    </Provider>
  )
}

export default ContextStore
