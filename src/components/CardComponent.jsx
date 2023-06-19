import { useState } from 'react'



function CardComponent({name,img}) {
  return (
    <div className="w-[250px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img className="rounded-t-lg" style={{width:'250px',height:'250px'}} src={img} alt="" />
        <div className="p-5">
            <h5 className="mb-2 text-lg text-center font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>      
        </div>
    </div>
  )
}

export default CardComponent







