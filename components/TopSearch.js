
import Image from "next/image";

export default function TopSearch() {
  return(
      <div className="md:max-w-6xl mx-auto flex md:flex-row flex-col-reverse mb-8">
          <div className="w-1/2 mx-auto pr-6">
              <Image src={'/illustration.svg'} width={618} height={444}/>
          </div>

          <div className="md:w-1/2 w-full max-w-md justify-center flex flex-col">
            <h2 className="text-4xl md:text-left text-center font-bold font-mulish">Top searches</h2>
            <p className="leading-relaxed">See what&rsquo;s being searched right now</p>
            <div className="mt-8 flex flex-col border border-gray-300 shadow-md px-3 pb-3 border-t-0 w-3/4">
              <p className="leading-relaxed p-2 bg-[#a7eaa1] rounded-sm mt-2">Car rental</p>
              <p className="leading-relaxed p-2 bg-[#a5e89e] rounded-sm mt-2">Housing</p>
              <p className="leading-relaxed p-2 bg-[#E8FF8E] rounded-sm mt-2">Vegetables and greens</p>
              <p className="leading-relaxed p-2 bg-[#FCBED1] rounded-sm mt-2">Travel agent</p>
            </div>
          </div>
      </div>
  );
}