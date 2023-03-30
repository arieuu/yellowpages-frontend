import { parse } from "postcss";
import { useEffect, useState } from "react";
import {useRouter} from 'next/router'
import axios from "axios";
import Link from "next/link";



let inputValueGlobal;

const getServices = async (str) => {
    try {
        let searchableCountry = str.replace(/,/g,"");
        const url = "http://api.arielcarvalho.io:3000/api/v1/suggest?query=" + searchableCountry;

        const { data } = await axios.get(url);
        //console.log(data);
        return data;
    } catch (e) {
        console.error(e);
    }
};



export default function SearchInput() {

    const router = useRouter()

    const [options, setOptions] = useState([]);
    const [inputText, setInputText] = useState('');

    const onChangeData = async (e) => {
        e.preventDefault();
        if (e.target.value.length === 0) {
            return;
        }
        
        let inputValue = e.target.value;
        let valueArray = inputValue.split(" ");
        let newValue = valueArray[(valueArray.length)-1];

        let data = await getServices(newValue);
        setOptions(data);

    
        
    };



    const [route, setRoute] = useState()
    const handleEnter = (e) => {
        e.preventDefault()
        router.push("/search/" + route)
        window.location.href = '/search/' + route;
        console.log("called")

    }

        useEffect(() => {
             setInputText(inputText);
        }, [inputText]);





        useEffect(() => {
             setInputText(inputText);
        }, [inputText]);

    const handleSubmit = async (e) => {
       e.preventDefault();

       console.log(e.target.search.value);

       if (e.target.search.value.length === 0) {
           return;
       }
    
       let data = await getServices(e.target.search.value);
       setOptions(data);
       //console.log('term: ' + data);

       //if (router.pathname.search('search') == -1) 
        //router.push("search/" + e.target.search.value);

       
    };

    return (
        <div className="max-w-md">
            <form onSubmit={handleEnter}>
                <div className="flex items-center text-gray-400 focus-within:text-gray-600">
                    <svg className="w-6 h-6 absolute ml-[25rem] pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input type="text" 
                        name="search"
                        id="name"
                        className="border border-gray-800 placeholder-gray-500 text-center focus:outline-none rounded-[0.5rem] shadow-sr w-[30rem] pr-16 pl-4 h-12"
                        placeholder="Pesquise por milhões de empresas"
                        aria-label="search"
                        autoComplete="off"
                        onChange={(e)=>{setRoute(e.target.value)
                        onChangeData(e)}}/>
                    {/*<button type="submit" className="px-6 py-3 bg-slate-900 text-white rounded-sm">SEARCH</button>*/}
                </div>
            </form>
        {/*<form class="flex items-center justify-center md:max-w-lg">   
            <label for="voice-search" class="sr-only">Search</label>
            <div class="relative w-96">
                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                </div>
                <input 
                    type="text" 
                    id="voice-search" 
                    autoComplete="off"
                    aria-label="search"
                    onChange={(e) => onChangeData(e)}
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-slate-500 focus:border-slate-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500" placeholder="Search services and business..." required=""/>
                <button type="button" class="flex absolute inset-y-0 right-0 items-center pr-3">
                    <svg aria-hidden="true" class="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clip-rule="evenodd"></path></svg>
                </button>
            </div>
            <button type="submit" class="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-slate-900 rounded-sm border border-slate-700 hover:bg-slate-900 focus:ring-4 focus:outline-none dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800">
                <svg aria-hidden="true" class="mr-2 -ml-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>Search
            </button>
            </form>*/}
            {
                options?.length > 0 && (
                    <ul 
                        id="options_list"
                        className="bg-white border-[1px] rounded-b-md shadow-lg   absolute max-h-[200px] overflow-y-auto">
                        {
                            options.map((item, index) => (
                                <Link key={index} href={`${encodeURIComponent(item)}`}>
                                
                                <li  className="min-h-10 w-[448px] border-b-[1px] border-solid border-l-gray-300 py-2 p-10 cursor-pointer">
                                    
                                    
                                    <a onClick={handleEnter}> {item} </a>
                                    
                                   
                                    
                                </li>
                                
                                </Link>
                                
                            ))
                            
                        }
                    </ul>
                )
            }


        
        </div>
    );
}