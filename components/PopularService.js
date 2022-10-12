import Image from "next/image";

export default function PopularService() {
  return(
      <div className="max-w-6xl mx-auto flex flex-row my-16">
        <h3 className='font-bold text-2xl'>Popular Services <span className='text-gray-500'>near you</span></h3>
      </div>
  );
}