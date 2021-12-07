import React from 'react';
import JanitorsStatus from '../JanitorsStatus/JanitorsStatus';
import Navbar from '../Navbar/Navbar';
import OderDetails from '../OderDetails/OderDetails';
import Tagline from '../Tagline/Tagline';

const Homepage = () => {
  return (
    <section className='bg-watermark'>
      <Navbar />
      <Tagline />
      <JanitorsStatus />
      <OderDetails />
    </section>
  );
};

export default Homepage;
