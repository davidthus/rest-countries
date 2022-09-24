import Image from "next/image";
import { IconContext } from "react-icons";
import { BsMoon, BsMoonFill } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";
import {
  Button,
  Header,
  Heading,
  Nav,
  Paragraph,
  ToggleContainer,
} from "./Navbar.styles";

function Navbar({ themeToggle, theme }) {
  return (
    <Header>
      <Nav>
        <Heading>Where in the world?</Heading>
        <ToggleContainer>
          <Button type="button" onClick={themeToggle}>
            {theme === "light" ? (
              <Moon color="hsl(200, 15%, 8%)" />
            ) : (
              <Moon color="hsl(0, 0%, 100%)" />
            )}
            {"  "}
            Dark Mode
          </Button>
        </ToggleContainer>
      </Nav>
    </Header>
  );
}

function Moon({ color }) {
  return (
    <IconContext.Provider value={{ color: color, size: "16px" }}>
      <BsMoonFill />
    </IconContext.Provider>
  );
}

export default Navbar;
