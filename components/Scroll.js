import Image from 'next/image';

export default function Scroll() {

    const arrow = '/seta.png';

    return(
        <div className="flex flex-col mt-[10rem] items-center">
            <p className="mb-2">Role para baixo para explorar</p>
            {/*<Image src={arrow} width={20} height={20} className='animate-bounce' />*/}
            {/*<svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>*/}
            <svg xmlns="http://www.w3.org/2000/svg" className='animate-bounce-fs' width="20" height="20" viewBox="0 0 24 24" fill="none">
                <rect width="24" height="24" fill="white"/>
                <path d="M12.0775 19.3977L4.35048 6.3385L20.0732 6.50122L12.0775 19.3977Z" fill="#FEF200"/>
                <path d="M21.886 5.536C21.8011 5.37444 21.6737 5.23914 21.5176 5.14468C21.3615 5.05022 21.1825 5.00019 21 5H3C2.81784 5.00075 2.63934 5.05115 2.48368 5.14576C2.32802 5.24038 2.2011 5.37564 2.11657 5.53699C2.03203 5.69835 1.99308 5.8797 2.00391 6.06153C2.01473 6.24337 2.07492 6.41881 2.178 6.569L11.178 19.569C11.2697 19.7022 11.3925 19.8112 11.5357 19.8864C11.6789 19.9617 11.8382 20.001 12 20.001C12.1618 20.001 12.3211 19.9617 12.4643 19.8864C12.6075 19.8112 12.7303 19.7022 12.822 19.569L21.822 6.569C21.9261 6.41912 21.9871 6.24357 21.9984 6.06144C22.0097 5.87932 21.9708 5.69758 21.886 5.536ZM12 17.243L4.908 7H19.092L12 17.243Z" fill="black"/>
            </svg>
        </div>
    );

}