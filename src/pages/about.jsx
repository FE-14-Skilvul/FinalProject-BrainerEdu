import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Home from '../layout/home';

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
                    src="assets/img/slider/about.png"
                    width={651}
                    height={721}
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
        {/*about-us-area end*/}{' '}
        <section className="course-instructor nav-style-two pt-150 pb-120 pt-md-95 pb-md-70 pt-xs-95 pb-xs-70">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="section-title text-center mb-60">
                  <h2 className="mb-25">Developer</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                <div className="z-instructors text-center mb-30">
                  <div className="z-instructors__thumb mb-15">
                    <img src="assets/img/slider/arya.png" alt="" />
                    <div className="social-media">
                      <a href="#">
                        <i className="fab fa-linkedin" />
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fab fa-instagram" />
                      </a>
                      <a href="#">
                        <i className="fab fa-youtube" />
                      </a>
                    </div>
                  </div>
                  <div className="z-instructors__content">
                    <h4 className="sub-title mb-10">
                      <a href="#">Muhammad Arya</a>
                    </h4>
                    <p>Front-End Developer</p>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                <div className="z-instructors text-center mb-30">
                  <div className="z-instructors__thumb mb-15">
                    <img src="assets/img/slider/tajudin.png" alt="" />
                    <div className="social-media">
                      <a href="https://www.linkedin.com/in/tajuddin-al-anshori-049596250">
                        <i className="fab fa-linkedin" />
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="https://www.instagram.com/tajuddin.mhmd_">
                        <i className="fab fa-instagram" />
                      </a>
                      <a href="https://youtube.com/@tajuddinalanshori6257">
                        <i className="fab fa-youtube" />
                      </a>
                    </div>
                  </div>
                  <div className="z-instructors__content">
                    <h4 className="sub-title mb-10">
                      <a href="#">Mochammad Tajudin</a>
                    </h4>
                    <p>Front-End Developer</p>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                <div className="z-instructors text-center mb-30">
                  <div className="z-instructors__thumb mb-15">
                    <img src="assets/img/slider/wawa.png" alt="" />
                    <div className="social-media">
                      <a href="https://www.linkedin.com/in/nazwaseptyas">
                        <i className="fab fa-linkedin" />
                      </a>
                      <a href="https://twitter.com/nzwasalsa_">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="https://www.instagram.com/nazwaw_">
                        <i className="fab fa-instagram" />
                      </a>
                      <a href="#">
                        <i className="fab fa-youtube" />
                      </a>
                    </div>
                  </div>
                  <div className="z-instructors__content">
                    <h4 className="sub-title mb-10">
                      <a href="#">Nazwa Septya</a>
                    </h4>
                    <p>Front-End Developer</p>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                <div className="z-instructors text-center mb-30">
                  <div className="z-instructors__thumb mb-15">
                    <img src="assets/img/slider/dimas.png" alt="" />
                    <div className="social-media">
                      <a href="https://www.linkedin.com/in/dimas-pratomo-mukti-057065263/">
                        <i className="fab fa-linkedin" />
                      </a>
                      <a href="https://twitter.com/muktivip">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="https://www.instagram.com/dimasvmse_">
                        <i className="fab fa-instagram" />
                      </a>
                      <a href="https://www.youtube.com/@muktivip">
                        <i className="fab fa-youtube" />
                      </a>
                    </div>
                  </div>
                  <div className="z-instructors__content">
                    <h4 className="sub-title mb-10">
                      <a href="#">Dimas Pratomo</a>
                    </h4>
                    <p>Front-End Developer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="course-categories pt-150 pb-115 pt-md-95 pb-md-65 pt-xs-95 pb-xs-65">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-8">
                <div className="section-title section-title-3 text-center mb-60">
                  <h5 className="mb-25">Challenge Partner</h5>
                  <h2 className="mb-20">
                    Skilvul Product Innovation{' '}
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
              </div>
              <div className="col">
                <div
                  className="courses_link mb-30 wow fadeInUp2 animated"
                  data-wow-delay=".2s"
                >
                  <img
                    className="icon-01 mb-35"
                    src="assets/img/logo/km.png"
                    alt=""
                  />
                  <h4 className="sub-title mb-25">Kampus Merdeka</h4>
                  <a href="https://kampusmerdeka.kemdikbud.go.id/">
                    <img
                      className="arrows-icon"
                      src="assets/img/icon/arrow-right.svg"
                      alt="arrow-right"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
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
                        Brainer Education merupakan pilihan yang ideal bagi
                        mereka yang mencari platform pembelajaran online yang
                        komprehensif, interaktif, dan terpercaya. Dengan
                        berbagai keunggulan dan fitur yang ditawarkan, Brainer
                        Education menjadi solusi yang efektif untuk meningkatkan
                        pengetahuan dan keterampilan di bidang programming,
                        akuntansi, dan bahasa.{' '}
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
        <section className="course-instructor nav-style-two pt-150 pb-120 pt-md-95 pb-md-70 pt-xs-95 pb-xs-70">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="section-title text-center mb-60">
                  <h2 className="mb-25">Mentor</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                <div className="z-instructors text-center mb-30">
                  <div className="z-instructors__thumb mb-15">
                    <img
                      src="assets/img/instructor/tiana.png"
                      width={305}
                      height={350}
                      alt=""
                    />
                    <div className="social-media">
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fab fa-instagram" />
                      </a>
                      <a href="#">
                        <i className="fab fa-youtube" />
                      </a>
                    </div>
                  </div>
                  <div className="z-instructors__content">
                    <h4 className="sub-title mb-10">
                      <a href="#">Tiana Evelyn</a>
                    </h4>
                    <p>UI/UX Designer</p>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                <div className="z-instructors text-center mb-30">
                  <div className="z-instructors__thumb mb-15">
                    <img
                      src="assets/img/instructor/berlian.png"
                      width={305}
                      height={350}
                      alt=""
                    />
                    <div className="social-media">
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fab fa-instagram" />
                      </a>
                      <a href="#">
                        <i className="fab fa-youtube" />
                      </a>
                    </div>
                  </div>
                  <div className="z-instructors__content">
                    <h4 className="sub-title mb-10">
                      <a href="#">Berlian Aura</a>
                    </h4>
                    <p>Bahasa Inggris</p>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                <div className="z-instructors text-center mb-30">
                  <div className="z-instructors__thumb mb-15">
                    <img
                      src="assets/img/instructor/ferdi.png"
                      width={305}
                      height={350}
                      alt=""
                    />
                    <div className="social-media">
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fab fa-instagram" />
                      </a>
                      <a href="#">
                        <i className="fab fa-youtube" />
                      </a>
                    </div>
                  </div>
                  <div className="z-instructors__content">
                    <h4 className="sub-title mb-10">
                      <a href="#">Ferdiansyah</a>
                    </h4>
                    <p>Accounting</p>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                <div className="z-instructors text-center mb-30">
                  <div className="z-instructors__thumb mb-15">
                    <img
                      src="assets/img/instructor/kianna.png"
                      width={305}
                      height={350}
                      alt=""
                    />
                    <div className="social-media">
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fab fa-instagram" />
                      </a>
                      <a href="#">
                        <i className="fab fa-youtube" />
                      </a>
                    </div>
                  </div>
                  <div className="z-instructors__content">
                    <h4 className="sub-title mb-10">
                      <a href="#">Kianna Milen</a>
                    </h4>
                    <p>Acounting</p>
                  </div>
                </div>
              </div>

              <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                <div className="z-instructors text-center mb-30">
                  <div className="z-instructors__thumb mb-15">
                    <img
                      src="assets/img/instructor/nolan.png"
                      width={305}
                      height={350}
                      alt=""
                    />
                    <div className="social-media">
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fab fa-instagram" />
                      </a>
                      <a href="#">
                        <i className="fab fa-youtube" />
                      </a>
                    </div>
                  </div>
                  <div className="z-instructors__content">
                    <h4 className="sub-title mb-10">
                      <a href="#">Nolan Nokidis</a>
                    </h4>
                    <p>Back-end Developer</p>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                <div className="z-instructors text-center mb-30">
                  <div className="z-instructors__thumb mb-15">
                    <img
                      src="assets/img/instructor/roger.png"
                      width={305}
                      height={350}
                      alt=""
                    />
                    <div className="social-media">
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fab fa-instagram" />
                      </a>
                      <a href="#">
                        <i className="fab fa-youtube" />
                      </a>
                    </div>
                  </div>
                  <div className="z-instructors__content">
                    <h4 className="sub-title mb-10">
                      <a href="#">Roger Levin</a>
                    </h4>
                    <p>Front-End Developer</p>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                <div className="z-instructors text-center mb-30">
                  <div className="z-instructors__thumb mb-15">
                    <img
                      src="assets/img/instructor/12.jpg"
                      width={305}
                      height={350}
                      alt=""
                    />
                    <div className="social-media">
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fab fa-instagram" />
                      </a>
                      <a href="#">
                        <i className="fab fa-youtube" />
                      </a>
                    </div>
                  </div>
                  <div className="z-instructors__content">
                    <h4 className="sub-title mb-10">
                      <a href="#">Aditya Rony</a>
                    </h4>
                    <p>UI/UX Designer</p>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                <div className="z-instructors text-center mb-30">
                  <div className="z-instructors__thumb mb-15">
                    <img src="assets/img/instructor/04.jpg" alt="" />
                    <div className="social-media">
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fab fa-instagram" />
                      </a>
                      <a href="#">
                        <i className="fab fa-youtube" />
                      </a>
                    </div>
                  </div>
                  <div className="z-instructors__content">
                    <h4 className="sub-title mb-10">
                      <a href="#">Ricky</a>
                    </h4>
                    <p>Bahasa Inggris</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="about-section-wrapper pos-rel gradient-bg">
          <div className="what-blur-shape-one" />
          <div className="what-blur-shape-two" /> {/*what-loking-for start*/}{' '}
          <section className="what-looking-for pt-145 pb-130 pt-md-95 pb-md-80 pt-xs-95 pb-xs-80">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="section-title text-center mb-55">
                    <h2> Apa yang kamu butuhkan ? </h2>{' '}
                  </div>{' '}
                </div>{' '}
              </div>{' '}
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="what-box text-center mb-3">
                    <div className="what-box__icon mb-30">
                      <img src="assets/img/icon/phone-operator.svg" alt="" />
                    </div>{' '}
                    <h3> Lihat Kelas </h3>{' '}
                    <p>
                      Temukan kelas online menarik sesuai minatmu.Dapatkan
                      pengetahuan dan keterampilan baru dari kenyamanan rumahmu.{' '}
                      Mentor ahli, materi interaktif, dan pelajaran berkualitas
                      tinggi. Pilih dari beragam topik, seperti pemrograman,
                      akuntansi, dan bahasa. Mulailah perjalanan pembelajaran
                      yang mengubah hidupmu sekarang.Daftar dan temukan peluang
                      baru!
                    </p>{' '}
                    <Link
                      to={'/course-detail/:id'}
                      className="theme_btn border_btn active"
                    >
                      Selengkapnya{' '}
                    </Link>{' '}
                  </div>{' '}
                </div>{' '}
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="what-box text-center mb-3">
                    <div className="what-box__icon mb-30">
                      <img src="assets/img/icon/graduate.svg" alt="" />
                    </div>{' '}
                    <h3> Butuh Bantuan ? </h3>{' '}
                    <p>
                      Temukan dukungan yang Anda butuhkan dalam perjalanan
                      belajar Anda dengan layanan bantuan kami. Apapun
                      pertanyaan atau kesulitan yang kamu hadapi, tim kami siap
                      membantu. Tingkatkan pemahamanmu, atasi tantangan, dan
                      capai tujuanmu dengan bantuan yang tepat. Jangan ragu
                      untuk meminta bantuan, kami di sini untuk membantu anda.{' '}
                    </p>{' '}
                    <Link to={'/contactus'} className="theme_btn border_btn">
                      Hubungi Kami{' '}
                    </Link>{' '}
                  </div>{' '}
                </div>{' '}
              </div>{' '}
            </div>{' '}
          </section>{' '}
          {/*what-loking-for end*/}{' '}
        </div>{' '}
      </Home>{' '}
    </>
  );
};

export default About;
