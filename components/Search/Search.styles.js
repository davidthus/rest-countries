import styled from "styled-components";

export const Input = styled.input`
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.elements};
  border: none;
  max-width: 370px;
  width: 100%;
  height: 4rem;
  border-radius: 5px;
  font-size: 1.2rem;
  font-weight: 600;
  padding-left: 1rem;
  -webkit-box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.2);
`;
