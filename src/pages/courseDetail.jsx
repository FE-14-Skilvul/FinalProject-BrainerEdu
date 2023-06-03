import { useNavigate, useParams } from "react-router-dom";
import Home from "../layout/home";

const CourseDetail = () => {
    const { id } = useParams();

    const myStyle = {
        marginTop: '200px'
    }
    return (
        <>
            <Home>
                <section
                    className="page-title-area d-flex align-items-end"
                // style={{ backgroundImage: "url(/assets/img/page-title-bg/01.jpg)" }}
                >
                    <div className="container ">
                        <div className="row align-items-end ">
                            <div className="col-lg-12 " style={myStyle}>
                                <div className="page-title-wrapper mb-50">
                                    <h1 className="page-title mb-25">Courses Details</h1>
                                    <div className="breadcrumb-list">
                                        <ul className="breadcrumb">
                                            <li>
                                                <a href="index.html">Home - Pages -</a>
                                            </li>
                                            <li>
                                                <a href="#">Courses Details</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="course-details-area pt-150 pb-120 pt-md-100 pb-md-70 pt-xs-100 pb-xs-70">
                    <div className="container">
                        <div className="row">
                            <div className="col-xxl-8 col-xl-7">
                                <div className="courses-details-wrapper mb-30">
                                    <h2 className="courses-title mb-30">
                                        Fundamentals Of Dslr Photography
                                    </h2>
                                    <h5>Photography Specialist By Jason Momoa</h5>
                                    <div
                                        className="course-details-img mb-30"
                                        style={{ backgroundImage: "url(/assets/img/course/details/01.jpg)" }}
                                    >
                                        <div className="video-wrapper">
                                            <a
                                                href="https://www.youtube.com/watch?v=7omGYwdcS04"
                                                className="popup-video"
                                            >
                                                <i className="fas fa-play" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="courses-tag-btn">
                                        <a href="#">Add to wishlist</a>
                                        <a href="#">Share</a>
                                        <a href="#">Gift this course</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-4 col-xl-5">
                                <div className="learn-area mb-30">
                                    <ul className="cart-list-tag d-sm-inline-flex align-items-center mb-50">
                                        <li>
                                            <div className="price-list">
                                                <h5>
                                                    <span>$123.65</span> <b className="sub-title">$93.65</b>
                                                </h5>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="cart-btn">
                                                <a className="theme_btn" href="#">
                                                    Add To Cart
                                                </a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="video-wrapper courses-cart-video">
                                                <a
                                                    href="https://www.youtube.com/watch?v=7omGYwdcS04"
                                                    className="popup-video"
                                                >
                                                    <i className="fas fa-play" />
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="learn-box">
                                        <h5>25 Lessons ( 3h 36m )</h5>
                                        <ul className="learn-list">
                                            <li>
                                                <a href="https://www.youtube.com/watch?v=7omGYwdcS04">
                                                    <span className="play-video">
                                                        <img
                                                            src="/assets/img/icon/video-player.svg"
                                                            alt="course-list"
                                                        />
                                                    </span>{" "}
                                                    01. Intro Video <span className="time float-end">4:02</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.youtube.com/watch?v=7omGYwdcS04">
                                                    <span className="play-video">
                                                        <i className="fal fa-lock-alt" />
                                                    </span>{" "}
                                                    02. How to Open Camera{" "}
                                                    <span className="time float-end">2:03</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.youtube.com/watch?v=7omGYwdcS04">
                                                    <span className="play-video">
                                                        <i className="fal fa-lock-alt" />
                                                    </span>{" "}
                                                    03. Balancing the Exposure{" "}
                                                    <span className="time float-end">5:03</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.youtube.com/watch?v=7omGYwdcS04">
                                                    <span className="play-video">
                                                        <i className="fal fa-lock-alt" />
                                                    </span>{" "}
                                                    04. Preparing to Shoot{" "}
                                                    <span className="time float-end">5:12</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.youtube.com/watch?v=7omGYwdcS04">
                                                    <span className="play-video">
                                                        <i className="fal fa-lock-alt" />
                                                    </span>{" "}
                                                    05. Studio Demonstration{" "}
                                                    <span className="time float-end">6:12</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.youtube.com/watch?v=7omGYwdcS04">
                                                    <span className="play-video">
                                                        <i className="fal fa-lock-alt" />
                                                    </span>{" "}
                                                    06. Shutter Speed <span className="time float-end">7:00</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.youtube.com/watch?v=7omGYwdcS04">
                                                    <span className="play-video">
                                                        <i className="fal fa-lock-alt" />
                                                    </span>{" "}
                                                    07. Aperture <span className="time float-end">6:05</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.youtube.com/watch?v=7omGYwdcS04">
                                                    <span className="play-video">
                                                        <i className="fal fa-lock-alt" />
                                                    </span>{" "}
                                                    08. ISO <span className="time float-end">30:00</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.youtube.com/watch?v=7omGYwdcS04">
                                                    <span className="play-video">
                                                        <i className="fal fa-lock-alt" />
                                                    </span>{" "}
                                                    09. Editing Tips &amp; Tricks{" "}
                                                    <span className="time float-end">20:03</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.youtube.com/watch?v=7omGYwdcS04">
                                                    <span className="play-video">
                                                        <i className="fal fa-lock-alt" />
                                                    </span>{" "}
                                                    10. Advance Photography{" "}
                                                    <span className="time float-end">40:36</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.youtube.com/watch?v=7omGYwdcS04">
                                                    <span className="play-video">
                                                        <i className="fal fa-lock-alt" />
                                                    </span>{" "}
                                                    10. Advance Photography-2{" "}
                                                    <span className="time float-end">40:36</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.youtube.com/watch?v=7omGYwdcS04">
                                                    <span className="play-video">
                                                        <i className="fal fa-lock-alt" />
                                                    </span>{" "}
                                                    10. Advance Photography-3{" "}
                                                    <span className="time float-end">40:36</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.youtube.com/watch?v=7omGYwdcS04">
                                                    <span className="play-video">
                                                        <i className="fal fa-lock-alt" />
                                                    </span>{" "}
                                                    10. Advance Photography-4{" "}
                                                    <span className="time float-end">40:36</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-6 col-lg-7">
                                <div className="project-details mb-65">
                                    <h2 className="courses-title mb-30">Photography Learning A-Z</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed di
                                        nonumy eirmod tempor invidunt ut labore et dolore magn aliq
                                        erat.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed di
                                        nonumy eirmod tempor invidunt ut labore et dolore magn aliq erat.
                                    </p>
                                    <ul className="seller-rating d-md-inline-flex align-items-center mt-20 mb-10">
                                        <li>
                                            <a href="#" className="theme_btn mb-10">
                                                Bestseller
                                            </a>
                                        </li>
                                        <li>
                                            <div className="star-icon mb-10">
                                                <a href="#">
                                                    <i className="fas fa-star" />
                                                </a>
                                                <a href="#">
                                                    <i className="fas fa-star" />
                                                </a>
                                                <a href="#">
                                                    <i className="fas fa-star" />
                                                </a>
                                                <a href="#">
                                                    <i className="fas fa-star" />
                                                </a>
                                                <a href="#">
                                                    <i className="fas fa-star" />
                                                </a>
                                                <a href="#">4.8 ( 256,384)</a>
                                            </div>
                                        </li>
                                        <li>
                                            <h5 className="mb-10">Enroll 360,349</h5>
                                        </li>
                                    </ul>
                                    <h5 className="mb-25">
                                        <span>Created by</span> Jason Momoa &amp; Uxaction Photography team
                                    </h5>
                                    <div className="date-lang">
                                        <span>
                                            <b>Date :</b> 31/05/2020
                                        </span>
                                        <span>
                                            <b>Language :</b> English
                                        </span>
                                    </div>
                                </div>
                                <div className="meet-our-teacher mb-65">
                                    <h2 className="courses-title mb-30">Meet Your Teacher</h2>
                                    <div className="teachers-content mb-25">
                                        <img
                                            className="teacher_01"
                                            src="/assets/img/course/details/teacher.png"
                                            alt=""
                                        />
                                        <div className="teachers-content__text">
                                            <h5>Jason Momoa</h5>
                                            <p>Photography Specialist</p>
                                        </div>
                                    </div>
                                    <p className="mb-20">
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed di
                                        nonumy eirmod tempor invidunt ut labore et dolore magn aliq
                                        erat.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed di
                                        nonumy eirmod tempor invidunt ut labore et dolore magn aliq erat.
                                    </p>
                                    <p className="mb-20">
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed di
                                        nonumy eirmod tempor invidunt ut labore et dolore magn aliq
                                        erat.Lorem ipsum dolor.
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed di
                                        nonumy eirmod tempor invidunt ut labore et dolore magn aliq
                                        erat.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed di
                                        nonumy.
                                    </p>
                                </div>
                                <div className="skill-area">
                                    <h2 className="courses-title mb-35">Related Skills</h2>
                                    <div className="courses-tag-btn">
                                        <a href="#">Photography</a>
                                        <a href="#">Outdoor</a>
                                        <a href="#">Indoor Photography</a>
                                        <a href="#">DSLR</a>
                                        <a href="#">Creative</a>
                                        <a href="#">Camera</a>
                                        <a href="#">Professional</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-5">
                                <div className="courses-ingredients">
                                    <h2 className="corses-title mb-30">Course Includes</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed di
                                        nonumy eirmod tempor invidunt ut labore et dolore.
                                    </p>
                                    <ul className="courses-item mt-25">
                                        <li>
                                            <img src="/assets/img/icon/video.svg" alt="" /> 4 hours on-demand
                                            video
                                        </li>
                                        <li>
                                            <img src="/assets/img/icon/newspaper.svg" alt="" /> 73 articles
                                        </li>
                                        <li>
                                            <img src="/assets/img/icon/download.svg" alt="" /> 650+
                                            downloadable resources
                                        </li>
                                        <li>
                                            <img src="/assets/img/icon/infinity.svg" alt="" /> Full Lifetime
                                            Access
                                        </li>
                                        <li>
                                            <img src="/assets/img/icon/mobile.svg" alt="" /> Access on mobile
                                            and TV or any devices
                                        </li>
                                        <li>
                                            <img src="/assets/img/icon/certificate-line.svg" alt="" />{" "}
                                            Certificate of completion
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Home>
        </>
    )
}

export default CourseDetail