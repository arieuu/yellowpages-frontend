import SearchInput from "./SearchInput";
import Description from "./Description";
import Scroll from "./Scroll";

export default function Hero(){
    return (
        <div className="bg-white h-screen flex flex-col pt-[9rem] items-center">
            <Description />
            <SearchInput />
            <Scroll />
        </div>
    );
}