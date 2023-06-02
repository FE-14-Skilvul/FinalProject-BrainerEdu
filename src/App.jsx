import { useState } from 'react'
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <header className="header" data-header="">
                <div className="container">
                    <a href="#" className="logo">
                        <img src="assets/images/logo.png" alt="img" />
                    </a>
                    <p>
                        <i>BRAINER EDUCATION</i>
                    </p>
                    <button className="menu-toggle-btn" data-nav-toggle-btn="">
                        <ion-icon name="menu-outline" />
                    </button>
                    <nav className="navbar">
                        <ul className="navbar-list">
                            <li>
                                <a href="#hero" className="navbar-link">
                                    BERANDA
                                </a>
                            </li>
                            <li>
                                <a href="#hero" className="navbar-link">
                                    TENTANG
                                </a>
                            </li>
                            <li>
                                <a href="#blog" className="navbar-link">
                                    JALUR BELAJAR
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="navbar-link">
                                    KONTAK
                                </a>
                            </li>
                        </ul>
                        <div className="header-actions">
                            <a href="login.html">Masuk</a>
                            <a href="daftar.html">Daftar</a>
                        </div>
                    </nav>
                </div>
            </header>
            <main>
                <article>
                    <section className="hero" id="hero">
                        <div className="container">
                            <div className="hero-content">
                                <h2 className="h1 hero-title">
                                    Getting Quality Education Is Now Easier
                                </h2>
                                <button type="button" className="btn btn-secondary">
                                    Lihat Video
                                </button>
                            </div>
                            <figure className="hero-banner">
                                <img src="assets/images/banner.png" alt="Hero image" width="75px" />
                            </figure>
                        </div>
                    </section>
                    <section className="features" id="features">
                        <div className="container">
                            <h1 className="h1 section-title">Tentang</h1>
                            <div className="features-wrapper">
                                <figure className="features-banner">
                                    <img src="assets/images/tentang (2).png" alt="illustration art" />
                                </figure>
                                <div className="features-content">
                                    <p className="features-content-subtitle">
                                        <ion-icon name="sparkles" />
                                        <span>BRAINER EDUCATION</span>
                                    </p>
                                    <h3 className="features-content-title">
                                        Apa Itu Brainer Education?
                                    </h3>
                                    <p className="features-content-text">
                                        Brainer Education adalah web berfokus dibidang pembelajaran
                                        gratis dan berbayar dengan metode online. menawarkan video
                                        belajar dan latihan yang dapat memudahkan pembelajaran para
                                        penggunanya. Melalui platform ini kita bisa belajar tanpa
                                        ketinggalan dan bisa menuntunkan minat yang diinginkan. Berikut
                                        admin dari product Brainer Education
                                    </p>
                                    <div className="btn-group">
                                        <button className="btn btn-primary">Selengkapnya</button>
                                        <a href="tentang.html" />
                                    </div>
                                </div>
                            </div>
                            {/* 
  - BLOG
*/}
                            <section className="blog" id="blog">
                                <div className="container">
                                    <h1 className="h1 section-title">Jalur Belajar</h1>
                                    <ul className="blog-list">
                                        <li>
                                            <div className="blog-card">
                                                <figure className="blog-banner">
                                                    <img
                                                        src="assets/images/ekonomi.png"
                                                        alt="Best Traveling Place"
                                                    />
                                                </figure>
                                                <h3 className="blog-title">Ekonomi</h3>
                                                <p className="blog-text">
                                                    Jalur ini meliputi kuliah di jurusan ekonomi atau bisnis
                                                    di perguruan tinggi. Di sini, Anda akan mempelajari
                                                    berbagai konsep ekonomi, termasuk teori ekonomi, kebijakan
                                                    moneter, kebijakan fiskal, dan sebagainya.
                                                </p>
                                                <a href="#" className="blog-link-btn">
                                                    <span>Selengkapnya</span>
                                                    <ion-icon name="chevron-forward-outline" />
                                                </a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="blog-card">
                                                <figure className="blog-banner">
                                                    <img
                                                        src="assets/images/bahasa.png"
                                                        alt="Private Meeting Room"
                                                    />
                                                </figure>
                                                <h3 className="blog-title">Bahasa</h3>
                                                <p className="blog-text">
                                                    Pendidikan formal di lembaga pendidikan: Jalur ini
                                                    meliputi belajar bahasa Inggris di sekolah atau perguruan
                                                    tinggi. Di sini, Anda akan mempelajari keterampilan dasar
                                                    bahasa Inggris, seperti kosa kata, tata bahasa, membaca,
                                                    menulis, mendengarkan, dan berbicara.
                                                </p>
                                                <a href="#" className="blog-link-btn">
                                                    <span>Selengkapnya</span>
                                                    <ion-icon name="chevron-forward-outline" />
                                                </a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="blog-card">
                                                <figure className="blog-banner">
                                                    <img
                                                        src="assets/images/pemrograman.png"
                                                        alt="The Best Business Ideas"
                                                    />
                                                </figure>
                                                <h3 className="blog-title">Pemrograman</h3>
                                                <p className="blog-text">
                                                    Pendidikan formal di perguruan tinggi: Jalur ini meliputi
                                                    kuliah di jurusan Ilmu Komputer atau Teknik Informatika di
                                                    perguruan tinggi. Di sini, Anda akan mempelajari konsep
                                                    dasar pemrograman, algoritma, struktur data, dan bahasa
                                                    pemrograman.
                                                </p>
                                                <a href="#" className="blog-link-btn">
                                                    <span>Selengkapnya</span>
                                                    <ion-icon name="chevron-forward-outline" />
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </section>
                            {/* 
  - CONTACT
*/}
                            <section className="contact" id="contact">
                                <div className="container">
                                    <h1 className="h1 section-title">Kontak</h1>
                                    <div className="contact-wrapper">
                                        <form action="" className="contact-form">
                                            <div className="wrapper-flex">
                                                <div className="input-wrapper">
                                                    <label htmlFor="nama awal">Nama Awal*</label>
                                                    <input
                                                        type="text"
                                                        name="name awal"
                                                        id="name"
                                                        required=""
                                                        placeholder="Masukkan Nama Awal"
                                                        className="input-field"
                                                    />
                                                </div>
                                                <div className="input-wrapper">
                                                    <label htmlFor="nama akhir">Nama Akhir*</label>
                                                    <input
                                                        type="text"
                                                        name="nama akhir"
                                                        id="name"
                                                        required=""
                                                        placeholder="Masukkan Nama Akhir"
                                                        className="input-field"
                                                    />
                                                </div>
                                            </div>
                                            <div className="input-wrapper">
                                                <label htmlFor="email">Email*</label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    id="email"
                                                    required=""
                                                    placeholder="Masukkan Email"
                                                    className="input-field"
                                                />
                                            </div>
                                            <div className="input-wrapper">
                                                <label htmlFor="nomor">Nomor Telepon*</label>
                                                <input
                                                    type="number"
                                                    name="nomor"
                                                    id="nomor"
                                                    required=""
                                                    placeholder="Masukkan Nomor Telepon"
                                                    className="input-field"
                                                />
                                            </div>
                                            <label htmlFor="message">Pesan*</label>
                                            <textarea
                                                name="message"
                                                id="message"
                                                required=""
                                                placeholder="Masukkan Pesan"
                                                className="input-field"
                                                defaultValue={""}
                                            />
                                            <button type="submit" className="btn btn-primary">
                                                <span>Kirim Pesan</span>
                                                <ion-icon name="paper-plane-outline" />
                                            </button>
                                        </form>
                                        <ul className="contact-list">
                                            <li>
                                                <a
                                                    href="mailto:support@website.com"
                                                    className="contact-link"
                                                >
                                                    <ion-icon name="mail-outline" />
                                                    <span>: brainereducation@gmail.com</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="contact-link">
                                                    <ion-icon name="globe-outline" />
                                                    <span>: www.brainereducation.com</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="tel:+0011234567890" className="contact-link">
                                                    <ion-icon name="call-outline" />
                                                    <span>: 0123456789</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="contact-link">
                                                    <ion-icon name="location-outline" />
                                                    <address>: Jakarta Indonesia</address>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </section>
                </article>
            </main>
            {/* 
    - FOOTER
  */}
            <footer>
                <div className="footer-top">
                    <div className="container">
                        <div className="footer-brand">
                            <a href="#" className="logo">
                                <img src="assets/images/logo.png" alt="img" />
                            </a>
                            <p className="footer-text">
                                Unduh aplikasi dengan cara klik link dibawah ini :
                            </p>
                            <p>
                                <img src="assets/images/goggleplay.png" alt="img" />
                            </p>
                            <p>
                                <img src="assets/images/appstore.png" alt="img" />
                            </p>
                            <ul className="social-list">
                                <li>
                                    <a href="#" className="social-link">
                                        <ion-icon name="logo-facebook" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="social-link">
                                        <ion-icon name="logo-twitter" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="social-link">
                                        <ion-icon name="logo-instagram" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="social-link">
                                        <ion-icon name="logo-linkedin" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-link-box">
                            <ul className="footer-list">
                                <li>
                                    <p className="footer-item-title">Pages</p>
                                </li>
                                <li>
                                    <a href="#" className="footer-link">
                                        Beranda
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="footer-link">
                                        Tentang
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="footer-link">
                                        Jalur Belajar
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="footer-link">
                                        Kontak
                                    </a>
                                </li>
                            </ul>
                            <ul className="footer-list">
                                <li>
                                    <p className="footer-item-title">Service</p>
                                </li>
                                <li>
                                    <a href="#" className="footer-link">
                                        Ekonomi
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="footer-link">
                                        Bahasa
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="footer-link">
                                        Pemrograman
                                    </a>
                                </li>
                            </ul>
                            <ul className="footer-list">
                                <li>
                                    <p className="footer-item-title">Kontak</p>
                                </li>
                                <li>
                                    <a href="#" className="footer-link">
                                        0123456789
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="footer-link">
                                        brainereducation@gmail.com
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="footer-link">
                                        Jakarta Indonesia
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <p className="copyright">
                            Copyright© <a href="">2023</a>.BrainerEducation
                        </p>
                    </div>
                </div>
            </footer>
        </>

    )
}

export default App