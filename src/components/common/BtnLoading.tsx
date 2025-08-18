import React, { type ComponentPropsWithoutRef } from 'react'
import SpinnerLoading from './SpinnerLoading'

const BtnLoading: React.FC<ComponentPropsWithoutRef<"button">> = ({className}) => {
  return (
    <button className={`flex items-center gap-2 ${className}`}>
        <SpinnerLoading width={19} height={19} />
        <span> درحال بارگزاری اطلاعات </span>
    </button>
  )
}

export default BtnLoading
