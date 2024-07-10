import React, {useEffect, useState} from 'react'
import "./program.css"
import { doodle } from "../../Assets"
// import { AiFillSchedule } from "react-icons/ai";
// import { FaCalendarAlt } from "react-icons/fa";
// import { IoTime } from "react-icons/io5";
// import { FaMoneyBills } from "react-icons/fa6";
// import { FaMoneyBillWave } from "react-icons/fa";
import image from "../../Assets/program.png"
import image2 from "../../Assets/program2.png"

const Program = () => {

    const [currentImage, setCurrentImage] = useState(image);

    useEffect(() => {
        const updateImage = () => {
            if (window.innerWidth <= 885) {
                setCurrentImage(image2);
            } else {
                setCurrentImage(image);
            }
        };

        updateImage(); // Run on initial load
        window.addEventListener('resize', updateImage); // Add event listener for window resize

        return () => window.removeEventListener('resize', updateImage); // Clean up on component unmount
    }, []);

    return (
        <section className="program" id='PROGRAM'>
            <img src={doodle} alt=""/>
            <div className="content" data-aos="fade-up" data-aos-delay="200">
                <img src={currentImage} alt="program" className='image'/>
            </div>
        </section>
    );
    // return (
    //     <section className='program' id='PROGRAM'>
    //         <img src={doodle} alt="" />
    //         {/* <div className="layer grid">
    //             <h1 className='title'>PROGRAM <span>STUDI</span></h1>
    //             <hr className='line'/>
    //             <div className="content">
    //                 <div className="kelas">
    //                     <h3><AiFillSchedule className='iconTitle'/> JADWAL</h3>
    //                     <div className="container flex">
    //                         <div className="textContent">
    //                             <h4>PROGRAM CALISTUNG</h4>
    //                             <h5><FaCalendarAlt className='icon'/> Hari Senin - Jumat</h5>
    //                             <ul>
    //                                 <li><IoTime className='icon'/> Kelas Lion : 07.30 - 09.00</li>
    //                                 <li><IoTime className='icon'/> Kelas Rabbit : 09.00 - 10.30</li>
    //                                 <li><IoTime className='icon'/> Kelas Dino : 10.30 - 12.00</li>
    //                             </ul>
    //                         </div>
    //                         <hr className='line2'/>
    //                         <div className="textContent">
    //                             <h4>PROGRAM ENGLISH</h4>
    //                             <h5><FaCalendarAlt className='icon'/> Hari Rabu - Sabtu</h5>
    //                             <ul>
    //                                 <li><IoTime className='icon'/> Kelas Siang : 14.30 - 15.30</li>
    //                                 <li><IoTime className='icon'/> Kelas  Sore: 16.00 - 17.00</li>
    //                                 <li><IoTime className='icon'/> Kelas Sabtu : 07.30 sd 11.30</li>
    //                             </ul>
    //                         </div>
    //                         <hr className='line2'/>
    //                         <div className="textContent">
    //                             <h4>PROGRAM JARIMATIKA</h4>
    //                             <h5><FaCalendarAlt className='icon'/> Hari Selasa - Sabtu</h5>
    //                             <ul>
    //                                 <li><IoTime className='icon'/> Kelas Siang : 14.30 - 15.30</li>
    //                                 <li><IoTime className='icon'/> Kelas  Sore: 16.00 - 17.00</li>
    //                                 <li><IoTime className='icon'/> Kelas Sabtu : 07.30 sd 11.30</li>
    //                             </ul>
    //                         </div>
    //                     </div>
    //                 </div>
    //                 <div className="spp">
    //                     <h3><FaMoneyBills className='iconTitle'/> SPP</h3>
    //                     <div className="container flex">
    //                         <div className="textContent">
    //                             <h4>PROGRAM CALISTUNG</h4>
    //                             <ul>
    //                                 <li><FaMoneyBillWave className='icon'/> 3x Pertemuan : Rp 220.000/Bulan</li>
    //                                 <li><FaMoneyBillWave className='icon'/> 4x Pertemuan : Rp 230.000/Bulan</li>
    //                                 <li><FaMoneyBillWave className='icon'/> 5x Pertemuan : Rp 240.000/Bulan</li>
    //                             </ul>
    //                         </div>
    //                         <hr className='line2'/>
    //                         <div className="textContent">
    //                             <h4>PROGRAM ENGLISH</h4>
    //                             <ul>
    //                                 <li><FaMoneyBillWave className='icon'/> 2x Pertemuan : Rp 160.000/Bulan</li>
    //                                 <li><FaMoneyBillWave className='icon'/> 3x Pertemuan : Rp 170.000/Bulan</li>
    //                                 <li className='none'>.</li>
    //                             </ul>
    //                         </div>
    //                         <hr className='line2'/>
    //                         <div className="textContent">
    //                             <h4>PROGRAM JARIMATIKA</h4>
    //                             <ul>
    //                                 <li><FaMoneyBillWave className='icon'/> 2x Pertemuan : Rp 160.000/Bulan</li>
    //                                 <li><FaMoneyBillWave className='icon'/> 3x Pertemuan : Rp 170.000/Bulan</li>
    //                                 <li className='none'>.</li>
    //                             </ul>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div> */}
    //     </section>
    // )
}

export default Program
