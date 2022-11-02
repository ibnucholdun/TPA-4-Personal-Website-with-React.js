import React from 'react'
import './CardPortfolio.css'

const CardPortfolio = ({img, link, name}) => {
  return (
    <>
        <div className="card">
            <img src={img} alt={name} width={300} height={170} />
            <div className="middle">
                <a href={link} target="_blank" rel="noopener noreferrer">Lihat Portfolio</a>
            </div>
            <p>{name}</p>
        </div>
    </>
  )
}

export default CardPortfolio