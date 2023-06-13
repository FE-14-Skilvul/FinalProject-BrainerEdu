import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Home from '../layout/home';

const Skillpath = () => {
  return (
    <>
      <Home><section className="blog-area pt-150 pb-120 pt-md-95 pb-md-70 pt-xs-95 pb-xs-70">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-xxl-6 col-xl-7 col-lg-8">
        <div className="section-title section-title-3 text-center mb-65 pr-30 pl-30">
          <h2 className="mb-25">
            Jalur Belajur<span className="bottom-line">BRAINER EDUCATION</span>
          </h2>
          <p>
          Tetaplah lapar akan pengetahuan dan rasa ingin tahu. 
          Dunia ini penuh dengan peluang dan wawasan yang menunggu 
          untuk ditemukan. Jadi, teruslah belajar dan eksplorasi.
          </p>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-4 col-md-6">
        <div
          className="z-blogs z-blogs-3 mb-30 wow fadeInUp2 animated"
          data-wow-delay=".1s"
        >
          <div className="z-blogs__thumb mb-25">
            <a href="">
              <img src="assets/img/blog/36.png" alt="blog-img" />
            </a>
          </div>
          <div className="z-blogs__content">
            <div className="blog__tags mb-20">
              <span>Akutansi</span>
              <span>Perkantoran</span>
            </div>
            <h4 className="sub-title mb-15">
              <a href="">
              Ekonomi
              </a>
            </h4>
            <p className="mb-20">
            Jalur ini meliputi kuliah di jurusan ekonomi atau bisnis di perguruan tinggi. Di sini, 
            Anda akan mempelajari berbagai konsep ekonomi, termasuk teori ekonomi, kebijakan moneter, kebijakan fiskal, dan sebagainya.
            </p>
            <div className="z-blogs__meta d-flex justify-content-between mb-10">
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div
          className="z-blogs z-blogs-3 mb-30 wow fadeInUp2 animated"
          data-wow-delay=".2s"
        >
          <div className="z-blogs__thumb mb-25">
            <a href="">
              <img src="assets/img/blog/37.png" alt="blog-img" />
            </a>
          </div>
          <div className="z-blogs__content">
            <div className="blog__tags mb-20">
              <span>Inggris</span>
              <span>Mandarin</span>
            </div>
            <h4 className="sub-title mb-15">
              <a href="">
              Bahasa
              </a>
            </h4>
            <p className="mb-20">
            Pendidikan formal di lembaga pendidikan: Jalur ini meliputi belajar bahasa Inggris di sekolah atau perguruan tinggi. Di sini, 
            Anda akan mempelajari keterampilan bahasa Inggris, membaca, menulis, mendengarkan, dan berbicara.
            </p>
            <div className="z-blogs__meta d-flex justify-content-between mb-10">
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div
          className="z-blogs z-blogs-3 mb-30 wow fadeInUp2 animated"
          data-wow-delay=".3s"
        >
          <div className="z-blogs__thumb mb-25">
            <a href="">
              <img src="assets/img/blog/38.png" alt="blog-img" />
            </a>
          </div>
          <div className="z-blogs__content">
            <div className="blog__tags mb-20">
              <span>HTML</span>
              <span>JavaScirpt</span>
            </div>
            <h4 className="sub-title mb-15">
              <a href="">
              Pemrograman
              </a>
            </h4>
            <p className="mb-20">
            Pendidikan formal di perguruan tinggi: Jalur ini meliputi kuliah di jurusan Ilmu Komputer atau Teknik 
            Informatika di perguruan tinggi. Di sini,akan mempelajari konsep dasar pemrograman, algoritma, dan bahasa pemrograman.
            </p>
            <div className="z-blogs__meta d-flex justify-content-between mb-10">
            
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div
        className="col-lg-12 text-center mt-20 mb-30 wow fadeInUp2 animated"
        data-wow-delay=".4s"
      >
       
      </div>
    </div>
  </div>
</section>

<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-5 gx-4 online__course__cat">
  <div className="col">
    <div
      className="courses_link mb-30 wow fadeInUp2 animated"
      data-wow-delay=".1s"
    >
      <img
        className="icon-01 mb-35"
        src="assets/img/icon/dna-color.svg"
        alt=""
      />
      <h4 className="sub-title mb-25">HTML</h4>
      <a href="">
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
      <img className="icon-01 mb-35" src="assets/img/icon/chart-a.svg" alt="" />
      <h4 className="sub-title mb-25">Akuntasi</h4>
      <a href="">
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
      data-wow-delay=".3s"
    >
      <img className="icon-01 mb-35" src="assets/img/icon/code-a.svg" alt="" />
      <h4 className="sub-title mb-25">Java Script</h4>
      <a href="">
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
      data-wow-delay=".4s"
    >
      <img className="icon-01 mb-35" src="assets/img/icon/cube-a.svg" alt="" />
      <h4 className="sub-title mb-25">Bahasa Inggris</h4>
      <a href="">
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
      data-wow-delay=".5s"
    >
      <img
        className="icon-01 mb-35"
        src="assets/img/icon/design-a.svg"
        alt=""
      />
      <h4 className="sub-title mb-25">UI / UX Desain</h4>
      <a href="">
        <img
          className="arrows-icon"
          src="assets/img/icon/arrow-right.svg"
          alt="arrow-right"
        />
      </a>
    </div>
  </div>
</div>

</Home>
    </>
  );
};

export default Skillpath;

