import React from 'react'

const Header = () => {
  return (
    <>
     <header className="bg-gray-200 p-[8px] flex justify-between">
<div className="flex justify-between">
<a href="#" className="text-gray-250 text-[12px] px-5">SIGN IN</a>
<a href="#" className="text-gray-250 text-[12px] px-2">TRACKING INFO</a>
<a href="#" className="text-gray-250 text-[12px] px-2">GIFTING</a>
</div>

<div>
 <p className="text-[16px] font-bold">Perfect Gift, Every time.<span className="text-orange-300 text-[10px]">Click here to shop E-Gift Cards!</span></p> 
  </div>
  <div className="text-gray-250 text-[14px] mr-[8px]">Welcome to J.</div>
 </header>
    
    
    
    </>
  )
}

export default Header