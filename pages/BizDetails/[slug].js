import Details from "../../components/Details";
import SearchInput from "../../components/SearchInput";
import { useRouter } from "next/router";
import SearchResult from "../../components/SearchResult";
import { useState } from "react";
import NavBar from "../../components/Navbar";
import Drawer from "../../components/Drawer";


export default function BizDetails() {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    const id = router.query.slug;

    const toggle = () => {
        setIsOpen(isOpen => !isOpen);
    };

    return (
        <div>
            <NavBar toggle={toggle}/>
            <Drawer isOpen={isOpen} toggle={toggle}/>
            <div className="flex flex-col mt-16 items-center">
                <Details id={id} />
            </div>
        </div>
    );
}