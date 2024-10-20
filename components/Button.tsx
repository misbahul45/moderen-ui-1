import Image from 'next/image'
import React from 'react'

interface Props{
    type:'button' | 'submit' | 'reset'
    title:string,
    icon?:string,
    variant?:string
}

const Button = ({type, title, icon, variant}:Props) => {
  return (
    <button type={type} className={`flex items-center gap-2 border rounded-full px-4 py-2 ${variant} transition-all duration-100`}>
        {icon && <Image src={icon} alt="icon" width={20} height={20} />}
        <label className='font-semibold'>{title}</label>
    </button>
  )
}

export default Button
