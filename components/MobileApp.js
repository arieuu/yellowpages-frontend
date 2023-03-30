import Image from "next/image";

export default function MobileApp() {
  return(
        <div className="my-32">
          <div className="flex flex-col items-center mb-28">
            <h3 className='font-bold pb-8 text-4xl font-mulish'>
                Leve as Páginas Amarelas consigo
            </h3>
            <p>Baixe o aplicativo das Páginas Amarelas para ter acesso a todos os benefícios do diretório onde quer que vá.</p>
          </div>
        
         <div className="flex">
          <div className="ml-52 w-5/12 pt-36">
              
              <div className="max-w-3xl">
                <div className="">
                  <h4 className="font-bold text-3xl mb-4 font-mulish">Nunca foi tão fácil usar nossos serviços</h4>
                  <p className="leading-relaxed mb-8 pr-6 max-w-md">With the YP app, you can find millions of local businesses on the
                  go and quickly connect with them from anywhere. It&rsquo;s free!</p>
                </div>
              </div>

              <div className="max-w-md">
                <h4 className="font-bold text-3xl mb-4 font-mulish">Baixe nosso aplicativo agora</h4>
                <div className="flex space-x-8 mt-8">
                  <button className="flex items-center gap-x-3 px-6 py-3 bg-[#FBED04] hover:bg-[#1d1d1a] hover:text-white hover:shadow-lg transition duration-300 ease-in-out max-w-fit rounded-md">
                    <svg width="26" height="11" className="hover:text-white" viewBox="0 0 34 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24.837 14.1984C24.46 14.1982 24.0984 14.0494 23.832 13.7849C23.5655 13.5203 23.4159 13.1615 23.4161 12.7875C23.4163 12.4135 23.5662 12.0549 23.833 11.7906C24.0997 11.5263 24.4614 11.3779 24.8384 11.3781C25.2155 11.3781 25.5771 11.5267 25.8437 11.7911C26.1103 12.0556 26.26 12.4142 26.26 12.7882C26.26 13.1622 26.1103 13.5209 25.8437 13.7854C25.5771 14.0498 25.2155 14.1984 24.8384 14.1984H24.837ZM9.19133 14.1984C9.00464 14.1983 8.8198 14.1617 8.64736 14.0908C8.47491 14.0198 8.31824 13.9159 8.1863 13.7849C7.91983 13.5203 7.77023 13.1615 7.77042 12.7875C7.7706 12.4135 7.92056 12.0549 8.1873 11.7906C8.45404 11.5263 8.81571 11.3779 9.19275 11.3781C9.56979 11.3781 9.93138 11.5267 10.198 11.7911C10.4646 12.0556 10.6144 12.4142 10.6144 12.7882C10.6144 13.1622 10.4646 13.5209 10.198 13.7854C9.93138 14.0498 9.56979 14.1984 9.19275 14.1984H9.19133ZM25.3413 5.74177L28.1832 0.881123C28.2596 0.746769 28.2791 0.58779 28.2374 0.439159C28.1957 0.290529 28.0962 0.164422 27.9607 0.0885797C27.8253 0.0127379 27.665 -0.00662567 27.5152 0.0347485C27.3653 0.0761226 27.2382 0.174845 27.1617 0.309199L24.2902 5.22746C22.0096 4.19347 19.5301 3.66228 17.0227 3.67048C14.4018 3.67048 11.9297 4.22976 9.73958 5.21341L6.868 0.295146C6.83014 0.228714 6.77946 0.170328 6.71885 0.123323C6.65825 0.076318 6.5889 0.0416143 6.51477 0.0211931C6.44064 0.000771999 6.36319 -0.00496677 6.28682 0.00430495C6.21046 0.0135767 6.13668 0.0376771 6.06971 0.0752301C6.00273 0.112783 5.94387 0.163053 5.89648 0.223171C5.8491 0.283288 5.81411 0.352075 5.79352 0.425604C5.77293 0.499133 5.76715 0.575965 5.7765 0.651712C5.78584 0.727458 5.81014 0.800637 5.848 0.86707L8.67425 5.72631C3.81933 8.35407 0.48875 13.2302 0 19H34C33.5268 13.2442 30.2104 8.36953 25.3413 5.74177Z" fill="black"/>
                    </svg>
                    {/*<Image src={'/android.svg'} width={20} height={20} className='hover:text-white' />*/}
                    Android
                  </button>
                  <button className="flex items-center gap-x-3 px-6 py-3 bg-[#FBED04] hover:bg-[#1d1d1a] hover:text-white hover:shadow-lg transition duration-300 ease-in-out max-w-fit rounded-md">
                    <Image src={'/iphone.svg'} width={20} height={20} className='hover:text-white'/>
                    IPhone
                  </button>
                </div>
              </div>
              
          </div>
          <Image src={'/app-mobile.svg'} width={750} height={773} className=""/>
          </div>
         </div>
   
    /* 
      <div className="max-w-6xl mx-auto my-32">
        <div className="flex flex-col items-center mb-16">
          <h3 className='font-bold text-2xl'>
              Leve as Páginas Amarelas consigo
          </h3>
          <p>Baixe o aplicativo das Páginas Amarelas para ter acesso a todos os benefícios do diretório onde quer que vá.</p>
        </div>

        <div className="flex justify-center space-x-4">
          <div className="flex w-8/12 max-w-md flex-col max-x-sm pb-4">
            <div className="">
              <h4 className="font-bold text-xl mb-4">Nunca foi tão fácil usar nossos serviços</h4>
              <p className="leading-relaxed max-w-sm mb-8">With the YP app, you can find millions of local businesses on the
               go and quickly connect with them from anywhere. It's free!</p>
            </div>

            <div>
              <h4 className="font-bold text-xl mb-4">Baixe nosso aplicativo agora</h4>
              <div className="flex space-x-8 mt-4">
                <button className="flex items-center gap-x-3 px-6 py-3 bg-[#FBED04] max-w-fit rounded-md">
                  <Image src={'/android.svg'} width={20} height={20} />
                  Android
                </button>
                <button className="flex items-center gap-x-3 px-6 py-3 bg-[#FBED04] max-w-fit rounded-md">
                  <Image src={'/iphone.svg'} width={20} height={20} />
                  IPhone
                </button>
              </div>
            </div>
          </div>
          
          <Image src={'/app-mobile.svg'} width={780} height={793} className="absolute top-3"/>
          
        </div>

        
      </div>*/
  );
}