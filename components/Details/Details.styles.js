import styled from "styled-components";

export const Container = styled.article`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;


  @media screen and (max-width: 800px){
    flex-direction: column;
  }
`

export const ImageContainer = styled.aside`
  width: 40%;
  min-width: 350px;
  display: flex;
  -webkit-box-shadow: 0px 0px 5px 3px rgba(0,0,0,0.2);
  -moz-box-shadow: 0px 0px 5px 3px rgba(0,0,0,0.2);
  box-shadow: 0px 0px 5px 3px rgba(0,0,0,0.2);

  @media screen and (max-width: 400px){
    width: 100vw;
    min-width: 1px;
  }
`

export const DetailsContainer = styled.header`
  width: 46%;
  padding: 0rem 1rem 2rem 0;
  min-width: 350px;

  @media screen and (max-width: 400px){
    width: 100%;
    min-width: 1px;
  }
`

export const CountryHeading = styled.h1`
  font-size: 2rem;
  color: ${props => props.theme.text};
  margin: 1rem 0;
`

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 800px){
    gap: 2rem;
    flex-direction: column
  }
`

export const Value = styled.dt`
  font-size: 1rem;
  color: ${(props) => props.theme.text};
  margin: 0;
  font-weight: 300;
`;

export const Key = styled.dd`
  font-size: 1rem;
  color: ${(props) => props.theme.text};
  margin: 0;
  font-weight: 600;
`

export const Row = styled.dl`
  display: flex;
  gap: 0.5rem;
  margin: 0;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: .7rem;
`

export const Flex = styled.dt`
  display: flex;
  justify-content: center;
`

export const Links = styled(Row)`
  margin-top: max(3rem, 5vmin);
`

export const BorderValue = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`

export const BorderKey = styled(Key)`
  font-size: 1.2rem;
`

export const BorderCountry = styled.button`
  padding: .3rem 1.7rem;
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.elements};
  border-radius: 3px;
  border: none;
  cursor: pointer;
  font-size: 0.7rem;
  font-weight: 400;
  -webkit-box-shadow: 0px 0px 5px 3px rgba(0,0,0,0.2);
  -moz-box-shadow: 0px 0px 5px 3px rgba(0,0,0,0.2);
  box-shadow: 0px 0px 5px 3px rgba(0,0,0,0.2);
`