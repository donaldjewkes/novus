import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-white">
      
      <div className="h-screen relative">
        <Image className="absolute opacity-70"
                src="/vanbg2.svg"
                alt="Vercel Logo"
                layout="fill"
                objectFit="cover"
                priority
              />
          <div className="absolute h-full w-full">
            
            <div className="relative h-full w-full flex flex-col">
              <div className="p-4 sm:p-6 flex flex-row justify-between">
                <a href="/">
                  <div className="text-zinc-900 text-4xl italic">
                    NOVUS
                  </div>
                </a>
                <div className="flex flex-row items-center opacity-50 pr-4">
                <img draggable="false" className="h-4" src="/location.svg"></img>
                  <div className="pl-1 text-zinc-900 font-ibm ">
                    VANCOUVER, BC
                  </div>
                </div>
              </div>
              <div className="p-4 sm:p-12 w-full flex flex-col items-start sm:items-center ">
                <div className="flex flex-col justify-right">
                  <div className="text-3xl sm:text-7xl font-medium text-zinc-900">
                    Community for the ambitious.
                  </div>
                  <div  className="pt-6">
                    <a draggable="false" href="https://lu.ma/novus">
                      <button  type="button" className="group text-gray-900 bg-dgold transition duration-150 hover:bg-zinc-900 rounded px-4 py-2 flex flex-row items-center">
                        <div className="text-center text-2xl font-ibm text-white">Attend</div>
                            <Image className="group-hover:-translate-y-0.5 transition duration-150 group-hover:translate-x-0.5 ml-2 mt-0.5 fill-white" src="/arrow.svg" width={25} height={25} alt="arrow"/>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="hidden sm:flex flex-col grow justify-end">
                <img draggable="false" className="h-100 pt-24 bg-gradient-to-t from-white via-white to-transparent" src="/gang.svg"></img>
                </div>
            </div>
          </div>
        </div>
    </main>
  );
}
