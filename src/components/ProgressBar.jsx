import { useState } from 'react'

function ProgressBar({name,value}) {
  return (   
    <div className="relative pt-1 w-[30%]">
        <div className="flex mb-2 items-center justify-between">
            <div>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200">
                    {name}
                </span>
            </div>
        </div>
        <div className="overflow-hidden h-4 mb-4 text-xs flex rounded bg-pink-200">
            <div style={{ width: `${value}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"></div>
        </div>
    </div>
  )
}

export default ProgressBar


