import SearchInput from "./SearchInput";
import Description from "./Description";
import Scroll from "./Scroll";

export default function Hero(){
    return (
        <div className="">
            <div className="h-screen flex flex-col py-40 items-center">
                <Description />
                <SearchInput />
                <Scroll/>
            </div>
        </div>
    );
}