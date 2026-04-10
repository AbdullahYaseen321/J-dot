import React from 'react'

const WomenColle = () => {
  return (
    <>
    <div className="w-[100%] h-[100%]">
  <h1 className="text-black font-serif  text-[45px] px-8 mt-[38%]" >Shop By Women Category</h1>
 <div className=" w-full p-6 flex gap-0">

    <div className="p-4 text-center w-[30%] hover:text-gray-300">
    <img src="/unsitich.png" alt="suit" className="w-full h-[340px] object-cover " />
    <h2 className="font-bold mt-2">UNSTITCHED</h2>
  </div> 
  <div className="p-4 text-center w-[30%] hover:text-gray-300">
    <img src="/stitched.png" alt="suit" className="w-full h-[340px] object-cover " />
    <h2 className="font-bold mt-2">STITCHED</h2>
  </div>
<div className="p-4 text-center w-[27%] hover:text-gray-300">
    <img src="/Brown.png" alt="suit" className="w-full h-[340px] object-cover " />
    <h2 className="font-bold mt-2">KURTA</h2>
  </div>
   <div className="p-4 text-center w-[28%] hover:text-gray-300">
    <img src="/Bag.png" alt="Bag" className="w-full h-[340px] object-cover " />
    <h2 className="font-bold mt-2">BAGS</h2>
  </div>
 
</div>
</div>
    
    
    
    </>
  )
}

export default WomenColle