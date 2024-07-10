import React from 'react'
import "./tentang.css"
import { tentang1, tentang2, tentang3 } from '../../Assets'

const Tentang = () => {
    return (
        <section className="tentang" id='TENTANG'>
            <h1 className="title" data-aos="fade-up">TENTANG KAMI</h1>
            <div className="apa flex">
                <img src={tentang1} alt="" data-aos="flip-left"/>
                <div className="textContent grid" data-aos="fade-up">
                    <h3>Apa itu<span> BIMBA <span className='IFE'>IFE</span> ?</span></h3>
                    <p>Bimba IFE adalah bimbingan belajar terkemuka yang berkomitmen untuk memberikan pendidikan berkualitas tinggi bagi anak-anak. Di Bimba IFE, kami percaya bahwa setiap anak memiliki potensi luar biasa yang perlu dikembangkan sejak dini. Oleh karena itu, kami menawarkan tiga program unggulan yang dirancang untuk memenuhi kebutuhan pendidikan anak Anda: Baca Tulis Hitung (Calistung), Bahasa Inggris, dan Jarimatika.</p>
                    <h4>Fasilitas Kami</h4>
                    <ul>
                        <li>Ruangan berAC</li>
                        <li>Ruangan bersih dan nyaman</li>
                        <li>Berbagai macam mainan</li>
                        <li>Berbagai gambar untuk mewarnai</li>
                    </ul>
                </div>
            </div>
            <div className="kenapa flex">
                <img src={tentang2} alt="" data-aos="flip-right"/>
                <div className="textContent grid" data-aos="fade-up">
                    <h3>Mengapa memilih<span> BIMBA <span className='IFE'>IFE</span> ?</span></h3>
                    <ul>
                        <li>Jadwal belajar yg seru, selain Calistung setiap hri anak akan mendapatkan kegiatan yg berbeda beda seperti  kreatifitas/montessori/b.arab/b.english,dsb</li>
                        <li>Pengajar Berpengalaman: Tim pengajar di Bimba IFE terdiri dari para profesional yang berpengalaman dan berdedikasi untuk membantu anak-anak mencapai potensi maksimal mereka.</li>
                        <li>Metode Pembelajaran Interaktif: Kami menggunakan metode pembelajaran yang interaktif dan menyenangkan untuk memastikan anak-anak belajar dengan cara yang efektif dan tidak membosankan.</li>
                        <li>Lingkungan Belajar yang Nyaman: Bimba IFE menyediakan lingkungan belajar yang aman dan nyaman, yang memungkinkan anak-anak belajar dengan tenang dan fokus.</li>
                    </ul>
                </div>
            </div>
            <div className="visimisi flex">
                <img src={tentang3} alt="" data-aos="flip-left"/>
                <div className="textContent grid" data-aos="fade-up">
                    <h3>Visi & Misi<span> BIMBA <span className='IFE'>IFE</span> ?</span></h3>
                    <h4>Visi</h4>
                    <p>Menjadi bimbingan belajar terdepan yang berkomitmen untuk mengembangkan potensi akademik dan kreativitas anak-anak Indonesia melalui metode pembelajaran yang inovatif dan menyenangkan.</p>
                    <h4>Misi</h4>
                    <ul>
                        <li>Memberikan Pendidikan Berkualitas Tinggi</li>
                        <li>Mengembangkan Potensi Setiap Anak</li>
                        <li>Menghadirkan Pengajar Profesional dan Berpengalaman</li>
                        <li>Mengintegrasikan Teknologi dalam Pembelajaran</li>
                        <li>Mempromosikan Pendidikan Karakter</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Tentang
