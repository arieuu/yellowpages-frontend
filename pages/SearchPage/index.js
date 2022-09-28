import Hero from "../../components/Hero";
import SearchInput from "../../components/SearchInput";
import CardList from "../../components/CardList";

export default function SearchPage() {
    return (
        <div className="flex flex-col items-center mt-28">
            <SearchInput></SearchInput>
            <CardList />
        </div>
    );
}