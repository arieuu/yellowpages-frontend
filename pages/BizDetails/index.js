import Details from "../../components/Details";
import SearchInput from "../../components/SearchInput";


export default function BizDetails() {
    return (
        <div className="flex flex-col mt-16 items-center">
            <SearchInput />
            <Details />
        </div>
    );
}