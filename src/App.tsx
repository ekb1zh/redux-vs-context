import ContextButton from 'components/ContextButton'
import styled from 'styled-components'

import ButtonsPanel from 'components/ButtonsPanel'
import { ContextProvider } from 'components/ContextButton/context'

import ReduxButton from 'components/ReduxButton'
import { ReduxProvider } from 'components/ReduxButton/redux'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 430px;
`

const App: React.FC = () => {
  return (
    <Container>
      <ButtonsPanel header='Context'>
        <ContextProvider>
          {['ContextButton-1', 'ContextButton-2'].map((name) => (
            <ContextButton key={name} name={name} />
          ))}
        </ContextProvider>
      </ButtonsPanel>

      <ButtonsPanel header='Redux'>
        <ReduxProvider>
          {['ReduxButton-1', 'ReduxButton-2'].map((name) => (
            <ReduxButton key={name} name={name} />
          ))}
        </ReduxProvider>
      </ButtonsPanel>
    </Container>
  )
}

export default App
