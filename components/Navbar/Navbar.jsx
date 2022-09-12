import Image from 'next/image';
import { BsMoonFill, BsMoon } from "react-icons/bs";
import { IconContext } from "react-icons";
import { FaMoon } from "react-icons/fa";
import { Header, Nav, ToggleContainer, Heading, Button, Paragraph } from './Navbar.styles';

function Navbar({ themeToggle, theme}) {
  return (
    <Header>
      <Nav>
        <Heading>Where in the world?</Heading>
        <ToggleContainer>
          <Button onClick={themeToggle}>
            { theme === 'light' ? <Moon color='hsl(200, 15%, 8%)' /> : <Moon color='hsl(0, 0%, 100%)' />}
          </Button>
          <Paragraph>Dark Mode</Paragraph>
        </ToggleContainer>
      </Nav>
    </Header>
  )
}

function Moon({color}){
  return (
    <IconContext.Provider value={{color: color, size: '16px'}}>
      <BsMoonFill />
    </IconContext.Provider>
  )
}

export default Navbar;