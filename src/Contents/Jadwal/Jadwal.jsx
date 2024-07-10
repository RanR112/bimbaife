import React from 'react'
import "./jadwal.css"

const Jadwal = () => {
    return (
    <section className='jadwal' id='JADWAL'>
        <div className='container'>
            <div className="title" data-aos="fade-up">
                <h1>JADWAL BIMBA</h1>
            </div>
            <div className="content">
                <div className="textContent" data-aos="flip-up">
                    <div className="day">SENIN</div>
                    <div className="activities">
                        <ul>
                            <li>CALISTUNG</li>
                            <li>SENAM OTAK</li>
                        </ul>
                    </div>
                </div>
                <div className="textContent" data-aos="flip-up">
                    <div className="day">SELASA</div>
                    <div className="activities">
                        <ul>
                            <li>CALISTUNG</li>
                            <li>MONTESSORI</li>
                        </ul>
                    </div>
                </div>
                <div className="textContent" data-aos="flip-up">
                    <div className="day">RABU</div>
                    <div className="activities">
                        <ul>
                            <li>CALISTUNG</li>
                            <li>KREATIVITAS</li>
                        </ul>
                    </div>
                </div>
                <div className="textContent" data-aos="flip-up">
                    <div className="day">KAMIS</div>
                    <div className="activities">
                        <ul>
                            <li>CALISTUNG</li>
                            <li>BAHASA INGGRIS</li>
                        </ul>
                    </div>
                </div>
                <div className="textContent" data-aos="flip-up">
                    <div className="day">JUM'AT</div>
                    <div className="activities">
                        <ul>
                            <li>CALISTUNG</li>
                            <li>AGAMA / BAHASA ARAB</li>
                        </ul>
                    </div>
                </div>
                <div className="textContent"data-aos="flip-up">
                    <div className="day">SABTU</div>
                    <div className="activities">
                        <ul>
                            <li>LIBUR</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Jadwal
