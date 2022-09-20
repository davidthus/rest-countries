import styled from "styled-components";

export const Select = styled.select`
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.elements};
  border: none;
  height: 4rem;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 300;
  padding: 1rem;
  -webkit-box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.2);
`;
