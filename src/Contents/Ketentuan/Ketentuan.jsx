import React from 'react'
import "./ketentuan.css"

const Ketentuan = () => {
    return (
        <section className='ketentuan' id='KETENTUAN'>
                <div className="container">
                <h1 data-aos="fade-up" className="title">KETENTUAN</h1>
                <hr />
                <div className="content flex" data-aos="fade-up">
                    <span>1</span>
                    <p>Pembayaran Administrasi/Uang SPP bulanan dilunasi paling lambat tanggal 10 setiap bulannya.</p>
                </div>
                <hr />
                <div className="content flex" data-aos="fade-up">
                    <span>2</span>
                    <p>Pembayaran pendaftaran dan biaya bimbingan bulanan dilakukan ketika melakukan pengisian Form pendaftaran.</p>
                </div>
                <hr />
                <div className="content flex" data-aos="fade-up">
                    <span>3</span>
                    <p>Pendaftaran siswa baru yang dilakukan sebelum tanggal 15, maka biaya bimbingan bulanan akan dibebankan secara penuh.</p>
                </div>
                <hr />
                <div className="content flex" data-aos="fade-up">
                    <span>4</span>
                    <p>Pendaftaran yang dilakukan setelah tanggal 15, akan dibebankan sebesar 50% dari biaya administrasi/bimbingan bulanan.</p>
                </div>
                <hr />
                <div className="content flex" data-aos="fade-up">
                    <span>5</span>
                    <p>Penggantian hari belajar diberikan apabila :<br/>
Ketidakhadiran siswa kurang dari 6 kali pertemuan, dan ketidakhadiran dikarenakan kondisi;<br/>
a. Siswa berhalangan karena Sakit.<br/>
b. Kegiatan belajar diliburkan diluar ketentuan libur bersama
</p>
                </div>
                <hr />
                <div className="content flex" data-aos="fade-up">
                    <span>6</span>
                    <p>Penggantian hari gugur apabila, siswa izin lebih dari 6 kali pertemuan.</p>
                </div>
                <hr />
                <div className="content flex" data-aos="fade-up">
                    <span>7</span>
                    <p>Pengajuan pengganti hari dapat dilakukan maksimal 1 bulan / dibulan yang sama.</p>
                </div>
                <hr />
            </div>
        </section>
    )   
}

export default Ketentuan
