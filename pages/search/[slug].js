import Hero from "../../components/Hero";
import SearchInput from "../../components/SearchInput";
import CardList from "../../components/CardList";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import { GetServerSideProps } from "next";


const getBuziness = async (str) => {
    const url = "https://dc5c-197-255-136-79.eu.ngrok.io/api/v1/search?query=" + str;

    let { data } = await axios.get(url);
    //console.log(data);
    return data;
}

export default function Seacrh({data}) {
    const router = useRouter();
    const [biz, setBiz] =  useState([]);

    useEffect(() => {

        async function fetchData() {
            let data = await getBuziness(router.query.slug);
            //console.log(data);
            setBiz(data);
        }
        fetchData();
    }, []);

    return (
        <div className="flex flex-col items-center mt-28">
            <SearchInput></SearchInput>
            <CardList business={biz}/>
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