import ContextButton from 'components/ContextButton'
import styled from 'styled-components'

import ButtonsPanel from 'components/ButtonsPanel'
import {
  ContextProvider,
  initialStore as contextInitialStore,
} from 'components/ContextButton/context'

import ReduxButton from 'components/ReduxButton'
import {
  ReduxProvider,
  initialStore as reduxInitialStore,
} from 'components/ReduxButton/redux'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 70%;
`

const App: React.FC = () => {
  return (
    <Container>
      <ButtonsPanel header='Context'>
        <ContextProvider>
          {Object.keys(contextInitialStore).map((name) => (
            <ContextButton key={name} name={name} />
          ))}
        </ContextProvider>
      </ButtonsPanel>
      <ButtonsPanel header='Redux'>
        <ReduxProvider>
          {Object.keys(reduxInitialStore).map((name) => (
            <ReduxButton key={name} name={name} />
          ))}
        </ReduxProvider>
      </ButtonsPanel>
    </Container>
  )
}

export default App
