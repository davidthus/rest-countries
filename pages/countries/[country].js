import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
// import styled from 'styled-components'
import { Details } from "../../components";
import styled from "styled-components";

const HomeButton = styled.button`
  padding: 1rem 1.5rem;
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.elements};
  cursor: pointer;
  border-radius: 5px;
  font-size: 1.4rem;
  border: none;
`


function CountryPage() {
  const router = useRouter();
  const { country } = router.query;
  const [details, setDetails] = useState(null);

  useEffect(() => {
    if (country) {
      fetch(`https://restcountries.com/v3.1/alpha/${country}`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setDetails(data[0]);
        });
    }
  }, [country]);

  console.log(details);

  return (
    <div>
      <Head>
        <title>{country}</title>
      </Head>

      <Link href={"/"}>
        <HomeButton>
          Back
        </HomeButton>
      </Link>
      <Details details={details} />

    </div>
  );
}

export default CountryPage;
