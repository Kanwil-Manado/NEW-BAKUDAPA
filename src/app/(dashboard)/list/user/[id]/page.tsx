import Image from "next/image"

const SingelUserPage = () => {
  return (
    <div className="flex-1 p-4 flex flex-col gap-4 xl:flex-row">
      {/* LEFT  */}
      <div className="w-full xl:w-2/3">
      {/* TOP */}
      <div className="flex flex-col lg:flex-row gap-4">
        {/* USER INFO CARD */}
        <div className="bg-lamaSky py-6 px-4 rounded-md flex-1 flex gap-4">
          <div className="w-1/3">
            <Image src="/more.png" alt="" width={144} height={144} className="w-3 h-36 rounded-full object-cover"/>
          </div>
          <div className="w-2/3 flex flex-col justify-between gap-4">
          <h1 className="text-xl font-semibold">Dhian</h1>
          <p className="text-sm text-gray-500">lorem ipsum sydunr hoe elo wichk eybcjh</p>
          <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
            <div className="w-full md:w-1/3 lg:h-full flex items-center gap-2">
              <Image src="/date.png" alt="" width={14} height={14}/>
            </div>
            <div className="w-full md:w-1/3 lg:h-full flex items-center gap-2">
              <Image src="/mail.png" alt="" width={14} height={14}/>
            </div>
            <div className="w-full md:w-1/3 lg:h-full flex items-center gap-2"> 
              <Image src="/phone.png" alt="" width={14} height={14}/> bhalo
            </div>
          </div>
          </div>
        </div>
        {/* SMALL CARD */}
        <div className="flex-1"></div>
      </div>

      {/* BOTTOM */}
      <div className=""></div>
      
      </div>
      {/* RIGHT  */}
      <div className="w-full xl:w-1/3">right</div>
    </div>
  )
}

export default SingelUserPage