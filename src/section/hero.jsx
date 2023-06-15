import React from 'react';
import IconImg from '../components/iconImg';
import Typewriter from 'typewriter-effect';

const Hero = () => {
  // var typed = new Typed(".mov", {
  //   strings: ["Backend Developer", "UI /UX Designer", "Software Engineer", "Frontend Developer"],
  //   typeSpeed: 50,
  //   backSpeed: 50,
  //   loop: true


  // })
  return (
    <>
      <section className="slider-area slider-gradient-bg pt-180 pb-100 pb-xs-50">
        <IconImg src={'01'} />
        <IconImg src={'02'} />
        <IconImg src={'03'} />
        <IconImg src={'04'} />
        <IconImg src={'05'} />
        <IconImg src={'06'} />

        <div className="main-slider">
          <div className="container">
            <div className="row">
              <div className="col-xl-7 col-lg-7">
                <div className="slider__content slider__content__02 pt-120">
                  <h1
                    className="main-title mb-40 wow fadeInUp2 animated"
                    data-wow-delay=".2s"
                  >
                    Tingkatkan keterampilan Anda melalui seri-seri disini
                    seperti <span style={{ color: "#2878eb" }}> <Typewriter
                      options={{
                        strings: ['Pemrograman', 'Ekonomi', 'Bahasa', "Keuangan", "Bisnis", "Hukum"],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                    </span>
                  </h1>
                  <h5
                    className="mb-35 wow fadeInUp2 animated"
                    data-wow-delay=".3s"
                  >
                    Apakah Anda mencari sumber daya pendidikan yang informatif, menarik, dan terpercaya? Anda telah sampai ke tempat yang tepat. Situs Pendidikan Terbaik adalah destinasi online yang didedikasikan untuk memberikan informasi yang relevan dan bermanfaat tentang dunia pendidikan.
                  </h5>

                 
                </div>
              </div>
              <div className="col-xl-5 col-lg-5">
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
                      src="/assets/img/slider/febby2.png"
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

    </>
  );
};

export default Hero;
