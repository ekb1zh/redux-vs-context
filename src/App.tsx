import styled from 'styled-components'

import ButtonsPanel from 'components/ButtonsPanel'

import ContextButton from 'components/ContextButton'
import { ContextProvider } from 'components/ContextButton/context'

import ReduxButton from 'components/ReduxButton'
import { ReduxProvider } from 'components/ReduxButton/redux'

const Container = styled.div`
  display: flex;
  width: 500px;
`

const App: React.FC = () => {
  return (
    <Container>
      <ButtonsPanel
        header='Context'
        footer={`При клике по кнопке, в консоль печатается 2 записи, т.к. обновляется объект контекста и перерендериваются все дочерние компоненты (в данном случае обе кнопки).`}
      >
        <ContextProvider>
          {['ContextButton-1', 'ContextButton-2'].map((name) => (
            <ContextButton key={name} name={name} />
          ))}
        </ContextProvider>
      </ButtonsPanel>

      <ButtonsPanel
        header='Redux'
        footer={`При клике по кнопке, в консоль печатается 1 запись, т.к. Redux перерендеривает только тех подписчиков для которых обновились данные (в данном случае одна кнопка).`}
      >
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
