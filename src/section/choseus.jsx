import React from 'react';

const Choseus = () => {
  return (
    <>
      <section className="why-chose-us">
        <div className="why-chose-us-bg pt-150 pb-175 pt-md-95 pb-md-90 pt-xs-95 pb-xs-90">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-7 col-lg-7">
                <div className="chose-img-wrapper mb-50 pos-rel">
                  <div className="feature tag_01">
                    <span>
                      <img src="assets/img/icon/shield-check.svg" alt="" />
                    </span>{' '}
                    Keamanan Terjamin{' '}
                  </div>{' '}
                  <div className="feature tag_02">
                    <span>
                      <img src="assets/img/icon/catalog.svg" alt="" />
                    </span>{' '}
                    120 + Materi Pembelajaran{' '}
                  </div>{' '}
                  <div className="feature tag_03">
                    <span>
                      <i className="fal fa-check" />
                    </span>{' '}
                    Pembelajaran Berkualitas{' '}
                  </div>{' '}
                  <div className="video-wrapper">
                    <a
                      href="https://www.youtube.com/watch?v=viHILXVY_eU"
                      className="popup-video"
                    >
                      <i className="fas fa-play" />
                    </a>{' '}
                  </div>{' '}
                  <div className="img-bg pos-rel">
                    <img
                      className="chose_05 pl-70 pl-lg-0 pl-md-0 pl-xs-0"
                      src="assets/img/slider/slide04.png"
                      width={530}
                      height={671}
                      alt="Chose-img"
                      style={{ marginLeft: '25px' }}
                    />
                  </div>{' '}
                  <img
                    className="chose chose_06"
                    src="assets/img/shape/dot-box3.svg"
                    alt="Chose-img"
                  />
                </div>{' '}
              </div>{' '}
              <div className="col-xl-5 col-lg-5">
                <div className="chose-wrapper pl-25 pl-lg-0 pl-md-0 pl-xs-0">
                  <div
                    className="section-title mb-30 wow fadeInUp2 animated"
                    datawowdelay=".1s"
                  >
                    <h2 className="mb-25">
                      {' '}
                      Mengapa Harus Memilih Brainer Education ?{' '}
                    </h2>{' '}
                    <p>
                      Brainer Education merupakan pilihan yang ideal bagi mereka
                      yang mencari platform pembelajaran online yang
                      komprehensif, interaktif, dan terpercaya. Dengan berbagai
                      keunggulan dan fitur yang ditawarkan, Brainer Education
                      menjadi solusi yang efektif untuk meningkatkan pengetahuan
                      dan keterampilan di bidang programming, akuntansi, dan
                      bahasa.{' '}
                    </p>{' '}
                  </div>{' '}
                  <ul
                    className="text-list mb-40 wow fadeInUp2 animated"
                    datawowdelay=".2s"
                  >
                    <li> Video Belajar yang Berkualitas </li>{' '}
                    <li> Kelas Gratis dan Berbayar </li>{' '}
                    <li> Metode Pembelajaran Online </li>{' '}
                    <li> Beragam Materi Pembelajaran </li>{' '}
                  </ul>{' '}
                </div>{' '}
              </div>{' '}
            </div>{' '}
          </div>{' '}
        </div>{' '}
      </section>
    </>
  );
};

export default Choseus;
