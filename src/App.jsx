import { useState } from 'react'
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            {/* preloader */}
            <div id="preloader">
                <div className="preloader">
                    <span />
                    <span />
                </div>
            </div>
            {/* preloader end  */}
            <header>
                <div
                    id="theme-menu-two"
                    className="main-header-area pl-100 pr-100 pt-20 pb-15"
                >
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-xl-2 col-lg-2 col-5">
                                <div className="logo">
                                    <a href="index.html">
                                        <img src="/assets/img/logo/header_logo_one.svg" alt="" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-xl-7 col-lg-8 d-none d-lg-block">
                                <nav className="main-menu navbar navbar-expand-lg justify-content-center">
                                    <div className="nav-container">
                                        <div
                                            className="collapse navbar-collapse"
                                            id="navbarSupportedContent"
                                        >
                                            <ul className="navbar-nav">
                                                <li className="nav-item dropdown mega-menu">
                                                    <a
                                                        className="nav-link dropdown-toggle"
                                                        href="#"
                                                        id="navbarDropdown"
                                                        role="button"
                                                        data-bs-toggle="dropdown"
                                                        aria-expanded="false"
                                                    >
                                                        All Categories
                                                    </a>
                                                    <ul
                                                        className="dropdown-menu submenu mega-menu__sub-menu-box"
                                                        aria-labelledby="navbarDropdown"
                                                    >
                                                        <li>
                                                            <a href="index.html">
                                                                <span>
                                                                    <img src="/assets/img/icon/icon7.svg" alt="" />
                                                                </span>
                                                                Business
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="index-2.html">
                                                                <span>
                                                                    <img src="/assets/img/icon/icon8.svg" alt="" />
                                                                </span>
                                                                Technology
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="index.html">
                                                                <span>
                                                                    <img src="/assets/img/icon/icon9.svg" alt="" />
                                                                </span>
                                                                Development
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="index-2.html">
                                                                <span>
                                                                    <img src="/assets/img/icon/icon10.svg" alt="" />
                                                                </span>
                                                                Photography
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="index.html">
                                                                <span>
                                                                    <img src="/assets/img/icon/icon11.svg" alt="" />
                                                                </span>
                                                                Digital Marketing
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="index-2.html">
                                                                <span>
                                                                    <img src="/assets/img/icon/icon12.svg" alt="" />
                                                                </span>
                                                                Programming
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="index.html">
                                                                <span>
                                                                    <img src="/assets/img/icon/icon14.svg" alt="" />
                                                                </span>
                                                                Videograpgy
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="index-2.html">
                                                                <span>
                                                                    <img src="/assets/img/icon/icon13.svg" alt="" />
                                                                </span>
                                                                Illustration
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="nav-item dropdown active">
                                                    <a
                                                        className="nav-link dropdown-toggle"
                                                        href="#"
                                                        id="navbarDropdown2"
                                                        role="button"
                                                        data-bs-toggle="dropdown"
                                                        aria-expanded="false"
                                                    >
                                                        Home
                                                    </a>
                                                    <ul
                                                        className="dropdown-menu"
                                                        aria-labelledby="navbarDropdown2"
                                                    >
                                                        <li>
                                                            <a className="dropdown-item" href="index.html">
                                                                Home Style 1
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item" href="index-2.html">
                                                                Home Style 2
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item" href="index-3.html">
                                                                Home Style 3
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="nav-item dropdown">
                                                    <a
                                                        className="nav-link dropdown-toggle"
                                                        href="#"
                                                        id="navbarDropdown3"
                                                        role="button"
                                                        data-bs-toggle="dropdown"
                                                        aria-expanded="false"
                                                    >
                                                        Pages
                                                    </a>
                                                    <ul
                                                        className="dropdown-menu"
                                                        aria-labelledby="navbarDropdown3"
                                                    >
                                                        <li>
                                                            <a className="dropdown-item" href="about.html">
                                                                About Us
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item" href="courses.html">
                                                                Course One
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item" href="courses-2.html">
                                                                Course Two
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="dropdown-item"
                                                                href="course-details.html"
                                                            >
                                                                Courses Details
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item" href="price.html">
                                                                Price
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item" href="instructor.html">
                                                                Instructor
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="dropdown-item"
                                                                href="instructor-profile.html"
                                                            >
                                                                Instructor Profile
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item" href="faq.html">
                                                                FAQ
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="nav-item dropdown">
                                                    <a
                                                        className="nav-link dropdown-toggle"
                                                        href="#"
                                                        id="navbarDropdown4"
                                                        role="button"
                                                        data-bs-toggle="dropdown"
                                                        aria-expanded="false"
                                                    >
                                                        Blog
                                                    </a>
                                                    <ul
                                                        className="dropdown-menu"
                                                        aria-labelledby="navbarDropdown4"
                                                    >
                                                        <li>
                                                            <a className="dropdown-item" href="blog.html">
                                                                Blog Grid
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item" href="blog-details.html">
                                                                Blog Details
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link"
                                                        href="contact.html"
                                                        id="navbarDropdown5"
                                                        role="button"
                                                        aria-expanded="false"
                                                    >
                                                        Contact
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                            <div className="col-xl-3 col-lg-2 col-7">
                                <div className="right-nav d-flex align-items-center justify-content-end">
                                    <div className="right-btn mr-25 mr-xs-15">
                                        <ul className="d-flex align-items-center">
                                            <li>
                                                <a href="contact.html" className="theme_btn free_btn">
                                                    Try Free Now
                                                </a>
                                            </li>
                                            <li>
                                                <a className="sign-in ml-20" href="login.html">
                                                    <img src="/assets/img/icon/user.svg" alt="" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="hamburger-menu d-md-inline-block d-lg-none text-right">
                                        <a href="javascript:void(0);">
                                            <i className="far fa-bars" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* /.theme-main-menu */}
            </header>
            {/* slide-bar start */}
            <aside className="slide-bar">
                <div className="close-mobile-menu">
                    <a href="javascript:void(0);">
                        <i className="fas fa-times" />
                    </a>
                </div>
                {/* offset-sidebar start */}
                <div className="offset-sidebar">
                    <div className="offset-widget offset-logo mb-30">
                        <a href="index.html">
                            <img src="/assets/img/logo/header_logo_one.svg" alt="logo" />
                        </a>
                    </div>
                    <div className="offset-widget mb-40">
                        <div className="info-widget">
                            <h4 className="offset-title mb-20">About Us</h4>
                            <p className="mb-30">
                                But I must explain to you how all this mistaken idea of denouncing
                                pleasure and praising pain was born and will give you a complete
                                account of the system and expound the actual teachings of the great
                                explore
                            </p>
                            <a className="theme_btn theme_btn_bg" href="contact.html">
                                Contact Us
                            </a>
                        </div>
                    </div>
                    <div className="offset-widget mb-30 pr-10">
                        <div className="info-widget info-widget2">
                            <h4 className="offset-title mb-20">Contact Info</h4>
                            <p>

                                <i className="fal fa-address-book" /> 23/A, Miranda City Likaoli
                                Prikano, Dope
                            </p>
                            <p>

                                <i className="fal fa-phone" /> +0989 7876 9865 9
                            </p>
                            <p>

                                <i className="fal fa-envelope-open" /> info@example.com
                            </p>
                        </div>
                    </div>
                </div>
                {/* offset-sidebar end */}
                {/* side-mobile-menu start */}
                <nav className="side-mobile-menu">
                    <ul id="mobile-menu-active">
                        <li className="has-dropdown">
                            <a href="index.html">Home</a>
                            <ul className="sub-menu">
                                <li>
                                    <a href="index.html">Home Style 1</a>
                                </li>
                                <li>
                                    <a href="index-2.html">Home Style 2</a>
                                </li>
                                <li>
                                    <a href="index-3.html">Home Style 3</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="about.html">About</a>
                        </li>
                        <li className="has-dropdown">
                            <a href="#">Pages</a>
                            <ul className="sub-menu">
                                <li>
                                    <a href="courses.html">Course One</a>
                                </li>
                                <li>
                                    <a href="courses-2.html">Course Two</a>
                                </li>
                                <li>
                                    <a href="course-details.html">Courses Details</a>
                                </li>
                                <li>
                                    <a href="price.html">Price</a>
                                </li>
                                <li>
                                    <a href="instructor.html">Instructor</a>
                                </li>
                                <li>
                                    <a href="instructor-profile.html">Instructor Profile</a>
                                </li>
                                <li>
                                    <a href="faq.html">FAQ</a>
                                </li>
                                <li>
                                    <a href="login.html">login</a>
                                </li>
                            </ul>
                        </li>
                        <li className="has-dropdown">
                            <a href="#">Blogs</a>
                            <ul className="sub-menu">
                                <li>
                                    <a href="blog.html">Blog Grid</a>
                                </li>
                                <li>
                                    <a href="blog-details.html">Blog Details</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="contact.html">Contacts Us</a>
                        </li>
                    </ul>
                </nav>
                {/* side-mobile-menu end */}
            </aside>
            <div className="body-overlay" />
            {/* slide-bar end */}
            <main>
                {/*slider-area start*/}
                <section className="slider-area slider-gradient-bg pt-180 pb-100 pb-xs-50">
                    <img className="sl-shape shape_01" src="/assets/img/icon/01.svg" alt="" />
                    <img className="sl-shape shape_02" src="/assets/img/icon/02.svg" alt="" />
                    <img className="sl-shape shape_03" src="/assets/img/icon/03.svg" alt="" />
                    <img className="sl-shape shape_04" src="/assets/img/icon/04.svg" alt="" />
                    <img className="sl-shape shape_05" src="/assets/img/icon/05.svg" alt="" />
                    <img className="sl-shape shape_06" src="/assets/img/icon/06.svg" alt="" />
                    <div className="main-slider">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6">
                                    <div className="slider__content slider__content__02 pt-120">
                                        <h5
                                            className="left-line mb-20 pl-40 wow fadeInUp2 animated"
                                            data-wow-delay=".1s"
                                        >
                                            Browse Categories
                                        </h5>
                                        <h1
                                            className="main-title mb-40 wow fadeInUp2 animated"
                                            data-wow-delay=".2s"
                                        >
                                            Learn online from the leaders in Business Education
                                        </h1>
                                        <h5
                                            className="mb-35 wow fadeInUp2 animated"
                                            data-wow-delay=".3s"
                                        >
                                            There are many variations of passages of Lorem Ipsum
                                            available, but the majority have suffered alteration in some
                                            form, by injected humour, or randomised words which don't look
                                            .
                                        </h5>
                                        <ul
                                            className="search__area d-md-inline-flex align-items-center justify-content-between mb-30 wow fadeInUp animated"
                                            data-delay="1.5s"
                                        >
                                            <li>
                                                <div className="widget__search">
                                                    <form className="input-form" action="#">
                                                        <input type="text" placeholder="Find Courses" />
                                                    </form>
                                                    <button className="search-icon">
                                                        <i className="far fa-search" />
                                                    </button>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="widget__select">
                                                    <select name="select-cat" id="select">
                                                        <option value="">Categories</option>
                                                        <option value="">Class One</option>
                                                        <option value="">Class Two</option>
                                                        <option value="">Class Three</option>
                                                        <option value="">Class Four</option>
                                                        <option value="">Class Five</option>
                                                    </select>
                                                </div>
                                            </li>
                                            <li>
                                                <button className="theme_btn search_btn ml-35">
                                                    Search Now
                                                </button>
                                            </li>
                                        </ul>
                                        <p className="highlight-text">
                                            <span>#1</span> Worldwide Online Learning &amp; Skills
                                            Development Platform
                                        </p>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6">
                                    <div className="slider-img-box-two">
                                        <div className="chose-img-wrapper mb-50 pos-rel">
                                            <img
                                                className="shape-avatar-bg"
                                                src="/assets/img/slider/avatar-bg.png"
                                                alt=""
                                            />
                                            <div className="coures-member">
                                                <h5>Total Students</h5>
                                                <img
                                                    className="choses chose_01"
                                                    src="/assets/img/chose/01.png"
                                                    alt="Chose-img"
                                                />
                                                <img
                                                    className="choses chose_02"
                                                    src="/assets/img/chose/02.png"
                                                    alt="Chose-img"
                                                />
                                                <img
                                                    className="choses chose_03"
                                                    src="/assets/img/chose/03.png"
                                                    alt="Chose-img"
                                                />
                                                <img
                                                    className="choses chose_04"
                                                    src="/assets/img/chose/04.png"
                                                    alt="Chose-img"
                                                />
                                                <span>25k+</span>
                                            </div>
                                            <div className="feature tag_01">
                                                <span>
                                                    <img src="/assets/img/icon/shield-check.svg" alt="" />
                                                </span>
                                                Safe &amp; Secured
                                            </div>
                                            <div className="feature tag_02">
                                                <span>
                                                    <img src="/assets/img/icon/catalog.svg" alt="" />
                                                </span>
                                                120+ Catalog
                                            </div>
                                            <div className="feature tag_03">
                                                <span>
                                                    <i className="fal fa-check" />
                                                </span>
                                                Quality Education
                                            </div>
                                            <div className="video-wrapper">
                                                <a
                                                    href="https://www.youtube.com/watch?v=7omGYwdcS04"
                                                    className="popup-video"
                                                >
                                                    <i className="fas fa-play" />
                                                </a>
                                            </div>
                                            <img
                                                className="chose_05 wow fadeInRight animated"
                                                data-delay="1.5s"
                                                src="/assets/img/slider/slide2.png"
                                                alt="Chose-img"
                                            />
                                            <img
                                                className="chose_06 wow fadeInRight animated"
                                                data-delay="1.5s"
                                                src="/assets/img/icon/dot-plane.svg"
                                                alt="Chose-img"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*slider-area end*/}
                {/*course-categories start*/}
                <section className="course-categories pt-150 pb-140 pt-md-95 pb-md-90 pt-xs-95 pb-xs-90">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-6 col-lg-8">
                                <div className="section-title section-title-2 text-center mb-50">
                                    <h5 className="bottom-line left-line mb-25 pl-40 pr-40">
                                        Browse Categories
                                    </h5>
                                    <h2 className="mb-20">Explore our Online Subjects</h2>
                                    <p>
                                        There are many variations of passages of Lorem Ipsum available,
                                        but the majority have suffered alteration in some form, by
                                        injected humour.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xxl-12">
                                <ul className="submenu mega-menu__sub-menu-box course__cat__list">
                                    <li>
                                        <a className="active" href="courses.html">
                                            <span>
                                                <img
                                                    className="icon-01"
                                                    src="/assets/img/icon/dna.svg"
                                                    alt=""
                                                />
                                                <img
                                                    className="icon-02"
                                                    src="/assets/img/icon/dna.svg"
                                                    alt=""
                                                />
                                            </span>
                                            Science
                                            <span className="arrow-box">
                                                <img
                                                    className="arrows-icon"
                                                    src="/assets/img/icon/arrow-right.svg"
                                                    alt="arrow-right"
                                                />
                                                <img
                                                    className="arrows-icon-white"
                                                    src="/assets/img/icon/arrow-right-white.svg"
                                                    alt="arrow-right"
                                                />
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="courses.html">
                                            <span>
                                                <img
                                                    className="icon-01"
                                                    src="/assets/img/icon/chart.svg"
                                                    alt=""
                                                />
                                                <img
                                                    className="icon-02"
                                                    src="/assets/img/icon/chart-02.svg"
                                                    alt=""
                                                />
                                            </span>
                                            Business
                                            <span className="arrow-box">
                                                <img
                                                    className="arrows-icon"
                                                    src="/assets/img/icon/arrow-right.svg"
                                                    alt="arrow-right"
                                                />
                                                <img
                                                    className="arrows-icon-white"
                                                    src="/assets/img/icon/arrow-right-white.svg"
                                                    alt="arrow-right"
                                                />
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="courses.html">
                                            <span>
                                                <img
                                                    className="icon-01"
                                                    src="/assets/img/icon/code.svg"
                                                    alt=""
                                                />
                                                <img
                                                    className="icon-02"
                                                    src="/assets/img/icon/code-01.svg"
                                                    alt=""
                                                />
                                            </span>
                                            Development
                                            <span className="arrow-box">
                                                <img
                                                    className="arrows-icon"
                                                    src="/assets/img/icon/arrow-right.svg"
                                                    alt="arrow-right"
                                                />
                                                <img
                                                    className="arrows-icon-white"
                                                    src="/assets/img/icon/arrow-right-white.svg"
                                                    alt="arrow-right"
                                                />
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="courses.html">
                                            <span>
                                                <img
                                                    className="icon-01"
                                                    src="/assets/img/icon/cube.svg"
                                                    alt=""
                                                />
                                                <img
                                                    className="icon-02"
                                                    src="/assets/img/icon/cube-02.svg"
                                                    alt=""
                                                />
                                            </span>
                                            Career
                                            <span className="arrow-box">
                                                <img
                                                    className="arrows-icon"
                                                    src="/assets/img/icon/arrow-right.svg"
                                                    alt="arrow-right"
                                                />
                                                <img
                                                    className="arrows-icon-white"
                                                    src="/assets/img/icon/arrow-right-white.svg"
                                                    alt="arrow-right"
                                                />
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="courses.html">
                                            <span>
                                                <img
                                                    className="icon-01"
                                                    src="/assets/img/icon/design-1b.svg"
                                                    alt=""
                                                />
                                                <img
                                                    className="icon-02"
                                                    src="/assets/img/icon/design-02.svg"
                                                    alt=""
                                                />
                                            </span>
                                            Arts &amp; Design
                                            <span className="arrow-box">
                                                <img
                                                    className="arrows-icon"
                                                    src="/assets/img/icon/arrow-right.svg"
                                                    alt="arrow-right"
                                                />
                                                <img
                                                    className="arrows-icon-white"
                                                    src="/assets/img/icon/arrow-right-white.svg"
                                                    alt="arrow-right"
                                                />
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="courses.html">
                                            <span>
                                                <img
                                                    className="icon-01"
                                                    src="/assets/img/icon/mace.svg"
                                                    alt=""
                                                />
                                                <img
                                                    className="icon-02"
                                                    src="/assets/img/icon/mace-02.svg"
                                                    alt=""
                                                />
                                            </span>
                                            Law
                                            <span className="arrow-box">
                                                <img
                                                    className="arrows-icon"
                                                    src="/assets/img/icon/arrow-right.svg"
                                                    alt="arrow-right"
                                                />
                                                <img
                                                    className="arrows-icon-white"
                                                    src="/assets/img/icon/arrow-right-white.svg"
                                                    alt="arrow-right"
                                                />
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="courses.html">
                                            <span>
                                                <img
                                                    className="icon-01"
                                                    src="/assets/img/icon/ambulance.svg"
                                                    alt=""
                                                />
                                                <img
                                                    className="icon-02"
                                                    src="/assets/img/icon/ambulance-02.svg"
                                                    alt=""
                                                />
                                            </span>
                                            MBBS
                                            <span className="arrow-box">
                                                <img
                                                    className="arrows-icon"
                                                    src="/assets/img/icon/arrow-right.svg"
                                                    alt="arrow-right"
                                                />
                                                <img
                                                    className="arrows-icon-white"
                                                    src="/assets/img/icon/arrow-right-white.svg"
                                                    alt="arrow-right"
                                                />
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="courses.html">
                                            <span>
                                                <img
                                                    className="icon-01"
                                                    src="/assets/img/icon/3d.svg"
                                                    alt=""
                                                />
                                                <img
                                                    className="icon-02"
                                                    src="/assets/img/icon/3d-02.svg"
                                                    alt=""
                                                />
                                            </span>
                                            Technological
                                            <span className="arrow-box">
                                                <img
                                                    className="arrows-icon"
                                                    src="/assets/img/icon/arrow-right.svg"
                                                    alt="arrow-right"
                                                />
                                                <img
                                                    className="arrows-icon-white"
                                                    src="/assets/img/icon/arrow-right-white.svg"
                                                    alt="arrow-right"
                                                />
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-xxl-12 text-center mt-40">
                                <a href="courses.html" className="theme_btn">
                                    All Categories
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                {/*course-categories end*/}
                {/* feature-course start */}
                <section className="feature-course gradient-bg pt-150 pb-120 pt-md-95 pb-md-70 pt-xs-95 pb-xs-70">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-6 col-lg-12">
                                <div className="section-title section-title-2 text-center text-xl-start mb-50">
                                    <h5 className="bottom-line left-line mb-25 pl-40">
                                        Featured Courses
                                    </h5>
                                    <h2 className="mb-20">Explore our Popular Courses</h2>
                                    <p>
                                        There are many variations of passages of Lorem Ipsum available,
                                        but the majority have suffered alteration in some form, by
                                        injected humour.
                                    </p>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-12 text-center text-xl-end">
                                <div className="portfolio-menu portfolio-menu-two mb-30">
                                    <button className="gf_btn active" data-filter="*">
                                        All
                                    </button>
                                    <button className="gf_btn" data-filter=".cat1">
                                        Career
                                    </button>
                                    <button className="gf_btn" data-filter=".cat2">
                                        Development
                                    </button>
                                    <button className="gf_btn" data-filter=".cat3">
                                        Business
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="grid row">
                            <div className="col-lg-4 col-md-6 grid-item cat2 cat3">
                                <div className="z-gallery z-gallery-two mb-30">
                                    <div className="z-gallery__thumb mb-20">
                                        <a href="course-details.html">
                                            <img
                                                className="img-fluid"
                                                src="/assets/img/course/07.png"
                                                alt=""
                                            />
                                        </a>
                                        <div className="feedback-tag">4.8(256)</div>
                                        <div className="heart-icon">
                                            <i className="fas fa-heart" />
                                        </div>
                                    </div>
                                    <div className="z-gallery__content pos-rel">
                                        <div className="course__tag course__tag__two mb-15">
                                            <span>Science</span>
                                            <span>Lab</span>
                                            <a className="price-tag" href="instructor-details.html">
                                                139$
                                            </a>
                                        </div>
                                        <h4 className="sub-title mb-20">
                                            <a href="course-details.html">
                                                Take Your Career to the Next Level Future
                                            </a>
                                        </h4>
                                        <div className="course__meta d-flex align-items-center justify-content-between mb-15">
                                            <span>
                                                <img
                                                    className="icon"
                                                    src="/assets/img/icon/time.svg"
                                                    alt="course-meta"
                                                />
                                                12 Periods
                                            </span>
                                            <span>
                                                <img
                                                    className="icon"
                                                    src="/assets/img/icon/bar-chart.svg"
                                                    alt="course-meta"
                                                />
                                                Intermediate
                                            </span>
                                        </div>
                                        <p className="mb-20">
                                            There are many variations of passages of with Lorem Ipsum
                                            available.
                                        </p>
                                        <div className="course__authors  d-xl-flex align-items-center justify-content-between">
                                            <div className="course__authors-box d-flex align-items-center">
                                                <img src="/assets/img/course/in7.png" alt="" />
                                                <div className="course__authors-box-text ml-10">
                                                    <h5>Mark Herry</h5>
                                                    <span>Career Developer</span>
                                                </div>
                                            </div>
                                            <p>
                                                <span>6593+</span> Students
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 grid-item cat1 ">
                                <div className="z-gallery z-gallery-two mb-30">
                                    <div className="z-gallery__thumb mb-20">
                                        <a href="course-details.html">
                                            <img
                                                className="img-fluid"
                                                src="/assets/img/course/08.png"
                                                alt=""
                                            />
                                        </a>
                                        <div className="feedback-tag">4.8(256)</div>
                                        <div className="heart-icon">
                                            <i className="fas fa-heart" />
                                        </div>
                                    </div>
                                    <div className="z-gallery__content pos-rel">
                                        <div className="course__tag course__tag__two mb-15">
                                            <span>Science</span>
                                            <span>Lab</span>
                                            <a className="price-tag" href="instructor-details.html">
                                                139$
                                            </a>
                                        </div>
                                        <h4 className="sub-title mb-20">
                                            <a href="course-details.html">
                                                Your Career to build for the pro level
                                            </a>
                                        </h4>
                                        <div className="course__meta d-flex align-items-center justify-content-between mb-15">
                                            <span>
                                                <img
                                                    className="icon"
                                                    src="/assets/img/icon/time.svg"
                                                    alt="course-meta"
                                                />
                                                12 Periods
                                            </span>
                                            <span>
                                                <img
                                                    className="icon"
                                                    src="/assets/img/icon/bar-chart.svg"
                                                    alt="course-meta"
                                                />
                                                Intermediate
                                            </span>
                                        </div>
                                        <p className="mb-20">
                                            There are many variations of passages of with Lorem Ipsum
                                            available.
                                        </p>
                                        <div className="course__authors  d-xl-flex align-items-center justify-content-between">
                                            <div className="course__authors-box d-flex align-items-center">
                                                <img src="/assets/img/course/in8.png" alt="" />
                                                <div className="course__authors-box-text ml-10">
                                                    <h5>Oisi Nill</h5>
                                                    <span>Youth Developer</span>
                                                </div>
                                            </div>
                                            <p>
                                                <span>5593+</span> Students
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 grid-item cat2">
                                <div className="z-gallery z-gallery-two mb-30">
                                    <div className="z-gallery__thumb mb-20">
                                        <a href="course-details.html">
                                            <img
                                                className="img-fluid"
                                                src="/assets/img/course/09.png"
                                                alt=""
                                            />
                                        </a>
                                        <div className="feedback-tag">4.8(256)</div>
                                        <div className="heart-icon">
                                            <i className="fas fa-heart" />
                                        </div>
                                    </div>
                                    <div className="z-gallery__content pos-rel">
                                        <div className="course__tag course__tag__two mb-15">
                                            <span>Science</span>
                                            <span>Lab</span>
                                            <a className="price-tag" href="instructor-details.html">
                                                139$
                                            </a>
                                        </div>
                                        <h4 className="sub-title mb-20">
                                            <a href="course-details.html">
                                                Take Your Career to the Next Level Future
                                            </a>
                                        </h4>
                                        <div className="course__meta d-flex align-items-center justify-content-between mb-15">
                                            <span>
                                                <img
                                                    className="icon"
                                                    src="/assets/img/icon/time.svg"
                                                    alt="course-meta"
                                                />
                                                12 Periods
                                            </span>
                                            <span>
                                                <img
                                                    className="icon"
                                                    src="/assets/img/icon/bar-chart.svg"
                                                    alt="course-meta"
                                                />
                                                Intermediate
                                            </span>
                                        </div>
                                        <p className="mb-20">
                                            There are many variations of passages of with Lorem Ipsum
                                            available.
                                        </p>
                                        <div className="course__authors  d-xl-flex align-items-center justify-content-between">
                                            <div className="course__authors-box d-flex align-items-center">
                                                <img src="/assets/img/course/in9.png" alt="" />
                                                <div className="course__authors-box-text ml-10">
                                                    <h5>Mark Herry</h5>
                                                    <span>Career Developer</span>
                                                </div>
                                            </div>
                                            <p>
                                                <span>6593+</span> Students
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 grid-item cat1">
                                <div className="z-gallery z-gallery-two mb-30">
                                    <div className="z-gallery__thumb mb-20">
                                        <a href="course-details.html">
                                            <img
                                                className="img-fluid"
                                                src="/assets/img/course/10.png"
                                                alt=""
                                            />
                                        </a>
                                        <div className="feedback-tag">4.8(256)</div>
                                        <div className="heart-icon">
                                            <i className="fas fa-heart" />
                                        </div>
                                    </div>
                                    <div className="z-gallery__content pos-rel">
                                        <div className="course__tag course__tag__two mb-15">
                                            <span>Science</span>
                                            <span>Lab</span>
                                            <a className="price-tag" href="instructor-details.html">
                                                139$
                                            </a>
                                        </div>
                                        <h4 className="sub-title mb-20">
                                            <a href="course-details.html">
                                                Take A Course For You Biright Future
                                            </a>
                                        </h4>
                                        <div className="course__meta d-flex align-items-center justify-content-between mb-15">
                                            <span>
                                                <img
                                                    className="icon"
                                                    src="/assets/img/icon/time.svg"
                                                    alt="course-meta"
                                                />
                                                12 Periods
                                            </span>
                                            <span>
                                                <img
                                                    className="icon"
                                                    src="/assets/img/icon/bar-chart.svg"
                                                    alt="course-meta"
                                                />
                                                Intermediate
                                            </span>
                                        </div>
                                        <p className="mb-20">
                                            There are many variations of passages of with Lorem Ipsum
                                            available.
                                        </p>
                                        <div className="course__authors  d-xl-flex align-items-center justify-content-between">
                                            <div className="course__authors-box d-flex align-items-center">
                                                <img src="/assets/img/course/in10.png" alt="" />
                                                <div className="course__authors-box-text ml-10">
                                                    <h5>Asron Carp</h5>
                                                    <span>Front Developer</span>
                                                </div>
                                            </div>
                                            <p>
                                                <span>5003+</span> Students
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 grid-item cat3">
                                <div className="z-gallery z-gallery-two mb-30">
                                    <div className="z-gallery__thumb mb-20">
                                        <a href="course-details.html">
                                            <img
                                                className="img-fluid"
                                                src="/assets/img/course/11.png"
                                                alt=""
                                            />
                                        </a>
                                        <div className="feedback-tag">4.8(256)</div>
                                        <div className="heart-icon">
                                            <i className="fas fa-heart" />
                                        </div>
                                    </div>
                                    <div className="z-gallery__content pos-rel">
                                        <div className="course__tag course__tag__two mb-15">
                                            <span>Science</span>
                                            <span>Lab</span>
                                            <a className="price-tag" href="instructor-details.html">
                                                238$
                                            </a>
                                        </div>
                                        <h4 className="sub-title mb-20">
                                            <a href="course-details.html">
                                                Take Your Career to the Next Level Future
                                            </a>
                                        </h4>
                                        <div className="course__meta d-flex align-items-center justify-content-between mb-15">
                                            <span>
                                                <img
                                                    className="icon"
                                                    src="/assets/img/icon/time.svg"
                                                    alt="course-meta"
                                                />
                                                12 Periods
                                            </span>
                                            <span>
                                                <img
                                                    className="icon"
                                                    src="/assets/img/icon/bar-chart.svg"
                                                    alt="course-meta"
                                                />
                                                Intermediate
                                            </span>
                                        </div>
                                        <p className="mb-20">
                                            There are many variations of passages of with Lorem Ipsum
                                            available.
                                        </p>
                                        <div className="course__authors  d-xl-flex align-items-center justify-content-between">
                                            <div className="course__authors-box d-flex align-items-center">
                                                <img src="/assets/img/course/in11.png" alt="" />
                                                <div className="course__authors-box-text ml-10">
                                                    <h5>Simon Dill</h5>
                                                    <span>Career Speacil</span>
                                                </div>
                                            </div>
                                            <p>
                                                <span>6593+</span> Students
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 grid-item cat2 cat3">
                                <div className="z-gallery z-gallery-two mb-30">
                                    <div className="z-gallery__thumb mb-20">
                                        <a href="course-details.html">
                                            <img
                                                className="img-fluid"
                                                src="/assets/img/course/12.png"
                                                alt=""
                                            />
                                        </a>
                                        <div className="feedback-tag">4.8(256)</div>
                                        <div className="heart-icon">
                                            <i className="fas fa-heart" />
                                        </div>
                                    </div>
                                    <div className="z-gallery__content pos-rel">
                                        <div className="course__tag course__tag__two mb-15">
                                            <span>Science</span>
                                            <span>Lab</span>
                                            <a className="price-tag" href="instructor-details.html">
                                                300$
                                            </a>
                                        </div>
                                        <h4 className="sub-title mb-20">
                                            <a href="course-details.html">
                                                Your Career to build for the pro level
                                            </a>
                                        </h4>
                                        <div className="course__meta d-flex align-items-center justify-content-between mb-15">
                                            <span>
                                                <img
                                                    className="icon"
                                                    src="/assets/img/icon/time.svg"
                                                    alt="course-meta"
                                                />
                                                12 Periods
                                            </span>
                                            <span>
                                                <img
                                                    className="icon"
                                                    src="/assets/img/icon/bar-chart.svg"
                                                    alt="course-meta"
                                                />
                                                Intermediate
                                            </span>
                                        </div>
                                        <p className="mb-20">
                                            There are many variations of passages of with Lorem Ipsum
                                            available.
                                        </p>
                                        <div className="course__authors  d-xl-flex align-items-center justify-content-between">
                                            <div className="course__authors-box d-flex align-items-center">
                                                <img src="/assets/img/course/in12.png" alt="" />
                                                <div className="course__authors-box-text ml-10">
                                                    <h5>Touel Roe</h5>
                                                    <span>Magic Course</span>
                                                </div>
                                            </div>
                                            <p>
                                                <span>7756+</span> Students
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div
                                className="col-xxl-12 mt-20 text-center mb-20 wow fadeInUp2 animated"
                                data-wow-delay=".3s"
                            >
                                <a href="courses.html" className="theme_btn">
                                    Explore More
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                {/* feature-course end */}
                {/* popular-videos start */}
                <section className="popular-videos pt-150 pb-100 pt-md-95 pb-md-75 pt-xs-95 pb-xs-75">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-7">
                                <div className="section-title section-title-2 text-center mb-65">
                                    <h5 className="bottom-line left-line mb-25 pl-40">
                                        Popular Videos
                                    </h5>
                                    <h2 className="mb-20">Explore our Best Tutorials</h2>
                                    <p>
                                        There are many variations of passages of Lorem Ipsum available,
                                        but the majority have suffered alteration in some form, by
                                        injected humour.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-100">
                            <div className="col-lg-8 col-md-12 popular-videos-area nav-style-two">
                                <div className="popular-video-active">
                                    <div className="popular-videos-wrapper pos-rel">
                                        <div
                                            className="video__thumb mb-30"
                                            style={{ backgroundImage: "url(assets/img/video/01.png)" }}
                                        >
                                            <a
                                                href="https://www.youtube.com/watch?v=7omGYwdcS04"
                                                className="popup-video"
                                            >
                                                <i className="fas fa-play" />
                                            </a>
                                        </div>
                                        <div className="video__content">
                                            <h4>Develop yourself &amp; Gain more skills.</h4>
                                            <p>
                                                Lorem ipsum dolor sit amet, conse tetur sadipscing elitr,
                                                sed dinonu my eirmod tempor invidunt ut labo re et dolore
                                                magn aliq erat.
                                            </p>
                                            <a
                                                href="https://www.youtube.com/watch?v=7omGYwdcS04"
                                                className="theme_btn"
                                            >
                                                Watch Video
                                            </a>
                                        </div>
                                    </div>
                                    <div className="popular-videos-wrapper pos-rel">
                                        <div
                                            className="video__thumb mb-30"
                                            style={{ backgroundImage: "url(assets/img/video/01.png)" }}
                                        >
                                            <a
                                                href="https://www.youtube.com/watch?v=7omGYwdcS04"
                                                className="popup-video"
                                            >
                                                <i className="fas fa-play" />
                                            </a>
                                        </div>
                                        <div className="video__content">
                                            <h4>Develop yourself &amp; Gain more skills.</h4>
                                            <p>
                                                Lorem ipsum dolor sit amet, conse tetur sadipscing elitr,
                                                sed dinonu my eirmod tempor invidunt ut labo re et dolore
                                                magn aliq erat.
                                            </p>
                                            <a
                                                href="https://www.youtube.com/watch?v=7omGYwdcS04"
                                                className="theme_btn"
                                            >
                                                Watch Video
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 video-img-row">
                                <div className="row px-0 row-cols-1 row-cols-sm-2 row-cols-md-2 gx-xs-0 gx-4">
                                    <div
                                        className="col-lg-12 wow fadeInUp2 animated"
                                        data-wow-delay=".1s"
                                    >
                                        <div className="video__thumb video__thumb-width mb-30 pos-rel">
                                            <img
                                                className="img-fluid"
                                                src="/assets/img/video/02.png"
                                                alt=""
                                            />
                                            <a
                                                href="https://www.youtube.com/watch?v=7omGYwdcS04"
                                                className="popup-video"
                                            >
                                                <i className="fas fa-play" />
                                            </a>
                                        </div>
                                    </div>
                                    <div
                                        className="col-lg-12 wow fadeInUp2 animated"
                                        data-wow-delay=".2s"
                                    >
                                        <div className="video__thumb video__thumb-width pos-rel mb-30">
                                            <img
                                                className="img-fluid"
                                                src="/assets/img/video/03.png"
                                                alt=""
                                            />
                                            <a
                                                href="https://www.youtube.com/watch?v=7omGYwdcS04"
                                                className="popup-video"
                                            >
                                                <i className="fas fa-play" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row pl-75 pr-75 pr-lg-0 pr-md-0 pr-xs-0 pl-lg-0 pl-md-0 pl-xs-0">
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div
                                    className="counters text-center mb-30 wow fadeInUp2 animated"
                                    data-wow-delay=".1s"
                                >
                                    <h2>
                                        <span className="counter">100</span>+
                                    </h2>
                                    <h5>Specialist Good Teachers</h5>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div
                                    className="counters count-1 text-center mb-30 wow fadeInUp2 animated"
                                    data-wow-delay=".2s"
                                >
                                    <h2>
                                        <span className="counter">1000</span>+
                                    </h2>
                                    <h5>Online Learning Courses</h5>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div
                                    className="counters count-2 text-center mb-30 wow fadeInUp2 animated"
                                    data-wow-delay=".3s"
                                >
                                    <h2>
                                        <span className="counter">13654</span>+
                                    </h2>
                                    <h5>Online &amp; Offline Students</h5>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div
                                    className="counters count-3 text-center mb-30 wow fadeInUp2 animated"
                                    data-wow-delay=".4s"
                                >
                                    <h2>
                                        <span className="counter">365</span>+
                                    </h2>
                                    <h5>Special Awards Winning</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* popular-videos end */}
                {/*what-loking-for start*/}
                <section className="what-looking-for pos-rel gradient-bg pt-135 pb-115 pt-md-90 pb-md-70 pt-xs-90 pb-xs-70">
                    <div className="what-blur-bg-three" />
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-6 col-lg-8">
                                <div className="section-title text-center mb-65">
                                    <h2 className="mb-20">What you Looking For?</h2>
                                    <p>
                                        There are many variations of passages of Lorem Ipsum available,
                                        but the majority have suffered alteration in some form, by
                                        injected humour.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-85">
                            <div className="col-xl-6 col-lg-6 col-md-6">
                                <div
                                    className="what-box text-center mb-35 wow fadeInUp2 animated"
                                    data-wow-delay=".1s"
                                >
                                    <div className="what-box__icon wb-icon-2 mb-30">
                                        <img src="/assets/img/icon/professor.svg" alt="" />
                                    </div>
                                    <h3>Do you want to teach here?</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed di
                                        nonumy eirmod tempor invidunt ut labore et dolore magn aliq
                                        erat.
                                    </p>
                                    <a href="contact.html" className="theme_btn border_btn">
                                        Register Now
                                    </a>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6">
                                <div
                                    className="what-box text-center mb-35 wow fadeInUp2 animated"
                                    data-wow-delay=".2s"
                                >
                                    <div className="what-box__icon wb-icon-2 mb-30">
                                        <img src="/assets/img/icon/reading.svg" alt="" />
                                    </div>
                                    <h3>Do you want to learn here?</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed di
                                        nonumy eirmod tempor invidunt ut labore et dolore magn aliq
                                        erat.
                                    </p>
                                    <a href="contact.html" className="theme_btn border_btn active">
                                        Register Now
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div
                                    className="single-box s-box-2 mb-30 wow fadeInUp2 animated"
                                    data-wow-delay=".1s"
                                >
                                    <div className="single-box__icon mb-25">
                                        <img
                                            src="/assets/img/icon/skill-level-intermediate.svg"
                                            alt=""
                                        />
                                    </div>
                                    <h4 className="sub-title mb-10">Learn New Skills</h4>
                                    <p>
                                        There are many variations of passag of Lorm Ipsum available.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div
                                    className="single-box s-box-2 sb-box-01 mb-30 wow fadeInUp2 animated"
                                    data-wow-delay=".2s"
                                >
                                    <div className="single-box__icon icon_02 mb-25">
                                        <img src="/assets/img/icon/avatar-outline-alerted.svg" alt="" />
                                    </div>
                                    <h4 className="sub-title mb-10">Expert Trainers</h4>
                                    <p>
                                        There are many variations of passag of Lorm Ipsum available.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div
                                    className="single-box s-box-2 sb-box-02 mb-30 wow fadeInUp2 animated"
                                    data-wow-delay=".3s"
                                >
                                    <div className="single-box__icon icon_03 mb-25">
                                        <img src="/assets/img/icon/report.svg" alt="" />
                                    </div>
                                    <h4 className="sub-title mb-10">Free Trial Lesson</h4>
                                    <p>
                                        There are many variations of passag of Lorm Ipsum available.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*what-loking-for end*/}
                {/* testimonial-area start */}
                <section className="testimonial-area nav-style-chevron pt-150 pb-120 pt-md-95 pb-md-70 pt-xs-95 pb-xs-5">
                    <div className="container testimonial-bg">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="section-title section-title-2 text-center mb-60">
                                    <h5 className="bottom-line left-line mb-25 pl-40 pr-40">
                                        Our Testimonials
                                    </h5>
                                    <h2 className="mb-25">What people say About Us</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-9">
                                <div className="testimonial-active-full owl-carousel">
                                    <div className="item">
                                        <div className="testimonial-wrapper test-wrapper-full text-center mb-30">
                                            <div className="quote-icon mb-20">
                                                <img
                                                    src="/assets/img/icon/Quotemarks-right.svg"
                                                    alt="quote-icon"
                                                />
                                            </div>
                                            <h5>
                                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                                                di nonumy eirmod tempor invidunt ut labore et dolor magn
                                                aliq erat. Lorem ipsum dolor sit amet, consetetur sadipscing
                                                elitr, sed di nonumy eirmod tempor invidunt labore et dolore
                                                magn aliq erat.
                                            </h5>
                                            <div className="testimonial-authors__content mt-65">
                                                <h3 className="mb-15">Sara William</h3>
                                                <p>Content Writing</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="testimonial-wrapper test-wrapper-full text-center mb-30">
                                            <div className="quote-icon mb-20">
                                                <img
                                                    src="/assets/img/icon/Quotemarks-right.svg"
                                                    alt="quote-icon"
                                                />
                                            </div>
                                            <h5>
                                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                                                di nonumy eirmod tempor invidunt ut labore et dolor magn
                                                aliq erat. Lorem ipsum dolor sit amet, consetetur sadipscing
                                                elitr, sed di nonumy eirmod tempor invidunt labore et dolore
                                                magn aliq erat.
                                            </h5>
                                            <div className="testimonial-authors__content mt-65">
                                                <h3 className="mb-15">Sara William</h3>
                                                <p>Content Writing</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="testimonial-wrapper test-wrapper-full text-center mb-30">
                                            <div className="quote-icon mb-20">
                                                <img
                                                    src="/assets/img/icon/Quotemarks-right.svg"
                                                    alt="quote-icon"
                                                />
                                            </div>
                                            <h5>
                                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                                                di nonumy eirmod tempor invidunt ut labore et dolor magn
                                                aliq erat. Lorem ipsum dolor sit amet, consetetur sadipscing
                                                elitr, sed di nonumy eirmod tempor invidunt labore et dolore
                                                magn aliq erat.
                                            </h5>
                                            <div className="testimonial-authors__content mt-65">
                                                <h3 className="mb-15">Sara William</h3>
                                                <p>Content Writing</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="testimonial-authors-img-list pos-rel pr-20 pl-20">
                                    <img
                                        src="/assets/img/testimonial/04.png"
                                        alt=""
                                        className="testi t-img-01"
                                    />
                                    <img
                                        src="/assets/img/testimonial/05.png"
                                        alt=""
                                        className="testi t-img-02"
                                    />
                                    <img
                                        src="/assets/img/testimonial/06.png"
                                        alt=""
                                        className="testi t-img-03"
                                    />
                                    <img
                                        src="/assets/img/testimonial/07.png"
                                        alt=""
                                        className="testi t-img-04"
                                    />
                                    <img
                                        src="/assets/img/testimonial/08.png"
                                        alt=""
                                        className="testi t-img-05"
                                    />
                                    <img
                                        src="/assets/img/testimonial/09.png"
                                        alt=""
                                        className="testi t-img-06"
                                    />
                                    <img
                                        src="/assets/img/testimonial/10.png"
                                        alt=""
                                        className="testi t-img-08"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* testimonial-area end */}
                {/* faq-area start */}
                <section className="faq-area pos-rel gradient-bg pt-150 pb-120 pt-md-95 pb-md-90 pt-xs-95 pb-xs-90">
                    <div className="faq-blur-bg" />
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="faq-img-wrapper pos-rel mb-30">
                                    <img className="faq_01" src="/assets/img/faq/01.png" alt="" />
                                    <img
                                        className="faq_02"
                                        src="/assets/img/shape/faq-shape-01.svg"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="faq-que-list pl-75 mb-30">
                                    <div className="section-title section-title-2 mb-45">
                                        <h5 className="bottom-line left-line mb-25 pl-40">
                                            Frequently Ask Questions
                                        </h5>
                                        <h2 className="mb-25">Do you have questions?</h2>
                                        <p>
                                            There are many variations of passages of Lorem Ipsum
                                            available, but the majority have suffered alteration in some
                                            form, by injected humour.
                                        </p>
                                    </div>
                                    <div className="accordion" id="accordionExample">
                                        <div className="accordion-item mb-20">
                                            <h2 className="accordion-header" id="headingOne">
                                                <button
                                                    className="accordion-button"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#collapseOne"
                                                    aria-expanded="true"
                                                    aria-controls="collapseOne"
                                                >
                                                    If I face any issue then how can I contact with you?
                                                </button>
                                            </h2>
                                            <div
                                                id="collapseOne"
                                                className="accordion-collapse collapse show"
                                                aria-labelledby="headingOne"
                                                data-bs-parent="#accordionExample"
                                            >
                                                <div className="accordion-body">
                                                    An attack of the ague sent him home, and on recovery,
                                                    having resolved to attend a high school and fit himself to
                                                    become a teacher, he passed the next four years in a hard
                                                    struggle with poverty.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item mb-20">
                                            <h2 className="accordion-header" id="headingTwo">
                                                <button
                                                    className="accordion-button collapsed"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#collapseTwo"
                                                    aria-expanded="false"
                                                    aria-controls="collapseTwo"
                                                >
                                                    I need to know your best proffered Courses?
                                                </button>
                                            </h2>
                                            <div
                                                id="collapseTwo"
                                                className="accordion-collapse collapse"
                                                aria-labelledby="headingTwo"
                                                data-bs-parent="#accordionExample"
                                            >
                                                <div className="accordion-body">
                                                    An attack of the ague sent him home, and on recovery,
                                                    having resolved to attend a high school and fit himself to
                                                    become a teacher, he passed the next four years in a hard
                                                    struggle with poverty.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item mb-20">
                                            <h2 className="accordion-header" id="headingThree">
                                                <button
                                                    className="accordion-button collapsed"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#collapseThree"
                                                    aria-expanded="false"
                                                    aria-controls="collapseThree"
                                                >
                                                    How much money we need to give you?
                                                </button>
                                            </h2>
                                            <div
                                                id="collapseThree"
                                                className="accordion-collapse collapse"
                                                aria-labelledby="headingThree"
                                                data-bs-parent="#accordionExample"
                                            >
                                                <div className="accordion-body">
                                                    An attack of the ague sent him home, and on recovery,
                                                    having resolved to attend a high school and fit himself to
                                                    become a teacher, he passed the next four years in a hard
                                                    struggle with poverty.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="faq-btn pl-75 mt-50">
                                    <a href="faq.html" className="theme_btn">
                                        Ask Question
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* faq-area end */}
                {/* blog-area start */}
                <section className="blog-area">
                    <div className="blog-bg pl-100 pr-100 pt-150 pb-120 pt-md-95 pb-md-70 pt-xs-95 pb-xs-70">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xxl-6 col-xl-7 col-lg-8">
                                    <div className="section-title section-title-2 text-center mb-65">
                                        <h5 className="bottom-line left-line mb-25 pl-40 pr-40">
                                            Latest News
                                        </h5>
                                        <h2 className="mb-25">Lots of new Blogs &amp; News</h2>
                                        <p>
                                            There are many variations of passages of Lorem Ipsum
                                            available, but the majority have suffered alteration in some
                                            form, by injected humour.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    <div
                                        className="z-blogs mb-30 wow fadeInUp2 animated"
                                        data-wow-delay=".1s"
                                    >
                                        <div className="z-blogs__thumb mb-25">
                                            <a href="blog-details.html">
                                                <img src="/assets/img/blog/04.png" alt="blog-img" />
                                            </a>
                                        </div>
                                        <div className="z-blogs__content z-blogs__content-02">
                                            <div className="z-blogs__meta d-flex justify-content-between mb-10">
                                                <span>
                                                    <img
                                                        className="mr-5"
                                                        src="/assets/img/icon/date-line.svg"
                                                        alt=""
                                                    />
                                                    03/06/2021
                                                </span>
                                                <span>
                                                    <img
                                                        className="mr-5"
                                                        src="/assets/img/icon/box-comment-detail.svg"
                                                        alt=""
                                                    />
                                                    03 Comments
                                                </span>
                                            </div>
                                            <h4 className="sub-title mb-15">
                                                <a href="blog-details.html">
                                                    Education means inculcating moral values
                                                </a>
                                            </h4>
                                            <p className="mb-20">
                                                Lorem ipsum dolor sit amet, consetetur saps cing elitr, sed
                                                di nonumy eirmod temporinvid unt ut labore et dolore.
                                            </p>
                                            <a href="blog-details.html" className="blog_btn">
                                                Read More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div
                                        className="z-blogs mb-30 wow fadeInUp2 animated"
                                        data-wow-delay=".2s"
                                    >
                                        <div className="z-blogs__thumb mb-25">
                                            <a href="blog-details.html">
                                                <img src="/assets/img/blog/05.png" alt="blog-img" />
                                            </a>
                                        </div>
                                        <div className="z-blogs__content z-blogs__content-02">
                                            <div className="z-blogs__meta d-flex justify-content-between mb-10">
                                                <span>
                                                    <img
                                                        className="mr-5"
                                                        src="/assets/img/icon/date-line.svg"
                                                        alt=""
                                                    />
                                                    03/06/2021
                                                </span>
                                                <span>
                                                    <img
                                                        className="mr-5"
                                                        src="/assets/img/icon/box-comment-detail.svg"
                                                        alt=""
                                                    />
                                                    03 Comments
                                                </span>
                                            </div>
                                            <h4 className="sub-title mb-15">
                                                <a href="blog-details.html">
                                                    Tecnology means inculcating high values
                                                </a>
                                            </h4>
                                            <p className="mb-20">
                                                Lorem ipsum dolor sit amet, consetetur saps cing elitr, sed
                                                di nonumy eirmod temporinvid unt ut labore et dolore.
                                            </p>
                                            <a href="blog-details.html" className="blog_btn">
                                                Read More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div
                                        className="z-blogs mb-30 wow fadeInUp2 animated"
                                        data-wow-delay=".1s"
                                    >
                                        <div className="z-blogs__thumb mb-25">
                                            <a href="blog-details.html">
                                                <img src="/assets/img/blog/06.png" alt="blog-img" />
                                            </a>
                                        </div>
                                        <div className="z-blogs__content z-blogs__content-02">
                                            <div className="z-blogs__meta d-flex justify-content-between mb-10">
                                                <span>
                                                    <img
                                                        className="mr-5"
                                                        src="/assets/img/icon/date-line.svg"
                                                        alt=""
                                                    />
                                                    03/06/2021
                                                </span>
                                                <span>
                                                    <img
                                                        className="mr-5"
                                                        src="/assets/img/icon/box-comment-detail.svg"
                                                        alt=""
                                                    />
                                                    03 Comments
                                                </span>
                                            </div>
                                            <h4 className="sub-title mb-15">
                                                <a href="blog-details.html">
                                                    Courses means inculcating moral values
                                                </a>
                                            </h4>
                                            <p className="mb-20">
                                                Lorem ipsum dolor sit amet, consetetur saps cing elitr, sed
                                                di nonumy eirmod temporinvid unt ut labore et dolore.
                                            </p>
                                            <a href="blog-details.html" className="blog_btn">
                                                Read More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div
                                    className="col-lg-12 text-center mt-20 mb-30 wow fadeInUp2 animated"
                                    data-wow-delay=".1s"
                                >
                                    <a href="blog-details.html" className="theme_btn">
                                        Load More
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* blog-area end */}
            </main>
            {/*footer-area start*/}
            <footer className="footer-area footer-area-2 gradient-bg pt-135 pt-md-100 pt-xs-100">
                <div className="footer-blur-bg" />
                <div className="top-footer border-bot-2 pb-20 mb-60">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="footer__widget">
                                    <div className="footer-log mb-30">
                                        <a href="index.html" className="logo">
                                            <img src="/assets/img/logo/header_logo_one.svg" alt="" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 text-md-end">
                                <div className="footer__widget__two mb-30">
                                    <div className="social-media footer__social">
                                        <a href="#">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-twitter" />
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-linkedin-in" />
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-google-plus-g" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row pb-15">
                        <div
                            className="col-xl-3 col-lg-4 col-md-6  wow fadeInUp2 animated"
                            data-wow-delay=".1s"
                        >
                            <div className="footer__widget footer__widget__two mb-30">
                                <h4 className="sub-title mb-35">About Us</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consetetur sadip scing elitr, sed di
                                    nonumy eirmod temporinvi dunt ut labore lorem ipsum.
                                </p>
                                <h5 className="mail-to mt-25">info@example.com</h5>
                                <p className="phone-num mt-15">+00 235 695 58 , +0239564</p>
                            </div>
                        </div>
                        <div
                            className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp2 animated"
                            data-wow-delay=".3s"
                        >
                            <div className="footer__widget mb-30 pl-40 pl-md-0 pl-xs-0">
                                <h6 className="widget-title mb-35">Contact us</h6>
                                <ul className="fot-list">
                                    <li>
                                        <a href="#">info@example.com</a>
                                    </li>
                                    <li>
                                        <a href="#">+00 235 695 58</a>
                                    </li>
                                    <li>
                                        <a href="#">Terms &amp; Conditions</a>
                                    </li>
                                    <li>
                                        <a href="#">Privacy Policy</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div
                            className="col-xl-3 col-lg-4 col-md-6  wow fadeInUp2 animated"
                            data-wow-delay=".5s"
                        >
                            <div className="footer__widget mb-25 pl-65 pl-md-0 pl-xs-0">
                                <h6 className="widget-title mb-35">Quick Links</h6>
                                <ul className="fot-list">
                                    <li>
                                        <a href="about.html">About US</a>
                                    </li>
                                    <li>
                                        <a href="#">Explore Pages</a>
                                    </li>
                                    <li>
                                        <a href="#">Our Services</a>
                                    </li>
                                    <li>
                                        <a href="#">Destinations</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div
                            className="col-xl-3 col-lg-6 col-md-6  wow fadeInUp2 animated"
                            data-wow-delay=".7s"
                        >
                            <div className="footer__widget footer__widget__two mb-30">
                                <h6 className="widget-title mb-35">Subscribe Now</h6>
                                <div className="subscribe-form-box pos-rel">
                                    <form className="subscribe-form mb-15">
                                        <input type="text" placeholder="Email Here" />
                                    </form>
                                    <button className="sub_btn">Subscribe Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copy-right-area border-bot-top pt-45">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 mb-20">
                                <div className="copyright">
                                    <p>
                                        Copyright@ 2021 <a href="#">Zoomy</a>. All Rights Reserved
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 mb-20">
                                <div className="copyright text-lg-end">
                                    <ul className="fot-list">
                                        <li>
                                            <a href="#">Help</a>
                                        </li>
                                        <li>
                                            <a href="#">Privacy Policy</a>
                                        </li>
                                        <li>
                                            <a href="#">Terms &amp; Conditions</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/*footer-area end*/}
        </>


    )
}

export default App