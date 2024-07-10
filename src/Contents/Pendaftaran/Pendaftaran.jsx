import React, { useState } from 'react';
import "./pendaftaran.css";
import { IoChevronDownSharp } from "react-icons/io5";

const Pendaftaran = () => {
    const [activeDropdown, setActiveDropdown] = useState(null);

    const toggleDropdown = (index) => {
        setActiveDropdown(activeDropdown === index ? null : index);
    };

    const dropdownData = [
        {
            id: 1,
            title: 'Mengisi Formulir Pendaftaran yang Disediakan di Bimba IFE',
            content: 'Langkah pertama dalam proses pendaftaran adalah mengisi formulir pendaftaran yang dapat ditemukan di pusat Bimba IFE. Formulir ini mencakup informasi penting mengenai siswa, seperti nama, tanggal lahir, dan informasi orang tua atau wali.'
        },
        {
            id: 2,
            title: 'Melakukan Pembayaran Biaya Pendaftaran',
            content: 'Setelah formulir pendaftaran diisi dengan lengkap, orang tua atau wali siswa diharapkan untuk melakukan pembayaran biaya pendaftaran.'
        },
        {
            id: 3,
            title: 'Menerima Paket Pendaftaran yang Berisi Kaos dan Buku Pelajaran',
            content: 'Setelah pembayaran diterima dan dikonfirmasi, siswa akan menerima paket pendaftaran yang berisi kaos seragam Bimba IFE dan buku pelajaran yang akan digunakan selama program berlangsung. Paket ini dapat diambil langsung di pusat Bimba IFE.'
        },
        {
            id: 4,
            title: 'Siswa Mulai Masuk dan Mengikuti Kelas di Bimba IFE',
            content: 'Langkah terakhir adalah siswa mulai masuk dan mengikuti kelas sesuai jadwal yang telah ditentukan. Siswa akan bergabung dengan teman-teman sebayanya dan mulai belajar dalam lingkungan yang aman dan mendukung di Bimba IFE.'
        }
    ];

    return (
        <section className='pendaftaran' id='PENDAFTARAN'>
            <h1 className="title" data-aos="fade-up">PENDAFTARAN</h1>
            <h4 data-aos="fade-up">Tata Cara Pendaftaran di Bimba IFE: Panduan Lengkap untuk Orang Tua dan Siswa Baru</h4>
            {dropdownData.map((item, index) => (
                <div data-aos="fade-up" key={item.id}>
                    <button className={`dropdown-btn ${activeDropdown === index ? 'active' : ''}`}
                    onClick={() => toggleDropdown(index)}>
                        {index + 1}. {item.title} <IoChevronDownSharp className='icon' />
                    </button>
                    <div  className={`dropdown-container ${activeDropdown === index ? 'active' : ''}`} style={{ display: activeDropdown === index ? 'block' : 'none' }}>
                        <p className={`${activeDropdown === index ? 'active' : ''}`}>{item.content}</p>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Pendaftaran;
