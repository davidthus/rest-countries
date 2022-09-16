import Navbar from '../Navbar/Navbar';
import { useState, useEffect } from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import { lightmode, darkmode } from '../../styles/theme.js'


const GlobalStyle = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  font-family: 'Nunito Sans', sans-serif;
  background: ${props => props.theme.background}
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

@media (prefers-color-scheme: dark) {
  html {
    color-scheme: dark;
  }
}
`

const Main = styled.main`
  width: 86%;
  max-width: 1200px;
  margin: 120px auto 0;
`


function Layout({ children }) {
  const [ Theme, setTheme ] = useState('dark');
  
  const themeToggle = () => {
    Theme === 'light' ? setTheme('dark') : setTheme('light');
  }


  return (
    <>
    <ThemeProvider theme={Theme === 'light' ? lightmode : darkmode}>
      <GlobalStyle />
      <Navbar theme={Theme} themeToggle={themeToggle} />
      <Main>{children}</Main>
    </ThemeProvider>
    </>
  )
}

export default Layout