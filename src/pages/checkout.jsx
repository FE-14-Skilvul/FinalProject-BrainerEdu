import React from 'react';
import Home from '../layout/home';
import { Link } from 'react-router-dom';

const Checkout = () => {
  return (
    <>
      <Home>
        <section className="about-us-area pt-150 pb-120 pt-md-100 pb-md-70 pt-xs-100 pb-xs-70">
          <div className="container">
            <div className="row align-items-center mb-120">
              <div
                className="col"
                style={{ textAlign: 'center', marginTop: '30px' }}
              >
                <h1>Checkout Kelas</h1>
                <p style={{ marginTop: '20px', fontSize: '16px' }}>
                  Bergabunglah dengan langganan premium kami dan mulailah
                  mengeksplorasi pembelajaran praktis dan menarik bersama kami.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4 mb-3 mb-sm-0">
                <div className="card">
                  <div className="card-body">
                    <div className="embed-responsive embed-responsive-16by9">
                      <iframe
                        className="embed-responsive-item"
                        src="https://www.youtube.com/embed/VIDEO_ID"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <h5 className="card-title">Nama Kelas</h5>
                    <p className="card-text">Deskripsi kelas</p>
                    <p className="card-text">Rp. </p>
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
                      <a href="#">5 (1000+)</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-8">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title" style={{ fontSize: '20px' }}>
                      Manfaat
                    </h5>
                    <hr className="hr-line" />
                    <ul className="submenu mega-menu__sub-menu-box course__cat__list">
                      <li>
                        <a href="#">
                          <span>
                            <img
                              className="icon-01"
                              src="/assets/img/icon/certificate-line.svg"
                              alt=""
                            />
                            <img
                              className="icon-02"
                              src="/assets/img/icon/certificate-line.svg"
                              alt=""
                            />
                          </span>
                          Sertifikat
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span>
                            <img
                              className="icon-01"
                              src="/assets/img/icon/mobile.svg"
                              alt=""
                            />
                            <img
                              className="icon-02"
                              src="/assets/img/icon/mobile.svg"
                              alt=""
                            />
                          </span>
                          Konsultasi
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span>
                            <img
                              className="icon-01"
                              src="/assets/img/icon/newspaper.svg"
                              alt=""
                            />
                            <img
                              className="icon-02"
                              src="/assets/img/icon/newspaper.svg"
                              alt=""
                            />
                          </span>
                          Video
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span>
                            <img
                              className="icon-01"
                              src="/assets/img/icon/newspaper.svg"
                              alt=""
                            />
                            <img
                              className="icon-02"
                              src="/assets/img/icon/newspaper.svg"
                              alt=""
                            />
                          </span>
                          Materi
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span>
                            <img
                              className="icon-01"
                              src="/assets/img/icon/infinity.svg"
                              alt=""
                            />
                            <img
                              className="icon-02"
                              src="/assets/img/icon/infinity.svg"
                              alt=""
                            />
                          </span>
                          Akses Selamanya
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="col-sm-8 offset-sm-4 mb-3 mb-sm-0"
                style={{ marginTop: '30px' }}
              >
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title" style={{ fontSize: '20px' }}>
                      Detail Pembayaran
                    </h5>
                    <hr className="hr-line" />
                    <div className="item">
                      <div className="flex-container">
                        <p className="title">Harga kelas</p>
                        <p className="value">Rp 550,000</p>
                      </div>
                      <div className="clear" />
                    </div>
                    <div className="item">
                      <div className="flex-container">
                        <p className="title">Promo</p>
                        <p className="value">-</p>
                      </div>
                      <div className="clear" />
                    </div>
                    <div className="item">
                      <div className="flex-container">
                        <b className="title">Total Bayar</b>
                        <p className="value">Rp 550,000</p>
                      </div>
                      <div className="clear" />
                    </div>
                    <Link
                      to={'/course-detail/:id'}
                      className="theme_btn free_btn w-100 d-flex justify-content-center my-3"
                    >
                      Bayar
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Home>
    </>
  );
};

export default Checkout;
