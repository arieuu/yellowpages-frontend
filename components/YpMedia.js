import Image from "next/image";

export default function YpMedia() {
  return(
      <div className="md:max-w-6xl mx-auto flex md:flex-row flex-col-reverse mb-8 shadow-md border border-l-8 border-l-[#FBED04] border-t-gray-50 border-gray-100">
          <div className="w-1/2 mx-auto pr-6">
              <Image src={'/media.png'} width={618} height={444}/>
          </div>

          <div className="md:w-1/2 w-full max-w-md justify-center flex flex-col">
            <h2 className="text-3xl md:text-left text-center font-bold font-mulish">YP Media</h2>
            <div className="pt-8">
              <p className="leading-relaxed">YP media is a full-service digital agency providing SEO, 
                Websites, Email marketing, Social Media Management and Yellow Spot.</p>
            </div>
            <button className="px-9 py-3 bg-[#FBED04] max-w-fit rounded-md mt-8 hover:bg-[#1d1d1a] hover:text-white hover:shadow-lg transition duration-300 ease-in-out">Learn more</button>
          </div>
      </div>
  );
}