import { useRef} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Container, ImageContainer, TextContainer, Key, Value, Row, CountryName } from './Country.styles'


function Country({ country}) {
  const formattedPopulation = useRef(country.population.toLocaleString("en-US"))

  return (
        <Link href={`/countries/${country["cca3"]}`} >
    <Container> 
        <ImageContainer>
        <Image src={`${country.flags.svg}`} width={270} height={180} />
        </ImageContainer>
        <TextContainer>
          <CountryName>{country.name.official}</CountryName>
          <Row><Key>Population:</Key><Value>{formattedPopulation.current}</Value></Row>
          <Row><Key >Region:</Key><Value>{country.region}</Value></Row>
          <Row><Key >Capital:</Key><Value>{country.capital[0]}</Value></Row>
        </TextContainer>
      </Container>
    </Link>
  )
}

export default Country