import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';


const getBuziness = async (id) => {
    const url = "http://159.89.14.20:3000/api/v1/business/" + id

    let { data } = await axios.get(url);
    //console.log(data);
    return data;
}

export default function CardBusiness(props) {

    let bizId = props.businessItem;
    //let bizIndex = props.businessIndex;

    const [biz, setBiz] =  useState({});
    const [isVisible, setIsVisible] = useState(false);
    //const [business, setBusiness] = useState([]);
    const ref = useRef(null);
    const [bizInfo, setBizInfo] = useState([]);

    const bizArray = [];

    useEffect(() => {
        async function fetchData() {
            try {
                let data = await getBuziness(bizId);
                setBiz(data);
            } catch(e) {
                console.error(e);
            }
        }
        fetchData();
    }, []);

    useEffect(() => {
        const handleBusiness = (event) => {
            
            if (ref.current && !ref.current.contains(event.target)) {
                setIsVisible(false);
                //setBiz("");
            }
           // bizArray.push(event.target);
        };

        document.addEventListener('mouseenter', handleBusiness, false);
        return () => {
            document.removeEventListener('mouseenter', handleBusiness, false);
        }
    }, []);

    const bizImage = '/logo-pa.png';

    return(
            <div className='flex'>
                <div className="flex flex-row w-[30rem] m-8 shadow-md border rounded-md p-3 border-gray-400" onMouseEnter={(e) => { e.stopPropagation(); setIsVisible(!isVisible)}} id={biz?.id}>
                <Image src={bizImage} width={100} height={100} objectFit="contain"/>
                <div className='flex flex-col pl-4 pt-3'>
                    <p className='font-bold'>{biz?.name}</p>
                    <span className='text-xs'>{biz?.category}</span>
                    <div className='flex flex-row mt-2'>
                        <button className='bg-[#FBED04] py-0.5 px-2 rounded text-sm mr-3'>Chamar</button>
                        <button className='border py-0.5 px-2 text-sm rounded mr-3'>Direções</button>
                        <button className='border py-0.5 px-2 text-sm rounded mr-3'>Sociais</button>
                    </div>
                </div>
                <svg className="w-6 h-6 self-end ml-20 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </div>
                <div
                    ref={ref}
                    style={{ display: isVisible ? 'block' : 'none' }}
                >
                    <p>{biz.name}</p>
                    <p>{biz.information}</p>
                </div>
            </div>
    );
}