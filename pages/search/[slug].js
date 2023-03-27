import Hero from "../../components/Hero";
import SearchInput from "../../components/SearchInput";
import CardList from "../../components/CardList";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import { GetServerSideProps } from "next";
import Footer from "../../components/Footer";
import NavBar from "../../components/Navbar";
import Drawer from "../../components/Drawer";



const getBuziness = async (str) => {
    const url = "http://api.arielcarvalho.io:3000/api/v1/search?query=" + str;

    let { data } = await axios.get(url);
    //console.log(data);
    console.log(data);
    return data;
}

export default function Seacrh({data}) {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const [biz, setBiz] =  useState([]);

    const toggle = () => {
        setIsOpen(isOpen => !isOpen);
      };

    useEffect(() => {

        async function fetchData() {
            let data = await getBuziness(router.query.slug);
            //console.log(data);
            setBiz(data);
        }
        fetchData();
    }, []);

    return (
        <div>
            <NavBar toggle={toggle}/>
            <Drawer isOpen={isOpen} toggle={toggle}/>
            <div className="flex flex-col min-h-screen items-center mt-28">
                <SearchInput></SearchInput>
                <CardList business={biz}/>
            </div>
            <Footer />
        </div>
    );
}

// Solution to reload api call

export const getServerSideProps = async (ctx) => {

    const { slug } = ctx.params;
    const { data } = await getBuziness(slug);
    console.log(data);
  
    return {
      props: {
      }
    }
  }