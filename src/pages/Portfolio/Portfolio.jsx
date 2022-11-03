import React from 'react'
import dataPortfolio from '../../data/dataPortfolio'
import CardPortfolio from '../../components/Card Portfolio/CardPortfolio.jsx'
import './Portfolio.css'

const Portfolio = () => {
  return (
    <>
      <section className="portfolio">
        <article className="container">
          <h1><span>-</span> Portfolio <span>-</span></h1>
          <div className="container-card">
            {
              dataPortfolio.map((item, index) => {
                  return (
                    <div key={item.id}>
                      <CardPortfolio img={item.img} link={item.link} name={item.name}/>
                    </div>
                  )
              })
            }
          </div>
        </article>
      </section>
    </>
  )
}

export default Portfolio