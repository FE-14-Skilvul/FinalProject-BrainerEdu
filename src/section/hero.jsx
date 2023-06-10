import React from 'react'

const Hero = () => {
    return (
        <><section className="slider-area slider-gradient-bg pt-180 pb-100 pb-xs-50">
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



                                    <img
                                        className="chose_05 wow fadeInRight animated"
                                        data-delay="1.5s"
                                        src="/assets/img/slider/jerome2.png"
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
        </section></>
    )
}

export default Hero