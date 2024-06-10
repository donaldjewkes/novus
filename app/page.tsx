import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-white">
      
      <div className="h-screen relative">
        <Image className="absolute opacity-50"
                style={{
                  marginTop: '64px',
                }}
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
                  <div
                    className="text-2xl sm:text-2xl font-medium text-zinc-900"
                    style={{
                      maxWidth: '800px',
                      fontSize: '32px',
                      lineHeight: 1.4
                    }}
                  >
                    We&apos;re a group of founders and creatives that meet every week to work on projects with impact and scale.
                  </div>
                  <div  className="pt-6 w-full flex flex-col sm:flex-row items-center justify-between">
                    <a draggable="false" href="https://lu.ma/novus" target="_blank">
                      <button  type="button" className="group text-gray-900 transition duration-150 hover:bg-zinc-900 rounded px-3 py-2 flex flex-row items-center" style={{ background: '#2196F3' }}>
                        <div className="text-center text-2xl font-ibm text-white" style={{ fontSize: '20px' }}>Attend</div>
                            <Image className="group-hover:-translate-y-0.5 transition duration-150 group-hover:translate-x-0.5 ml-2 mt-0.5 fill-white" src="/arrow.svg" width={25} height={25} alt="arrow"/>
                      </button>
                    </a>
                    <div className="p-1 pt-4 sm:p-0 rounded bg-white  flex flex-row space-x-4">
                      <a draggable="false" href="https://x.com/NovusOrg">
                          <div className="text-center text-zinc-500 text-sm font-ibm underline text-white">twitter</div>
                      </a>
                      <a draggable="false" href="https://www.projectnovus.org/">
                          <div className="text-center text-zinc-500 text-sm font-ibm underline text-white">login</div>
                      </a>
                    </div>
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
