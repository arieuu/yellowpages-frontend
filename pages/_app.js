import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import "swiper/css/bundle";
import NavBar from '../components/Navbar';
import Drawer from '../components/Drawer';
import Footer from '../components/Footer';
import { useState } from 'react'

function MyApp({ Component, pageProps }) {

  return <Component {...pageProps} />
}

export default MyApp
