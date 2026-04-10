import React from 'react'

const MenColle = () => {
  return (
    <>
        <div className="w-[100%] h-[100%]">
  <h1 className="text-black font-serif  text-[45px] px-8 mt-6" >Shop By Men Category</h1>
 <div className=" w-full p-6 flex gap-0">

    <div className="p-4 text-center w-[30%] hover:text-gray-300">
    <img src="/kameezs.png" alt="suit" className="w-full h-[340px] object-cover " />
    <h2 className="font-bold mt-2">KAMEEZ SHALWAR</h2>
  </div> 
  <div className="p-4 text-center w-[30%] hover:text-gray-300">
    <img src="/kurtaR.png" alt="kameez" className="w-full h-[340px] object-cover " />
    <h2 className="font-bold mt-2">KURTA</h2>
  </div>
<div className="p-4 text-center  w-[27%] hover:text-gray-300">
    <img src="/coat.png" alt="wascoat" className="w-full h-[340px] object-cover " />
    <h2 className="font-bold mt-2">WAISTCOAT</h2>
  </div>
   <div className=" p-4 text-center w-[28%] hover:text-gray-300">
    <img src="/Sherwani.png" alt="Grooms" className="w-full h-[340px] object-cover " />
    <h2 className="font-bold mt-2">GROOMS SHERWANI</h2>
  </div>
 
</div>
</div>
    
    </>
  )
}

export default MenColle