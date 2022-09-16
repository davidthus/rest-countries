import Head from 'next/head'
import { Search, Filter } from '../components';
import styled from 'styled-components';
import { Suspense, lazy} from 'react';

const Country = lazy(() => import('../components/Country/Country'));

const Container = styled.div`
  width: 100%;
`
const Loading = styled.p`
  color: red;
  font-weight: 800;
`

const SearchBar = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 5%;
  row-gap: 3.5rem;
  
  @media screen and (max-width: 1200px){
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 950px){
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 650px){
    grid-template-columns: repeat(1, 1fr);
  }
`

export default function Home({countries}) {

  console.log(countries[0])

  return (
    <div>
      <Head>
        <title>Rest-Countries</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Container>

      <SearchBar>
        <Search />
        <Filter />
      </SearchBar>

      <Suspense fallback={<Loading>Loading...</Loading>}>
      <Grid>
      {
        countries.map(country => {
          return <Country key={country["cca3"]} country={country} />
        })
      }
      </Grid>
      </Suspense>

      </Container>
    </div>
  )
}

export async function getStaticProps() {
  // Call an external API endpoint to get countries.
  const res = await fetch('https://restcountries.com/v3.1/all?fields=name,capital,population,region,cca3,flags')
  const countries = await res.json()

  // By returning { props: { countries } }, the Home component
  // will receive `countries` as a prop at build time
  return {
    props: {
      countries,
    },
  }
}