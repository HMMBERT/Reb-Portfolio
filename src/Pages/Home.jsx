
import React from 'react';
import Hero from '../components/Hero';
import { About } from '../components/About'; // <-- Corrected line
import Services from '../components/Services';
import Projects from '../components/Projects';
import Blogs from '../components/BlogsCTA';

// ... rest of the file
const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Blogs />
     
    </>
  );
};

export default Home;