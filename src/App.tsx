import ContextButton from 'components/ContextButton'
import styled from 'styled-components'

import ButtonsPanel from 'components/ButtonsPanel'
import {
  ContextProvider,
  initialState as contextInitialState,
} from 'components/ContextButton/context'

import ReduxButton from 'components/ReduxButton'
import {
  ReduxProvider,
  initialState as reduxInitialState,
} from 'components/ReduxButton/redux'

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
          {Object.keys(contextInitialState).map((name) => (
            <ContextButton key={name} name={name} />
          ))}
        </ContextProvider>
      </ButtonsPanel>

      <ButtonsPanel header='Redux'>
        <ReduxProvider>
          {Object.keys(reduxInitialState).map((name) => (
            <ReduxButton key={name} name={name} />
          ))}
        </ReduxProvider>
      </ButtonsPanel>
    </Container>
  )
}

export default App
