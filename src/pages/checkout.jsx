import React, { useEffect, useState } from 'react';
import Home from '../layout/home';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Loading from '../components/loading';
import Star from '../components/star';
import Cookies from 'js-cookie';
import swal from 'sweetalert';

const Checkout = () => {
  // return;
  const [isLoading, setisLoading] = useState(true);
  const navigate = useNavigate();
  const [kelas, setKelas] = useState([]);
  const { id } = useParams();
  const cookie = Cookies.get('userLogin')
    ? JSON.parse(Cookies.get('userLogin'))
    : ''; console.log(cookie.saldo);
  const API = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    const getDataKelas = async () => {
      const response = await axios.get(`${API}/kelas/${id}`);
      setKelas(response.data);
      setisLoading(false);
    };
    getDataKelas();
  }, []);

  if (isLoading) return <Loading />
  console.log({ kelas });

  let kalimat = kelas.video[0].Link;
  let startIndex = kalimat.indexOf('&list=');
  let newKalimat = kalimat.substring(0, startIndex);
  const totalHarga = parseInt(cookie.saldo) - parseInt(kelas.harga)

  const transaksi = () => {

    if (totalHarga > 0) {
      try {
        const transaksiBerhasil = async () => {
          const res = await axios.put(`${API}/user/${cookie.id}`, { saldo: totalHarga.toString(), kelas: [{ id: kelas.id, uidKelas: kelas.uuid, nama: kelas.nama_kelas }] });
          Cookies.remove('userLogin');
          setCookie("userLogin", res.data);
          if (res.request.status === 200) swal('Transaksi Berhasil . Selamat Belajar !')
          navigate(`/course-detail/${id}`)
        };
        transaksiBerhasil()
        return;
      } catch (error) {
        console.log(error);
      }
    }

    swal('Saldo Anda belum mencukupi. Silahkan menghubungi Admin Untuk melakukan Pembayaran !')
  }
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
                        className="embed-responsive-item w-100"
                        src={`https://www.youtube.com/embed/${newKalimat}`}
                        allowFullScreen
                      ></iframe>
                    </div>
                    <h5 className="card-title">{kelas.nama_kelas}</h5>
                    <p className="card-text">{kelas.video[0].deskripsi}</p>
                    <p className="card-text">Rp. {parseInt(kelas.harga).toLocaleString('id-ID')}</p>
                    <Star />
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
                        <p className="title">Saldo</p>
                        <p className="value">Rp. {parseInt(cookie.saldo).toLocaleString('id-ID')}</p>
                      </div>
                      <div className="clear" />
                    </div>
                    <div className="item">
                      <div className="flex-container">
                        <p className="title">Harga kelas</p>
                        <p className="value">Rp. {parseInt(kelas.harga).toLocaleString('id-ID')}</p>
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
                    <hr className="hr-line" />

                    <div className="item">
                      <div className="flex-container">
                        <b className="title">Total Harga</b>
                        <b className=" title ">Rp. {totalHarga.toLocaleString('id-ID')}</b>
                      </div>
                      <div className="clear" />
                    </div>
                    {/* <hr className="hr-line" /> */}

                    <button onClick={transaksi} className='theme_btn free_btn w-100 d-flex justify-content-center my-3'>Bayar</button>

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
function setCookie(name, value) {
  const date = new Date();
  date.setTime(date.getTime() + (24 * 60 * 60 * 1000)); // set the expiration time to 1 day
  const expires = "expires=" + date.toUTCString();
  const myObjStr = JSON.stringify(value);
  document.cookie = name + "=" + myObjStr + ";" + expires + ";path=/";
}
export default Checkout;
