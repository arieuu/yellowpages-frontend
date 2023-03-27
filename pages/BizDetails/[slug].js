import Details from "../../components/Details";
import SearchInput from "../../components/SearchInput";
import { useRouter } from "next/router";
import SearchResult from "../../components/SearchResult";


export default function BizDetails() {
    const router = useRouter();
    const id = router.query.slug;

    return (
        <div className="flex flex-col mt-16 items-center">
            <SearchResult />
            <Details id={id} />
        </div>
    );
}