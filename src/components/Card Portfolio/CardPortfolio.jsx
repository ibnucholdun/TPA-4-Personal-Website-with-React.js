import React from 'react'
import PropTypes from 'prop-types'
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

CardPortfolio.propTypes = {
  img: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default CardPortfolio