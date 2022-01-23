
import Head from 'next/head';

import Footer from '../footer';
import Navbar from '../navbar';

import { ContainerStyled } from './styles';

export default function Layout( { children } ) {
  return (
  <>
    <Head>
      <link rel="shortcut icon" href="/images/favicon.ico" />
      <title>PokeNext</title>
    </Head>

    <Navbar />

    <ContainerStyled>
      {children}
    </ContainerStyled>

    <Footer />
  </>
  );
}
