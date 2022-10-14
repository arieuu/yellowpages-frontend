import Image from "next/image";

export default function GrowWithUs() {
  return(
    <div className="bg-gray-100">
      <h2 className="text-4xl text-center font-bold text-[#7D7D7D] pt-8 font-mulish">Grow with us</h2>
      <div className="relative md:max-w-6xl gap-[10rem] px-8 py-6 mx-auto flex md:flex-row flex-col-reverse justify-center mb-32">
      
          <div className="md:w-1/2 w-full max-w-sm pr-6 flex flex-col">
            
            <div className="pt-8">
              <div className="flex gap-3 items-center pb-3">
                <h3 className="font-bold text-center text-2xl font-mulish">Get noticed</h3>
                <Image src={'/megaphone.svg'} width={24} height={24}/>
              </div>
              <p className="leading-relaxed">Improve your company's visibility, 
                get your products purchased and grow! 
                See how we can get more eyes on you here.</p>
            </div>
            <div className="pt-4">
              <div className="flex gap-3 items-center pb-3">
                <h3 className="font-bold text-2xl font-mulish">Get customers</h3>
                <Image src={'/more-people.svg'} width={24} height={24} />
              </div>
              <p className="leading-relaxed">Clients trust those who have been trusted by others. 
                How does an SME get the clout to form those oh so rewarding connections? 
                It begins here, with us and our growing network of clients.</p>
            </div>
            <div className="pt-4">
              <div className="flex gap-3 items-center pb-3">
                <h3 className="font-bold text-2xl font-mulish">Get results</h3>
                <Image src={'/check.svg'} width={20} height={20} />
              </div>
              <p className="leading-relaxed">We deliver tangible, measurable results that guide your growth path.</p>
            </div>
            <button className="px-9 py-3 bg-[#FBED04] max-w-fit rounded-md mt-8 hover:bg-[#1d1d1a] hover:text-white hover:shadow-lg transition duration-300 ease-in-out">Learn how</button>
          </div>
  
          <Image src={'/grow.png'} width={768} height={786} className="abosulte mr-16 object-contain top-0 right-0"/>
      </div>
     
     
      </div>
  );
}