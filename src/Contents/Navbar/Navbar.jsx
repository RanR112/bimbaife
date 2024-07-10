import React, {useState} from 'react'
import './navbar.css'
import { AiFillCloseCircle } from "react-icons/ai"
import { MdMenu } from "react-icons/md";
import utama from "../../Assets/logoutama.png"

const Navbar = () => {
    const [active, setActive] = useState('navBar')
    const [scroll, setScroll] = useState(false)
    // Fungsi untuk mengaktifkan navbar
    const showNav = () => {
        setActive('navBar activeNavbar')
    }

    // Fungsi untuk menutup navbar
    const removeNavbar = () => {
        setActive('navBar')
    }

    const changeColor = () => {
        if (window.scrollY >= 90) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    }

    window.addEventListener('scroll', changeColor)


    return (
        
    <section className="navBarSection">
        <header className={scroll ? "header-scroll flex" : "header flex"}>

            <div className="logoDiv">
                <a href='#HOME' className="logo flex">
                    <img src={utama} alt="logo" className='icon'/>
                    <span className='grid'>
                        <h1>BIMBA <span>IFE</span></h1>
                        <h4>Cara Asik Belajar Calistung</h4>
                    </span>
                </a>
            </div>

            <div className={active}>
                <ul className="navLists flex">

                    <li className="navItem">
                        <a href="#TENTANG" className="navLink">TENTANG</a>
                    </li>

                    <li className="navItem">
                        <a href="#PROGRAM" className="navLink">PROGRAM</a>
                    </li>

                    <li className="navItem">
                        <a href="#JADWAL" className="navLink">JADWAL</a>
                    </li>

                    <li className="navItem">
                        <a href="#PENDAFTARAN" className="navLink">PENDAFTARAN</a>
                    </li>

                    <li className="navItem">
                        <a href="#KETENTUAN" className="navLink">KETENTUAN</a>
                    </li>

                    <li className="navItem">
                        <a href="#FOOTER" className="navLink">UNIT</a>
                    </li>
                </ul>

                <div onClick={removeNavbar} className="closeNavbar">
                <AiFillCloseCircle className='icon'/>
                </div>
            </div>

            <div onClick={showNav} className="toggleNavbar">
            <MdMenu className="icon"/>
            </div>

        </header>
    </section>
    )
}

export default Navbar
