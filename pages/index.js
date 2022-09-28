import NavBar from '../components/Navbar'
import Drawer from '../components/Drawer'
import { useState } from 'react'
import SearchPage from './SearchPage';
import BizDetails from './BizDetails';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(isOpen => !isOpen);
  };

  return (
    <>
      <NavBar toggle={toggle}/>
      <Drawer isOpen={isOpen} toggle={toggle}/>
      <BizDetails />
    </>
    
  )
}
