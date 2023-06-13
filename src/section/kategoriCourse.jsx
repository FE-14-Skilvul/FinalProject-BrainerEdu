import React from 'react'

const KategoriCourse = () => {
    return (
        <> <section className="course-categories pt-150 pb-140 pt-md-95 pb-md-90 pt-xs-95 pb-xs-90">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-8">
                        <div className="section-title section-title-2 text-center mb-50">

                            <h2 className="mb-20">Menu Pilihan Belajar</h2>
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
                                    Sains
                                    <span className="arrow-box">

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
                                    Bisnis
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
                                    Pemrogramman
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
                                    UI/UX Design
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
                                    Hukum
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
                                    Matematika
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
        </section></>
    )
}

export default KategoriCourse