import React from 'react'
import "./footer.css"
import utama from "../../Assets/logoutama.png"
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";

const Footer = () => {
    return (
            <section className='footer' id='FOOTER'>
                <div className="content flex">
                    <div className="logoDiv">
                    <div className="logo flex">
                        <img src={utama} alt="logo" className='icon'/>
                        <span className='grid'>
                            <h1>BIMBA <span>IFE</span></h1>
                            <h4>Cara Asik Belajar Calistung</h4>
                        </span>
                    </div>
                    </div>
                    <div className="hubungi grid">
                        <h3>HUBUNGI KAMI</h3>
                        <h5>UNIT PERUMAHAN TAMAN PALUMBON ASRI</h5>
                        <a href="https://wa.me/+621316334626"><FaWhatsapp className='icon'/> 0813-1633-4626 (Miss Dyah)</a>
                        <a href="https://wa.me/+625798000780"><FaWhatsapp className='icon'/> 0857-9800-0780 (Miss Shalma)</a>
                        <h5>UNIT PERUMAHAN BUMI CIPTA LARAS</h5>
                        <a href="https://wa.me/+621316334626"><FaWhatsapp className='icon'/> 0813-1633-4626 (Miss Dyah)</a>
                        <a href="https://wa.me/+628299718070"><FaWhatsapp className='icon'/> 0882-9971-8070 (Miss Nissa)</a>
                    </div>
                    <div className="unit grid">
                        <h3>UNIT BIMBA</h3>
                        <a href="https://maps.app.goo.gl/afNTFjayyny9VU2p9"><MdLocationPin className='icon'/> Perumahan Bumi Cipta Laras Blok A no 26 <br/> Jl. Selaras 1 Blok A no 26 Klari</a>
                        <a href="https://maps.app.goo.gl/zAWhkLa9ixbyGdSU8"><MdLocationPin className='icon'/> Perumahan Taman Palumbon Asri<br/>Blok A no 21</a>
                    </div>
                    <div className="medsos grid">
                        <h3>MEDIA SOSIAL</h3>
                        <a href="https://www.instagram.com/bimbaife_official/"><FaInstagram className='icon'/> bimbaife_official</a>
                    </div>
                    </div>
                <div className="footerDiv">
                    <small>&copy; Copyright 2024 - BIMBA IFE - All  Rights Reserved</small>
                </div>
            </section>
    )
}

export default Footer
