import React from 'react'
import { Link } from 'react-router-dom'

const CourseCard = ({ data, index }) => {
    return (
        <>
            <div className="col-lg-4 col-md-6 grid-item cat2 cat3" key={index}>
                <div className="z-gallery z-gallery-two mb-30">
                    <div className="z-gallery__thumb mb-20">
                        <Link to={`/course-detail/${data.id}`} >
                            <img
                                className="img-fluid"
                                src={data.thumnail}
                                alt=""
                            />
                        </Link>

                    </div>
                    <div className="z-gallery__content pos-rel">
                        <div className="course__tag course__tag__two mb-15 d-flex align-items-center justify-content-between">
                            <div>
                                <span>Science</span>
                                <span>Lab</span>
                            </div>

                            <p>Rp. {parseInt(data.harga).toLocaleString("id-ID")} </p>
                            {/* <a className="price-tag" href="instructor-details.html">
                                139$
                            </a> */}
                        </div>
                        <h4 className="sub-title mb-20">
                            {/* <Link to={`/course-detail/${data.nama_kelas.toLowerCase().replace(/\s+/g, "-").replace(/\//g, "-")}`} > */}
                            <Link to={`/course-detail/${data.id}`} >
                                {data.nama_kelas}
                            </Link>
                        </h4>
                        <div className="course__meta d-flex align-items-center justify-content-between mb-15">
                            <span>
                                <img
                                    className="icon"
                                    src="/assets/img/icon/time.svg"
                                    alt="course-meta"
                                />
                                12 Pertemuan
                            </span>
                            <span>
                                <img
                                    className="icon"
                                    src="/assets/img/icon/bar-chart.svg"
                                    alt="course-meta"
                                />
                                Lanjutan
                            </span>
                        </div>
                        <p className="mb-20" style={{ overflowY: "auto", height: "100px" }}>
                            {data.deskripsi}
                        </p>
                        <div className="course__authors  d-xl-flex align-items-center justify-content-between">
                            <div className="course__authors-box d-flex align-items-center">
                                <img src={data.mentor.avatar} width={45} height={45} alt="" style={{ borderRadius: "50%" }} />
                                <div className="course__authors-box-text ml-10">
                                    <h5>{data.mentor.nama}</h5>
                                    <span>{data.mentor.pekerjaan}</span>
                                </div>
                            </div>

                            <p>
                                <span>6593+</span> Students
                            </p>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default CourseCard