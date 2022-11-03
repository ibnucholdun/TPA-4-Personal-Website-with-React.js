import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './CardBlog.css'

const CardBlog = ({img, title, descript}) => {
  return (
    <>
        <div className="card-blog">
            <img src={img} alt="card-img" width={300} height={170} className="image"/>
            <h3 className="title">{title}</h3>
            <p className="descript">{descript}</p>
            <Link to="/" className="button">Baca Selengkapnya →</Link>
        </div>
    </>
  )
}

CardBlog.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  descript: PropTypes.string.isRequired
}

export default CardBlog