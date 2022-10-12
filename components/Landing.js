import Image from "next/image";

export default function Landing() {
  return(
      <div className="mt-28">
        <Image src={'/landscape.svg'} width={2102} height={312} className='object-fill'/>
      </div>
  );
}