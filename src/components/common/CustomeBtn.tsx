import React from 'react'
import type { TCustomeBtn } from '../../core/types/TCustomeBtn'

const CustomeBt:React.FC<TCustomeBtn> = ({text, type, icon, className, dataAos, onClick}) => {
  return (
    <button type={type} className={`p-2 ${className}`} onClick={onClick} data-aos={dataAos}>
        <span>{text}</span>
        {icon && icon}
    </button>
  )
}

export default CustomeBt