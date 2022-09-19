import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { lazy, Suspense, useEffect, useState} from "react";
import styled from "styled-components";

const Details = lazy(() => import('../../components/Details/Details.jsx'));

const HomeButton = styled.button`
  padding: 0.6rem 2.1rem;
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.elements};
  cursor: pointer;
  border-radius: 5px;
  font-size: 1rem;
  border: none;
  font-weight: 400;
  -webkit-box-shadow: 0px 0px 5px 3px rgba(0,0,0,0.2);
  -moz-box-shadow: 0px 0px 5px 3px rgba(0,0,0,0.2);
  box-shadow: 0px 0px 5px 3px rgba(0,0,0,0.2);
  display: block;
  margin-bottom: 4.5rem;
`


function CountryPage() {
  const router = useRouter();
  const { country } = router.query;
  const [details, setDetails] = useState({});

  const getCountry = async () => {
    if(country){
      console.log(country)
      const response = await fetch(`https://restcountries.com/v3.1/alpha/${country}`)
      const data = await response.json();
      setDetails(data[0])
    }
  }

  useEffect(() => {
    getCountry()
  }, [country]);

  return (
    <div>
      <Head>
        <title>{details?.name?.official || country}</title>
      </Head>

      <Link href={"/"}>
        <HomeButton>
          ← Back
        </HomeButton>
      </Link>
      <Suspense fallback={<div>Loading...</div>}>
        {Object.keys(details).length !== 0 && 
      <Details details={details} />
        }
      </Suspense>

    </div>
  );
}

export default CountryPage;
