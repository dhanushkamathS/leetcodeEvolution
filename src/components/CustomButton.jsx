import { useState } from 'react'


function CustomButton({type,svg,onclick}) {
  return (
   <button onClick={onclick} type="button" className="text-gray-900 text-[30px] bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg  px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 mb-2">
    <img src={svg} style={{width:'45px',height:'45px'}}/>
    {type}
    </button>
  )
}

export default CustomButton