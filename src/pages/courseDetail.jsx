import { Link, useNavigate, useParams } from 'react-router-dom';
import Home from '../layout/home';
import { useEffect, useRef, useState } from 'react';
import Button from '../components/button';
import axios from 'axios';
import Loading from '../components/loading';
import Rating from '../components/rating';
import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';

const CourseDetail = () => {
  const { id } = useParams();
  const kelasCache = useSelector((data) => (data ? data[id - 2] : undefined));
  // const kelasCache = useSelector((data) => (data ? data.filter((obj) => obj.id === id) : undefined));
  const [kelas, setKelas] = useState([]); // ini
  const [isLoading, setisLoading] = useState(true);
  const [videoKelas, setvideoKelas] = useState([]);
  const API = import.meta.env.VITE_BASE_URL;
  const isnotLogin = !Cookies.get('userLogin');
  // console.log(kelasCache);
  // return
  useEffect(() => {
    const getDataKelas = async () => {
      const response = await axios.get(`${API}/kelas/${id}`);
      setKelas(response.data);
      setvideoKelas(response.data.video);
      setisLoading(false);
    };

    if (!kelasCache) {
      getDataKelas();
    } else {
      setKelas(kelasCache);
      setvideoKelas(kelasCache.video);
      setisLoading(false);
    }
  }, []);

  const myStyle = {
    marginTop: '200px',
  };
  const videoRef = useRef(null);

  const changeVideo = (val) => {
    videoRef.current.src = '';
    videoRef.current.src = ispaid ? `https://www.youtube.com/embed/${val}` : `https://www.youtube.com/embed/${newKalimat}`;
  };

  if (isLoading) return <Loading />;
  let kalimat = videoKelas[0].Link;
  let startIndex = kalimat.indexOf('&list=');
  let newKalimat = kalimat.substring(0, startIndex);

  const durasikelas = durasiKelas(videoKelas);
  let ispaid = false
  if (!isnotLogin) {
    const user = Cookies.get('userLogin') ? JSON.parse(Cookies.get('userLogin')) : undefined;
    ispaid = user.kelas.some((objs) => objs.uidKelas === kelas.uuid)
    console.log(user.kelas);
  }


  return (
    <>
      <Home>
        <section
          className="course-details-area pt-150 pb-120 pt-md-100 pb-md-70 pt-xs-100 pb-xs-70"
          id="learn-bok"
        >
          <div className="container">
            <div className="row">
              <div className="col-xxl-8 col-xl-7">
                <div className="courses-details-wrapper mb-30">
                  <h2 className="courses-title mb-30">{videoKelas[0].judul}</h2>
                  <h5>
                    {kelas.nama_kelas} Oleh {kelas.mentor.nama}
                  </h5>
                  <iframe
                    ref={videoRef}
                    className="course-details-img mb-30"
                    // style={{ backgroundImage: "url(/assets/img/course/details/01.jpg)" }}
                    // src={`https://www.youtube.com/embed/${'tgbNymZ7vqY'}`}
                    // src={`https://www.youtube.com/embed/${videoKelas[0].Link.replace(/&index=1/g, "")}`}
                    src={`https://www.youtube.com/embed/${newKalimat}`}
                  ></iframe>

                  <div className="courses-tag-btn">
                    <a href="#">Add to wishlist</a>
                    <a href="#">Share</a>
                    <a href="#">Gift this course</a>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-5">
                <div className="learn-area mb-30">
                  <ul className="cart-list-tag align-items-center mb-45 d-flex justify-content-end">
                    <li>
                      <div className="price-list">
                        <h5>
                          {!ispaid && <b className="sub-title">Rp. {parseInt(kelas.harga).toLocaleString('id-ID')}</b>}
                        </h5>
                      </div>
                    </li>
                  </ul>
                  <div
                    className="courses-ingredients w-100"
                    style={{ marginLeft: '0' }}
                  >
                    <div className="learn-box">
                      <h5>
                        {videoKelas.length} Sesi ( {durasikelas} )
                      </h5>
                      <ul
                        className="learn-list "
                        style={{ marginRight: '0', height: '360px' }}
                      >
                        {videoKelas.map((video, index) => {
                          let startIndexloop = video.Link.indexOf('&list=');
                          let newKalimatloop = video.Link.substring(
                            0,
                            startIndexloop,
                          );

                          return (
                            <li
                              key={index}
                              kata={newKalimatloop}
                              onClick={() => changeVideo(newKalimatloop)}
                            >
                              <a
                                className="d-flex align-items-top justify-content-between"
                                href="#learn-bok"
                              >
                                <span className="play-video d-flex">
                                  {
                                    index === 0 ? <img src="/assets/img/icon/video-player.svg" alt="course-list" style={{ paddingRight: '10px' }} /> : ispaid ? <img src="/assets/img/icon/video-player.svg" alt="course-list" style={{ paddingRight: '10px' }} /> : <i
                                      className="fal fa-lock-alt"
                                      style={{ paddingRight: '10px' }}
                                    />

                                    // icon(index, ispaid)
                                    // !ispaid &&
                                    //   index == 0
                                    //   ? <img src="/assets/img/icon/video-player.svg" alt="course-list" style={{ paddingRight: '10px' }} /> : <i
                                    //     className="fal fa-lock-alt"
                                    //     style={{ paddingRight: '10px' }}
                                    //   />
                                  }

                                  <p> {index + 1 + '. ' + video.judul}</p>
                                </span>

                                <span className="time float-end">
                                  {video.durasi}
                                </span>
                              </a>
                            </li>
                          );
                        })}
                      </ul>

                      {!ispaid ? <Link
                        to={isnotLogin ? '/login' : `/checkout/${kelas.id}`}
                        className="theme_btn free_btn w-100 d-flex justify-content-center my-3"
                      >
                        Gabung Kelas
                      </Link> : <><br /><br /></>}
                      {/* <Link></Link> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-6 col-lg-7">
                <div className="project-details mb-65">
                  <h2 className="courses-title mb-30">{kelas.nama_kelas}</h2>
                  <p>{kelas.deskripsi}</p>

                  <Rating />
                  <h5 className="mb-25">
                    <span>Oleh :</span> {kelas.mentor.nama}
                  </h5>
                  <div className="date-lang">
                    <span>
                      <b>Bahasa :</b> {kelas.bahasa}
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-5">
                <div className="courses-ingredients">
                  <h2 className="corses-title mb-30">Fitur Kelas</h2>

                  <ul className="courses-item mt-25">
                    <li>
                      <img src="/assets/img/icon/video.svg" alt="" /> Video
                      sesuai permintaan
                    </li>
                    <li>
                      <img src="/assets/img/icon/newspaper.svg" alt="" />
                      Artikel
                    </li>
                    <li>
                      <img src="/assets/img/icon/download.svg" alt="" />
                      Konsultasi Dengan Mentor berpengalaman
                    </li>
                    <li>
                      <img src="/assets/img/icon/infinity.svg" alt="" /> Akses
                      Penuh Seumur Hidup
                    </li>
                    <li>
                      <img src="/assets/img/icon/mobile.svg" alt="" /> Akses di
                      ponsel dan TV atau perangkat apa pun
                    </li>
                    <li>
                      <img src="/assets/img/icon/certificate-line.svg" alt="" />
                      Sertifikat kelulusan
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Home>
    </>
  );
};

const durasiKelas = (datavideo) => {
  let totalDetik = 0;
  datavideo.forEach((objek) => {
    const arrvideo = objek.durasi.split(':');
    console.log(arrvideo.length);
    const panjangarr = arrvideo.length;
    const hasil =
      panjangarr === 3 ? 'Jam' : panjangarr === 2 ? 'Menit' : 'Detik';
    if (hasil == 'Jam') {
      totalDetik +=
        parseInt(arrvideo[0]) * 3600 +
        parseInt(arrvideo[1]) * 60 +
        parseInt(arrvideo[2]);
    }
    if (hasil == 'Menit') {
      totalDetik += parseInt(arrvideo[0]) * 60 + parseInt(arrvideo[1]);
    }
    if (hasil == 'Detik') {
      totalDetik += parseInt(arrvideo[0]);
    }
  });
  const jamTotal = Math.floor(totalDetik / 3600);
  const sisaDetik = totalDetik % 3600;
  const menitTotal = Math.floor(sisaDetik / 60);
  const detikTotal = sisaDetik % 60;
  const totalWaktuFormat =
    jamTotal == 0
      ? `${menitTotal} menit`
      : `${jamTotal} jam ${menitTotal} menit `;

  return totalWaktuFormat;
};


export default CourseDetail;
