import Image from "next/image";
import Link from "next/link";

export default function NavBar({ toggle }){

    const logo = '/logo-pa.png';

    return (
        <nav className="flex justify-between items-center h-16 bg-[#FBED04] text-gray-800 relative shadow-sm font-sans">
            
            <Link href="/">
            <div className="pl-16 cursor-pointer">
                {/*<strong className="pr-4 border-r-2 border-black">Yellow Pages</strong>
                <a href="#" className="pl-4"><span>Categorias</span></a>*/}
                <Image src={logo} width={40} height={40} className="pl-4"/>
            </div>
            </Link>
            <div className="px-4 visible cursor-pointer md:hidden" onClick={toggle}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" 
                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" 
                        strokeWidth="2" d="M4 6h16M4 12h16M4 18h16">
                    </path>
                </svg>
            </div>
            <div className="pr-16 md:block hidden">
                <ul className="flex items-center">
                    <li className="pr-4"><a href="#">Adicionar negócio</a></li>
                    <li className="pr-4"><a href="#">Iniciar sessão</a></li>
                    <li><button className="px-4 py-1 bg-black rounded text-white"><a href="#">Criar conta</a></button></li>
                </ul>
            </div>
        </nav>
    );
}