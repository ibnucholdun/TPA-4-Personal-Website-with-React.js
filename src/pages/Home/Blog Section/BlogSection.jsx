/* eslint-disable array-callback-return */
import React from 'react'
import { Link } from 'react-router-dom'
import CardBlog from '../../../components/Card Blog/CardBlog'
import dataBlog from '../../../data/dataBlog'
import './BlogSection.css'

const BlogSection = () => {
  return (
    <>
        <section className="blog-section">
            <article className="container">
                <h1><span>-</span> Blog <span>-</span></h1>
                <div className="container-card">
                    {
                        dataBlog.map((item, index) => {
                            if (index <= 2) {
                                return(
                                    <div key={item.id}>
                                        <CardBlog img={item.img} title={item.title} descript={item.descript} id={item.id}/>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
                <div className="container-button">
                    <Link to="/blog" className="button">Lihat Semua</Link>
                </div>
            </article>
        </section>
    </>
  )
}

export default BlogSection