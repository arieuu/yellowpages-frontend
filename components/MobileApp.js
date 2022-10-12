import Image from "next/image";

export default function MobileApp() {
  return(
      <div className="max-w-6xl mx-auto my-16">
        <div className="flex flex-col items-center mb-16">
          <h3 className='font-bold text-2xl'>
              Leve as Páginas Amarelas consigo
          </h3>
          <p>Baixe o aplicativo das Páginas Amarelas para ter acesso a todos os benefícios do diretório onde quer que vá.</p>
        </div>

        <div className="flex justify-center space-x-8">
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
          <div className="w-4/12 relative">
            <Image src={'/app-mobile.svg'} width={768} height={789} layout='fill' className="absolute top-4"/>
          </div>
        </div>
      </div>
  );
}