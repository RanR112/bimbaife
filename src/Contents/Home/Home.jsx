import React from 'react'
import './home.css'
import { utama, top, bot } from '../../Assets'

const Home = () => {
    return (
        <section className='home' id='HOME'>
            <div className="top">
                <img src={top} alt="topimg" className='topimg' />
            </div>
            <div className="mid flex">
                <img src={utama} alt="logo" className='logo' data-aos="fade-up"/>
                <div className="textContent grid">
                    <h1 data-aos="fade-up">Ayo, Mulai Petualangan Belajarmu Bersama  <span>BIMBA  IFE  !</span></h1>
                    <h4 data-aos="fade-up">Gabung dengan pengajar keren dan teman baru untuk petualangan belajar yang menyenangkan dan penuh prestasi!</h4>
                    <div className='btn' data-aos="fade-up">
                        <a href="#PENDAFTARAN" className='btnDaftar'>
                            <p>Daftar</p>
                        </a>
                    </div>
                </div>
            </div>
            <div className="bot">
                <img src={bot} alt="botimg" className='botimg' />
            </div>
        </section>
    )
}

export default Home
