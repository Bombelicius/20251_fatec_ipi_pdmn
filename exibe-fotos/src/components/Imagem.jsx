//rafce
import React from 'react'

const Imagem = ({src,alt}) => {
    // 2
    // const{ src, alt } = props
    // 1
    //  const src = props.src
    // const alt = props.alt
  return (
    <div>
        <img src={src} alt={alt} />
    </div>
  )
}

export default Imagem