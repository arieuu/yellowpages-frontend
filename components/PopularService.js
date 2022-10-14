import Image from "next/image";

export default function PopularService() {
  return(
      <div className="max-w-6xl mx-auto my-36">
        <div className="flex flex-col items-center mb-16">
          <h3 className='font-bold pb-8 text-4xl font-mulish'>
            Popular Services <span className='text-[#7D7D7D] text-3xl'>near you</span>
          </h3>
          <p>This is a list with all the most popular services for your area. 
            They have been searched the most.</p>
        </div>

        <div className="flex justify-center space-x-8">
          <div className="flex flex-col pb-4 border shadow-md">
            <Image src={'/andres.svg'} width={301} height={143} className='object-cover'/>
            <div className="flex justify-between pt-2 px-2">
              <span className="text-sm">Hiking and travel</span>
              <Image src={'/arrow.svg'} width={20} height={20}/>
            </div>
          </div>
          <div className="flex flex-col pb-4 border shadow-md">
            <Image src={'/house.svg'} width={301} height={143} className='object-cover'/>
            <div className="flex justify-between pt-2 px-2">
              <span className="text-sm">Housing</span>
              <Image src={'/arrow.svg'} width={20} height={20}/>
            </div>
          </div>
          <div className="flex flex-col pb-4 border shadow-md">
            <Image src={'/vaso.svg'} width={301} height={143} className='object-cover'/>
            <div className="flex justify-between pt-2 px-2">
              <span className="text-sm">Nature feels</span>
              <Image src={'/arrow.svg'} width={20} height={20}/>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
        <button className="px-9 py-3 bg-[#FBED04] max-w-fit rounded-md mt-8 hover:bg-[#1d1d1a] hover:text-white hover:shadow-lg transition duration-300 ease-in-out">Serviços</button>
        </div>
      </div>
  );
}