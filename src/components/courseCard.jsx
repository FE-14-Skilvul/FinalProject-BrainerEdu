import React from 'react'
import { Link } from 'react-router-dom'

const CourseCard = () => {
    return (
        <>
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
                            <Link to={`/course-detail/${1}`} >
                                Take Your Career to the Next Level Future
                            </Link>
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
        </>
    )
}

export default CourseCard