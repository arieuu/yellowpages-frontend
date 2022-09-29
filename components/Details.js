import Image from 'next/image';


export default function Details() {

    const bizImage = '/logo-pa.png';

    return (
        <div className='flex flex-col mt-16 w-[60rem]'>
            <div className='flex flex-row'>
                <Image src={bizImage} width={80} height={80} objectFit="contain"/>
                <div className='pl-10'>
                    <strong className='text-xl'>Caixa Económica de Cabo Verde</strong>
                    <p className='text-sm'>Banco / Financeiro</p>
                </div>
            </div>

            <div className='border p-4 mt-8'>
                <strong>Sobre</strong>
                <p className=''>Caixa Económica Federal, also referred to as Caixa, is a state-owned Brasilian financial services company headquartered in Brasilia, Brazil. 
                    It is the fourth largest banking institution in Brazil, as well as the fourth largest in Latin America, and the eighty-third largest bank in the world.
                </p>
                <div className='flex flex-row justify-end'>
                    <button className='bg-[#fef000] py-0.5 px-2 rounded text-sm mr-3'>Chamar</button>
                    <button className='border py-0.5 px-2 text-sm rounded mr-3'>Direções</button>
                    <button className='border py-0.5 px-2 text-sm rounded mr-3'>Sociais</button>
                </div>
            </div>
            <div className='grid grid-cols-2 gap-4 mt-8'>
                <div>
                    <strong>Endereço</strong>
                    <p className='block'>Sanlam Tower, 18th Foor, Waiyaki Way,
                        Westlands, Nairobi P.O.Box: 14531 - 00800
                        Nairobi.
                    </p>
                </div>
                <div>
                    <strong>Serviços</strong>
                    <p>Banking</p>
                </div>
                <div>
                    <strong>Atividade</strong>
                    <p>Banking</p>
                </div>
                <div>
                    <strong>Métodos de pagamento</strong>
                    <p>Vint4, Visa, Mastercard</p>
                </div>
            </div>

            <div className='border p-4 mt-8'>
                <strong>Horário de funcionamento</strong>
                <p className='w-[30rem]'>Monday - Friday 8am to 5pm</p>
            </div>

            <div className='p-4 mt-8'>
                <strong>Partilhar informações</strong>
                <div className='mt-4 text-center'>
                    <button className='bg-gray-900 py-0.5 px-2 rounded text-sm mr-3 text-white'>Email</button>
                    <button className='bg-gray-900 border py-0.5 px-2 text-sm rounded mr-3 text-white'>Facebook</button>
                    <button className='bg-gray-900 border py-0.5 px-2 text-sm rounded mr-3 text-white'>Instagram</button>
                    <button className='bg-gray-900 border py-0.5 px-2 text-sm rounded mr-3 text-white'>Linkedin</button>
                </div>
            </div>
        </div>
    );
}