import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


const getBuziness = async (id) => {
    let url = "https://dfea-197-255-136-79.eu.ngrok.io/api/v1/business/" + id

    let { data } = await axios.get(url);
    //console.log(data);
    return data;
}

export default function CardBusiness(props) {

    let bizId = props.businessItem;
    const [biz, setBiz] =  useState([]);

    useEffect(() => {
        async function fetchData() {
            let data = await getBuziness(bizId);
            //console.log(data.name);
            setBiz(data);
        }
        fetchData();
    }, []);

    const bizImage = '/logo-pa.png';

    return(
        <div className="flex flex-row w-[30rem] m-8 shadow-md border rounded-md p-3 border-gray-400">
            <Image src={bizImage} width={100} height={100} objectFit="contain"/>
            <div className='flex flex-col pl-4 pt-3'>
                <p className='font-bold'>{biz.name}</p>
                <span className='text-xs'>{biz.category}</span>
                <div className='flex flex-row mt-2'>
                    <button className='bg-[#FBED04] py-0.5 px-2 rounded text-sm mr-3'>Chamar</button>
                    <button className='border py-0.5 px-2 text-sm rounded mr-3'>Direções</button>
                    <button className='border py-0.5 px-2 text-sm rounded mr-3'>Sociais</button>
                </div>
            </div>
            <svg className="w-6 h-6 self-end ml-20 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
        </div>
    );
}