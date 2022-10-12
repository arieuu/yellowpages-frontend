import SearchInput from "./SearchInput";
import Description from "./Description";
import Scroll from "./Scroll";

export default function Hero(){
    return (
        <div className="min-h-screen flex flex-col py-56 items-center">
            <div>
                <Description />
                <SearchInput />
            </div>
            <Scroll/>
        </div>
    );
}