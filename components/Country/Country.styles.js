import styled from "styled-components";

export const Container = styled.div`
  max-width: 225px;
  padding: 1.5rem;
  cursor: pointer;
  border-radius: 5px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  background-color: ${props => props.theme.elements};
  outline: ${props => props.theme.input};
  justify-self: center;
`;

export const ImageContainer = styled.div`
  width: 100%;
`;

export const TextContainer = styled.article`
  padding: 1rem;
  width: 100%;
`;

export const CountryName = styled.h3`
  font-size: 1.3rem;
  font-weight: 800;
  margin: 0 0 1rem;
  color: ${(props) => props.theme.text};
`;

export const Value = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.text};
  font-weight: 300;
  margin: 0;
`;

export const Key = styled(Value)`
  font-weight: 600;
`

export const Row = styled.div`
  display: flex;
  gap: 0.5rem;
  margin: 0;
`
