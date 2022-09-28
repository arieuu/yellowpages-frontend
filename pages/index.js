import NavBar from '../components/Navbar'
import Drawer from '../components/Drawer'
import Hero from '../components/Hero'
import { useState } from 'react'

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
    </>
    
  )
}
