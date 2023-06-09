import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import axios from 'axios';
import { useEffect, useState } from 'react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

export default function Details({ id }) {

    const [businessDetails, setBusinessDetails] = useState([]);

    const getBuzinessDetails = async () => {
    const url = "http://api.arielcarvalho.io:3000/api/v1/business/" + id;

    let { data } = await axios.get(url);
        return data;
    }

    useEffect(() => {
        async function fetchData() {
            let data = await getBuzinessDetails();
            console.log("business-details: ", data);
            setBusinessDetails(data);
        }
        fetchData();
    }, );

    const bizImage = '/logo-pa.png';

    return (
        <div className='flex flex-col mt-16 w-[60rem]'>
            <div className='flex flex-row'>
                <Image src={bizImage} alt="" width={80} height={80} objectFit="contain"/>
                <div className='pl-10'>
                    <strong className='text-xl'>{businessDetails.name}</strong>
                    <p className='text-sm'>{businessDetails.category}</p>
                </div>
            </div>

            <div className='border p-4 mt-8'>
                <strong>Sobre</strong>
                <p className=''>
                    {businessDetails.information}
                </p>
                <div className='flex flex-row justify-end'>
                    <button className='bg-[#FBED04] py-0.5 px-2 rounded text-sm mr-3'>Chamar</button>
                    <button className='border py-0.5 px-2 text-sm rounded mr-3'>Direções</button>
                    <button className='border py-0.5 px-2 text-sm rounded mr-3'>Sociais</button>
                </div>
            </div>
            <div className='grid grid-cols-3 gap-x-4 mt-4'>
                <div>
                    <div className='flex items-center gap-3'>
                        <strong>Endereço</strong>
                        <Image src={'/enderesso.png'} alt="" width={16} height={16}/>
                    </div>
                    <p className='block text-sm'>
                        {businessDetails.address}
                    </p>
                </div>
                <div>
                    <div className='flex items-center gap-3'>
                        <strong>Serviços</strong>
                        <Image src={'/servico-reparacao.png'} alt="" width={17} height={17}/>
                    </div>
                    {
                        businessDetails?.service?.map(service => {
                            return (
                                <span key={service.service_id}>{service.service}, </span>

                            )
                        })
                    }
                </div>
                <div>
                    <div className='flex items-center gap-x-3'>
                        <strong>Info</strong>
                        <Image src={'/info.png'} alt="" width={16} height={16}/>
                    </div>
                    <p className='block text-sm'>{businessDetails?.information}</p>
                </div>
                <div> 
                    <div className='flex items-center gap-3'>
                        <strong>Atividade</strong>
                        <Image src={'/bold-activity.png'} alt="" width={16} height={16}/>
                    </div>
                    <p className='text-sm'>{businessDetails.category}</p>
                </div>
                <div>
                    <div className='flex items-center gap-3'>
                        <strong>Métodos de pagamento</strong>
                        <Image src={'/cartao.png'} width={16} alt="" height={16}/>
                    </div>
                     {
                        businessDetails?.paymethod?.map(paymethod => {
                            return (
                                <span key={paymethod.paymethod_id} >{paymethod.paymethod}, </span>
                            )
                        })
                    }
                </div>
                
            </div>

            <div className='border p-4 mt-8'>
                <strong>Horário de funcionamento</strong>
                <p className='w-[30rem]'>Monday - Friday 8am to 5pm</p>
            </div>

            <div className='mx-auto mt-16'>
                <h3 className='font-bold text-2xl text-center'>Galeria <span className='text-gray-500'>de fotos</span></h3>
                <Swiper
                    cssMode={true}
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={true}
                    navigation={true}
                    mousewheel={true}
                    keyboard={true}
                    modules={[Pagination, Navigation, Mousewheel, Keyboard]}
                    className="swiper"
                >
                    <SwiperSlide>
                        <Image src={'/slide1.png'} width={320} alt="" height={187}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={'/slide2.png'} width={320} alt="" height={187}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={'/slide3.png'} width={320} alt="" height={187}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={'/slide1.png'} width={320} alt="" height={187}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={'/slide2.png'} width={320} alt="" height={187}/>
                    </SwiperSlide>
                </Swiper>
            </div>

            <div className='p-4 mt-8 text-center'>
                <h3 className='text-xl font-bold'>Partilhar informações</h3>
                <div className='mt-8 mb-6'>
                    <button className='bg-gray-900 py-0.5 px-2 rounded text-sm mr-3 text-white'>Email</button>
                    <button className='bg-gray-900 border py-0.5 px-2 text-sm rounded mr-3 text-white'>Facebook</button>
                    <button className='bg-gray-900 border py-0.5 px-2 text-sm rounded mr-3 text-white'>Instagram</button>
                    <button className='bg-gray-900 border py-0.5 px-2 text-sm rounded mr-3 text-white'>Linkedin</button>
                </div>
            </div>
        </div>
    );
}