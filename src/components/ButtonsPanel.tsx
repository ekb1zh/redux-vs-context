import styled from 'styled-components'

type Props = {
  header: string
  footer: string
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: justify;
  min-width: 0;

  &:last-child {
    margin-left: 40px;
  }
`

const ChildrenContainer = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 20px 0;
`

const ButtonsPanel: React.FC<Props> = ({ header, footer, children }) => {
  return (
    <Container>
      {header}
      <ChildrenContainer>{children}</ChildrenContainer>
      {footer}
    </Container>
  )
}

export default ButtonsPanel
