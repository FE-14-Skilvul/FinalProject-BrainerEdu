import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './rating';

const CourseCard = ({ type, data, index }) => {
  let kalimat = data.video[0].Link;
  let startIndex = kalimat.indexOf('&list=');
  let newKalimat = kalimat.substring(0, startIndex);

  return (
    <>
      <div className="col-lg-4 col-md-6 grid-item cat2 cat3" key={index}>
        <div className="z-gallery z-gallery-two mb-30">
          <div className="z-gallery__thumb mb-20">
            <Link to={`/course-detail/${data.id}`}>
              <img className="img-fluid" src={data.thumnail} alt="" />
              {/* {type == 'video' && <iframe
                                ref={videoRef}
                                className="course-details-img mb-30"
                                // style={{ backgroundImage: "url(/assets/img/course/details/01.jpg)" }}
                                // src={`https://www.youtube.com/embed/${'tgbNymZ7vqY'}`}
                                // src={`https://www.youtube.com/embed/${videoKelas[0].Link.replace(/&index=1/g, "")}`}
                                src={`https://www.youtube.com/embed/${newKalimat}`}
                            >
                                </iframe>} */}
            </Link>
          </div>
          <div className="z-gallery__content pos-rel">
            <div className="course__tag course__tag__two mb-15 d-flex align-items-center justify-content-between">
              <div>
                <span>Coding</span>
                <span>UI Design</span>
              </div>

              <p>Rp. {parseInt(data.harga).toLocaleString('id-ID')} </p>
            </div>
            <h4 className="sub-title mb-20">
              {/* <Link to={`/course-detail/${data.nama_kelas.toLowerCase().replace(/\s+/g, "-").replace(/\//g, "-")}`} ></Link> */}
              <Link to={`/course-detail/${data.id}`}>{data.nama_kelas}</Link>
            </h4>
            <div className="course__meta d-flex align-items-center justify-content-between mb-15">
              <span>
                <img
                  className="icon"
                  src="/assets/img/icon/time.svg"
                  alt="course-meta"
                />
                {data.video.length} Pertemuan
              </span>
              {/* <span>
                                <img
                                    className="icon"
                                    src="/assets/img/icon/bar-chart.svg"
                                    alt="course-meta"
                                />
                                Lanjutan
                            </span> */}
            </div>
            <p className="mb-20" style={{ overflowY: 'auto', height: '100px' }}>
              {data.deskripsi}
            </p>
            <div className="course__authors  d-xl-flex align-items-center justify-content-between">
              <div className="course__authors-box d-flex align-items-center">
                <img
                  src={data.mentor.avatar}
                  width={45}
                  height={45}
                  alt=""
                  style={{ borderRadius: '50%' }}
                />
                <div className="course__authors-box-text ml-10">
                  <h5>{data.mentor.nama}</h5>
                  <span>{data.mentor.pekerjaan}</span>
                </div>
              </div>

              <Rating />
              {/* <p>
                                <span>

                                </span>
                            </p> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseCard;
