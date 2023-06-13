import React from 'react'
import CourseCard from '../components/courseCard'

const ListCourse = () => {
    return (
        <>
            <section className="feature-course gradient-bg pt-150 pb-120 pt-md-95 pb-md-70 pt-xs-95 pb-xs-70">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-12">
                            <div className="section-title section-title-2 text-center text-xl-start mb-50">

                                <h2 className="mb-20">Jalur Belajar</h2>
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
                        <CourseCard title="Ini judul" />
                        <CourseCard title="Ini juga judul" price={140} />
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
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
            </section></>
    )
}

export default ListCourse