import React from 'react'
import Image from "../../assets/photos/arman.jpg"

const ImageFeadback = (imageAddress: string) => {
  return <img src={imageAddress ? imageAddress : Image} alt="" />
}

export default ImageFeadback
