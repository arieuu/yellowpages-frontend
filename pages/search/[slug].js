import Hero from "../../components/Hero";
import SearchInput from "../../components/SearchInput";
import CardList from "../../components/CardList";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";


const getBuziness = async (str) => {
    let url = "https://dfea-197-255-136-79.eu.ngrok.io/api/v1/search?query=" + str;

    let { data } = await axios.get(url);
    //console.log(data);
    return data;
}

export default function Seacrh() {
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
            {/*<ul>
                {biz.length > 0 && biz.map((item, index) => {
                    <li key={index}>{item}</li>
                })}
            </ul>*/}
        </div>
    );
}