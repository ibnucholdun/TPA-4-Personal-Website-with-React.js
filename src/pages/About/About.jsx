import React from 'react'
import Profil from '../../assets/images/gambar1.png'
import './About.css'

const About = () => {
  return (
    <>
      <section className="about">
        <article className="container">
          <div className="about-img">
            <img src={Profil} alt="profil"/>
          </div>
          <div className="about-text">
            <h1><span>-</span> About <span>-</span></h1>
            <p>Hallo, Saya Ibnu Choldun sekarang sedang menempuh pendidikan S1 Teknik Elektro di Universitas Singaperbangsa Karawang semester 7. Saat ini, saya sedang mengikuti kegiatan Studi Independen Kampus Merdeka batch 3 di Skilvul. Saya senang mencari ilmu baru terutama di bidang Teknologi Informasi. Saya memiliki pengalaman sebagai Web Developer selama 6 bulan ketika di Studi Independen Batch 2 di Dicoding Indonesia, saat itu saya mengerjakan Capstone Project dan mendapatkan penghargaan menjadi salah satu Capstone Project Terbaik di tema kesehatan.</p>
          </div>
        </article>
      </section>
    </>
  )
}

export default About