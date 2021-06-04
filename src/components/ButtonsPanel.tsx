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
  font-size: 20px;

  width: 100%;

  border: solid 1px grey;
  padding: 20px 30px;

  &:not(:first-child) {
    margin-left: 40px;
  }
`

const Header = styled.span`
  font-size: 40px;
`

const ChildrenContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  margin: 20px 0;
`

const ButtonsPanel: React.FC<Props> = ({ header, footer, children }) => {
  return (
    <Container>
      <Header>{header}</Header>
      <ChildrenContainer>{children}</ChildrenContainer>
      {footer}
    </Container>
  )
}

export default ButtonsPanel
