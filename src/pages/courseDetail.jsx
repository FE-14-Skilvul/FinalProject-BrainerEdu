import { Link, useNavigate, useParams } from 'react-router-dom';
import Home from '../layout/home';
import { useEffect, useRef, useState } from 'react';
import Button from '../components/button';
import axios from 'axios';

const CourseDetail = () => {
  const { id } = useParams();
  const [kelas, setKelas] = useState([]); // ini
  const [isLoading, setisLoading] = useState(true);
  const [videoKelas, setvideoKelas] = useState([]);
  const API = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    const getDataKelas = async () => {
      const response = await axios.get(`${API}/kelas/${id}`);
      setKelas(response.data);
      setvideoKelas(response.data.video);
      setisLoading(false);
    };
    getDataKelas();
  }, []);

  const myStyle = {
    marginTop: '200px',
  };
  const videoRef = useRef(null);

  const changeVideo = (val) => {
    console.log(val);
    videoRef.current.src = '';
    videoRef.current.src = `https://www.youtube.com/embed/${val}`;
  };

  if (isLoading) return <p>Loading...</p>;
  // console.log(videoKelas[0].Link);
  let kalimat = videoKelas[0].Link;
  let startIndex = kalimat.indexOf('&list=');
  let newKalimat = kalimat.substring(0, startIndex);

  console.log(newKalimat);
  // let newKalimat = kalimat.substring(0, startIndex);

  // console.log(newKalimat);

  return (
    <>
      <Home>
        <section
          className="page-title-area d-flex align-items-end"
          // style={{ backgroundImage: "url(/assets/img/page-title-bg/01.jpg)" }}
        >
          <div className="container ">
            <div className="row align-items-end ">
              <div className="col-lg-12 " style={myStyle}>
                <div className="page-title-wrapper mb-50">
                  <h1 className="page-title mb-25">Courses Details</h1>
                  <div className="breadcrumb-list">
                    <ul className="breadcrumb">
                      <li>
                        <a href="index.html">Home - Pages -</a>
                      </li>
                      <li>
                        <a href="#">Courses Details</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
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
                          <b className="sub-title">
                            Rp. {parseInt(kelas.harga).toLocaleString('id-ID')}
                          </b>
                        </h5>
                      </div>
                    </li>
                  </ul>
                  <div
                    className="courses-ingredients w-100"
                    style={{ marginLeft: '0' }}
                  >
                    <div className="learn-box">
                      <h5>{videoKelas.length} Sesi ( 3h 36m )</h5>
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
                                  <i
                                    className="fal fa-lock-alt"
                                    style={{ paddingRight: '10px' }}
                                  />
                                  <p> {index + 1 + '. ' + video.judul}</p>
                                </span>

                                <span className="time float-end">
                                  {video.durasi}
                                </span>
                              </a>
                            </li>
                          );
                        })}
                        {/* <li>
                                                <a href="#learn-bok">
                                                    <span className="play-video">
                                                        <img
                                                            src="/assets/img/icon/video-player.svg"
                                                            alt="course-list"
                                                        />
                                                    </span>
                                                    01. Intro Video <span className="time float-end">4:02</span>
                                                </a>
                                            </li>
                                            <li  >
                                                <a href="#learn-bok">
                                                    <span className="play-video">
                                                        <i className="fal fa-lock-alt" />
                                                    </span>
                                                    02. How to Open Camera
                                                    <span className="time float-end">2:03</span>
                                                </a>
                                            </li> */}
                      </ul>
                      {/* <Button text={""} /> */}
                      <Link
                        to={'/register'}
                        className="theme_btn free_btn w-100 d-flex justify-content-center my-3"
                      >
                        Gabung Kelas
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-6 col-lg-7">
                <div className="project-details mb-65">
                  <h2 className="courses-title mb-30">
                    Photography Learning A-Z
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    di nonumy eirmod tempor invidunt ut labore et dolore magn
                    aliq erat.Lorem ipsum dolor sit amet, consetetur sadipscing
                    elitr, sed di nonumy eirmod tempor invidunt ut labore et
                    dolore magn aliq erat.
                  </p>
                  <ul className="seller-rating d-md-inline-flex align-items-center mt-20 mb-10">
                    <li>
                      <a href="#" className="theme_btn mb-10">
                        Bestseller
                      </a>
                    </li>
                    <li>
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
                        <a href="#">4.8 ( 256,384)</a>
                      </div>
                    </li>
                    <li>
                      <h5 className="mb-10">Enroll 360,349</h5>
                    </li>
                  </ul>
                  <h5 className="mb-25">
                    <span>Created by</span> Jason Momoa &amp; Uxaction
                    Photography team
                  </h5>
                  <div className="date-lang">
                    <span>
                      <b>Date :</b> 31/05/2020
                    </span>
                    <span>
                      <b>Language :</b> English
                    </span>
                  </div>
                </div>
                <div className="meet-our-teacher mb-65">
                  <h2 className="courses-title mb-30">Meet Your Teacher</h2>
                  <div className="teachers-content mb-25">
                    <img
                      className="teacher_01"
                      src="/assets/img/course/details/teacher.png"
                      alt=""
                    />
                    <div className="teachers-content__text">
                      <h5>Jason Momoa</h5>
                      <p>Photography Specialist</p>
                    </div>
                  </div>
                  <p className="mb-20">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    di nonumy eirmod tempor invidunt ut labore et dolore magn
                    aliq erat.Lorem ipsum dolor sit amet, consetetur sadipscing
                    elitr, sed di nonumy eirmod tempor invidunt ut labore et
                    dolore magn aliq erat.
                  </p>
                  <p className="mb-20">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    di nonumy eirmod tempor invidunt ut labore et dolore magn
                    aliq erat.Lorem ipsum dolor.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    di nonumy eirmod tempor invidunt ut labore et dolore magn
                    aliq erat.Lorem ipsum dolor sit amet, consetetur sadipscing
                    elitr, sed di nonumy.
                  </p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-5">
                <div className="courses-ingredients">
                  <h2 className="corses-title mb-30">Course Includes</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    di nonumy eirmod tempor invidunt ut labore et dolore.
                  </p>
                  <ul className="courses-item mt-25">
                    <li>
                      <img src="/assets/img/icon/video.svg" alt="" /> 4 hours
                      on-demand video
                    </li>
                    <li>
                      <img src="/assets/img/icon/newspaper.svg" alt="" /> 73
                      articles
                    </li>
                    <li>
                      <img src="/assets/img/icon/download.svg" alt="" /> 650+
                      downloadable resources
                    </li>
                    <li>
                      <img src="/assets/img/icon/infinity.svg" alt="" /> Full
                      Lifetime Access
                    </li>
                    <li>
                      <img src="/assets/img/icon/mobile.svg" alt="" /> Access on
                      mobile and TV or any devices
                    </li>
                    <li>
                      <img src="/assets/img/icon/certificate-line.svg" alt="" />
                      Certificate of completion
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

export default CourseDetail;
