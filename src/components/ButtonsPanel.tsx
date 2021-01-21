import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

const ChildrenContainer = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 20px;
`

type Props = {
  header: string
}

const ButtonsPanel: React.FC<Props> = ({ header, children }) => {
  return (
    <Container>
      {header}
      <ChildrenContainer>{children}</ChildrenContainer>
    </Container>
  )
}

export default ButtonsPanel
