import React from 'react'
import type { TCustomeBtn } from '../../core/types/TCustomeBtn'

const CustomeBt:React.FC<TCustomeBtn> = ({text, type, icon, className, onClick}) => {
  return (
    <button type={type} className={`p-2 ${className}`} onClick={onClick}>
        <span>{text}</span>
        {icon && icon}
    </button>
  )
}

export default CustomeBt