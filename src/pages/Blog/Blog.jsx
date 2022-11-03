import React from 'react'
import dataBlog from '../../data/dataBlog'
import CardBlog from '../../components/Card Blog/CardBlog.jsx'
import './Blog.css'

const Blog = () => {
  return (
    <>
      <section className="blog">
        <article className="container">
           <h1><span>-</span> Blog <span>-</span></h1>
          <div className="container-card">
            {
              dataBlog.map((item) => {
                  return (
                    <div key={item.id}>
                      <CardBlog img={item.img} title={item.title} descript={item.descript}/>
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

export default Blog