import styled from 'styled-components'

export const Header = styled.header`
  width: 100%;
  height: 80px;
  position: absolute;
  top: 0;
  z-index: 10;
  background: ${props => props.theme.elements};
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Nav = styled.nav`
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ToggleContainer = styled.span`
  display: flex;
  align-items: center;
  gap: .4rem;
  `

export const Heading = styled.h1`
  font-size: 1.5rem;
  color: ${props => props.theme.text};
`

export const Button = styled.button`
  outline: none;
  border: none;
  background: none;
  cursor: pointer;
  `

export const Paragraph = styled.p`
  font-weight: 600;
  color: ${props => props.theme.text};
`

