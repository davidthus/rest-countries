import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import {
  BorderCountry,
  BorderKey,
  BorderValue,
  Column,
  Container,
  CountryHeading,
  DetailsContainer,
  ImageContainer,
  InfoContainer,
  Key,
  Links,
  Row,
  Value,
} from "./Details.styles";

function Details({ details }) {
  const borderCountries = details.borders;

  const formattedPopulation = useRef(
    details.population.toLocaleString("en-US")
  );

  function valsToStr(object) {
    let string = "";

    Object.entries(object).map(([key, value], index) => {
      index === 0 ? (string += value) : (string += `, ${value}`);
    });
    return string;
  }

  function currencyName(obj) {
    let string = "";
    for (const property in obj) {
      string += obj[property].name;
    }
    return string;
  }

  function native(obj) {
    let string = "";
    Object.entries(obj).map((item, index) => {
      if (index === 0) {
        string += item[1].common;
      }
    });
    return string;
  }

  return (
    <Container>
      <ImageContainer>
        <Image
          src={details.flags.png}
          alt={`The flag of ${details.name.common}`}
          width={600}
          height={400}
        />
      </ImageContainer>
      <DetailsContainer>
        <CountryHeading>{details.name.common}</CountryHeading>
        <InfoContainer>
          <Column>
            <Row>
              <Key>Native Name:</Key>
              <Value>{native(details.name.nativeName)}</Value>
            </Row>
            <Row>
              <Key>Population:</Key>
              <Value>{formattedPopulation.current}</Value>
            </Row>
            <Row>
              <Key>Region:</Key>
              <Value>{details.region}</Value>
            </Row>
            <Row>
              <Key>Sub Region:</Key>
              <Value>{details.subregion}</Value>
            </Row>
            <Row>
              <Key>Capital:</Key>
              <Value>{details.capital[0]}</Value>
            </Row>
          </Column>
          <Column>
            <Row>
              <Key>Top Level Domain:</Key>
              <Value>{details.tld[0]}</Value>
            </Row>
            <Row>
              <Key>Currencies:</Key>
              <Value>{currencyName(details.currencies)}</Value>
            </Row>
            <Row>
              <Key>Languages:</Key>
              <Value>{valsToStr(details.languages)}</Value>
            </Row>
          </Column>
        </InfoContainer>
        <Links>
          <BorderKey>Border Countries:</BorderKey>
          <BorderValue>
            {borderCountries &&
              borderCountries.map((item, index) => {
                return (
                  <Link key={item} href={`/countries/${item}`}>
                    <BorderCountry>{item}</BorderCountry>
                  </Link>
                );
              })}
          </BorderValue>
        </Links>
      </DetailsContainer>
    </Container>
  );
}

export default Details;
