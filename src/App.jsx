import React from 'react'
import { Navbar, Hero, Memory, Footer, Explore, Advertise, Pricing, Banner, Newsletter } from './components';
import {hero, navlinks, memory, placesAPI, brands, pricingapi, bannerAPI, footerAPI} from './data/travigodata';

const App = () => {
  return (
    <>
      <Navbar navlinks={navlinks} />
        <Hero hero={hero} />
      <Memory memory={memory} />
      <Explore title='Explore The Beauty of The World' placesAPI={placesAPI} />
      <Advertise brands={brands} />
      <Pricing pricingapi={pricingapi} />
      <Banner bannerAPI = {bannerAPI} />
      <Newsletter />
      <Footer footerAPI={footerAPI} />

    </>
  );
};

export default App