//rafce
import React from 'react'
import Imagem from './Imagem'


const ListaImagem = ({photos}) => {
  return (
    photos.map((photo) => (
        <Imagem src={photo.src.small} alt={photo.alt} />
    ))
)
}

export default ListaImagem