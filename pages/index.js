import NavBar from '../components/Navbar'
import Drawer from '../components/Drawer'
import { useState } from 'react'
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import GrowWithUs from '../components/GrowWithUs';
import YpMedia from '../components/YpMedia';
import PopularService from '../components/PopularService';
import TopSearch from '../components/TopSearch';
import MobileApp from '../components/MobileApp';
import Landing from '../components/Landing';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(isOpen => !isOpen);
  };

  return (
    <>
      <NavBar toggle={toggle}/>
      <Drawer isOpen={isOpen} toggle={toggle}/>
      <Hero />
      <GrowWithUs />
      <YpMedia />
      <PopularService />
      <TopSearch />
      <MobileApp />
      <Landing />
      <Footer />
    </>
    
  )
}
