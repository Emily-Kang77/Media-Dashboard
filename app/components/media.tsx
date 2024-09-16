import React from 'react'
import Image from 'next/image';
import { opinionsImage } from "../../ourOpinionsAreCorrect-16x9-white.png";

const media = ({image, title}) => {
  return (
    <div className="card card-compact bg-base-100">
      <figure><img src={image} alt={title} /></figure>
      {title}
    </div>
  )
}

export default media