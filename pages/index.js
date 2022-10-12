import NavBar from '../components/Navbar'
import Drawer from '../components/Drawer'
import { useState } from 'react'
import Hero from '../components/Hero';
import SearchPage from './SearchPage';
import Footer from '../components/Footer';
import BizDetails from './BizDetails';
import GrowWithUs from '../components/GrowWithUs';
import YpMedia from '../components/YpMedia';
import PopularService from '../components/PopularService';

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
      <Footer />
    </>
    
  )
}
