/* eslint-disable array-callback-return */
import React from 'react'
import { Link } from 'react-router-dom'
import CardPortfolio from '../../../components/Card Portfolio/CardPortfolio'
import dataPortfolio from '../../../data/dataPortfolio'
import './PortfolioSection.css'

const PortfolioSection = () => {
  return (
    <>
        <section className="portfolio-section">
            <article className="container">
                <h1><span>-</span> Portfolio <span>-</span></h1>
                <div className="container-card">
                    {
                        dataPortfolio.map((item, index) => {
                            if(index < 6){
                                return (
                                    <div key={item.id}>
                                        <CardPortfolio img={item.img} link={item.link} name={item.name}/>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
                <div className="container-button">
                    <Link to="/portfolio" className="button">Lihat Semua</Link>
                </div>
            </article>
        </section>
    </>
  )
}

export default PortfolioSection