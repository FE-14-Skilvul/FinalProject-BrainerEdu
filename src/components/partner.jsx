import React from 'react';
import { Link } from 'react-router-dom';

const Partner = () => {
  return (
    <>
      <section className="course-categories pt-150 pb-115 pt-md-95 pb-md-65 pt-xs-95 pb-xs-65">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8">
              <div className="section-title section-title-3 text-center mb-60">
                <h5 className="mb-25">Challenge Partner</h5>
                <h2 className="mb-20">
                  Skilvul Product Innovation
                  <span className="bottom-line">Pendidikan</span>
                </h2>
                <p>
                  Membuat dan menemukan solusi digital dalam upaya membantu
                  masyarakat dan pemerintah untuk mengatasi permasalahan
                  pendidikan di Indonesia.
                </p>
              </div>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-sm-2 online__course__cat">
            <div className="col">
              <Link to={'https://skilvul.com'} target="_blank">
                <div
                  className="courses_link mb-30 wow fadeInUp2 animated"
                  data-wow-delay=".1s"
                >
                  <img
                    className="icon-01 mb-35"
                    src="assets/img/logo/skilvul.png"
                    alt=""
                  />
                  <h4 className="sub-title mb-25">Skilvul</h4>
                  <a href="https://skilvul.com">
                    <img
                      className="arrows-icon"
                      src="assets/img/icon/arrow-right.svg"
                      alt="arrow-right"
                    />
                  </a>
                </div>
              </Link>
            </div>
            <div className="col">
              <Link to={'https://kampusmerdeka.kemdikbud.go.id/'} target="_blank">
                <div
                  className="courses_link mb-30 wow fadeInUp2 animated"
                  data-wow-delay=".2s"
                >
                  <img
                    className="icon-01 mb-35"
                    src="/assets/img/logo/km.png"
                    alt=""
                  />
                  <h4 className="sub-title mb-25">Kampus Merdeka</h4>
                  <a href="https://kampusmerdeka.kemdikbud.go.id/">
                    <img
                      className="arrows-icon"
                      src="/assets/img/icon/arrow-right.svg"
                      alt="arrow-right"
                    />
                  </a>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Partner;
