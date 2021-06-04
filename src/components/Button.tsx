import styled from 'styled-components'

const Button = styled.button`
  width: 100%;
  height: 100px;

  font-size: 30px;

  &:not(:first-child) {
    margin-left: 10px;
  }
`

export default Button
