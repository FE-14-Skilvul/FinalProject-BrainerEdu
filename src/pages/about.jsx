import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Home from '../layout/home';
import Developer from '../components/developer';
import Mentor from '../components/mentor';
import Partner from '../components/partner';
import Choseus from '../section/choseus';
import Help from '../section/help';

const About = () => {
  return (
    <>
      <Home>
        {' '}
        {/*about-us-area start*/}{' '}
        <section className="about-us-area pt-150 pb-120 pt-md-100 pb-md-70 pt-xs-100 pb-xs-70">
          <div className="container">
            <div className="row align-items-center mb-120">
              <div className="col-lg-7">
                <div className="about__img__box mb-60">
                  <img
                    className="about-main-thumb pl-110"
                    src="assets/img/slider/maudy.png"
                    width={621}
                    height={701}
                    alt="about-img"
                  />
                  <img
                    className="about-img about_01"
                    src="assets/img/about/men.png"
                    width={250}
                    height={250}
                    alt="about-img"
                  />
                  <img
                    className="about-img about_02"
                    src="assets/img/about/women.png"
                    width={250}
                    height={250}
                    alt="about-img"
                  />
                  <img
                    className="about-img about_03"
                    src="assets/img/slider/earth-bg.svg"
                    alt="about-img"
                  />
                </div>{' '}
              </div>{' '}
              <div className="col-lg-5">
                <div className="about-wrapper">
                  <div className="section-title section-title-4 mb-60">
                    <h2 className="mb-20">
                      Menguasai keterampilan baru dan ubah pendidikan anda
                      menjadi petualangan inspiratif yang penuh semangat!
                    </h2>{' '}
                    <p className="mb-20">
                      Brainer Education adalah web berfokus dibidang
                      pembelajaran gratis dan berbayar dengan metode online.{' '}
                      Menawarkan video belajar dan latihan yang dapat memudahkan
                      pembelajaran para penggunanya. Melalui platform ini kita
                      bisa belajar tanpa ketinggalan dan bisa menuntunkan minat
                      yang diinginkan.{' '}
                    </p>
                  </div>{' '}
                </div>{' '}
              </div>{' '}
            </div>{' '}
            <div className="row pl-75 pr-75 pr-lg-0 pr-md-0 pr-xs-0 pl-lg-0 pl-md-0 pl-xs-0">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="counters text-center mb-30">
                  <h2>
                    <span className="counter"> 50 </span>+{' '}
                  </h2>{' '}
                  <h5> Mentor Terbaik </h5>{' '}
                </div>{' '}
              </div>{' '}
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="counters count-1 text-center mb-30">
                  <h2>
                    <span className="counter"> 100 </span>+{' '}
                  </h2>{' '}
                  <h5> Materi Pembelajaran </h5>{' '}
                </div>{' '}
              </div>{' '}
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="counters count-2 text-center mb-30">
                  <h2>
                    <span className="counter"> 8000 </span>+{' '}
                  </h2>{' '}
                  <h5> Peserta </h5>{' '}
                </div>{' '}
              </div>{' '}
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="counters count-3 text-center mb-30">
                  <h2>
                    <span className="counter"> 100 </span>+{' '}
                  </h2>{' '}
                  <h5> Video Pembelajaran </h5>{' '}
                </div>{' '}
              </div>{' '}
            </div>{' '}
          </div>{' '}
        </section>{' '}
        {/*about-us-area end*/}
        <Developer />
        <Partner />
        <Choseus />
        <Mentor />
        <Help />
      </Home>{' '}
    </>
  );
};

export default About;
