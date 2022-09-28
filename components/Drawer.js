import Link from "next/link";

export default function Drawer({ isOpen, toggle }) {
    return (
        <ul className={isOpen ? 'grid grid-rows-3 bg-yellow-300 text-center items-center content-center transform transition duration-500 ease-in-out' : 'hidden'} onClick={toggle}>
            <li className="p-4"><Link href="/add-business"><a>Adicionar negócio</a></Link></li>
            <li className="p-4"><Link href="/sign-in"><a>Iniciar sessão</a></Link></li>
            <li className="p-4"><button className="px-4 py-1 bg-black rounded text-white"><Link href="/account"><a>Criar conta</a></Link></button></li>
        </ul>
    );
}