import React from 'react';
import { Link } from 'react-router-dom';

const Help = () => {
  return (
    <>
      <section className="what-looking-for pt-145 pb-130 pt-md-95 pb-md-80 pt-xs-95 pb-xs-80">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center mb-55">
                <h2> Apa yang kamu butuhkan ? </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="what-box text-center mb-3">
                <div className="what-box__icon mb-30">
                  <img src="assets/img/icon/phone-operator.svg" alt="" />
                </div>
                <h3> Lihat Kelas </h3>
                <p>
                  Temukan kelas online menarik sesuai minatmu.Dapatkan
                  pengetahuan dan keterampilan baru dari kenyamanan rumahmu.
                  Mentor ahli, materi interaktif, dan pelajaran berkualitas
                  tinggi. Pilih dari beragam topik, seperti pemrograman,
                  akuntansi, dan bahasa. Mulailah perjalanan pembelajaran yang
                  mengubah hidupmu sekarang.Daftar dan temukan peluang baru!
                </p>
                <Link
                  to={'/course-detail/:id'}
                  className="theme_btn border_btn active"
                >
                  Selengkapnya
                </Link>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="what-box text-center mb-3">
                <div className="what-box__icon mb-30">
                  <img src="assets/img/icon/graduate.svg" alt="" />
                </div>
                <h3> Butuh Bantuan ? </h3>
                <p>
                  Temukan dukungan yang Anda butuhkan dalam perjalanan belajar
                  Anda dengan layanan bantuan kami. Apapun pertanyaan atau
                  kesulitan yang kamu hadapi, tim kami siap membantu. Tingkatkan
                  pemahamanmu, atasi tantangan, dan capai tujuanmu dengan
                  bantuan yang tepat. Jangan ragu untuk meminta bantuan, kami di
                  sini untuk membantu anda.
                </p>
                <Link to={'/contactus'} className="theme_btn border_btn">
                  Hubungi Kami
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Help;
