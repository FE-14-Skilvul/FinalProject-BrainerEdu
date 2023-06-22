import React, { useEffect, useState } from 'react';
import CourseCard from '../components/courseCard';
import axios from 'axios';
import { addData } from '../action';

const ListCourse = ({ kelas }) => {

  const [alldata, setAlldata] = useState(kelas);
  const filterkelas = (e) => {
    e.preventDefault()

    const filter = kelas.filter((kelasdata) => {
      return e.target.dataset.filter == 'Semua' ? kelasdata : kelasdata.kategori.split(",")[0] === e.target.dataset.filter
    })
    setAlldata(filter)

  }
  return (
    <>
      <section className="feature-course gradient-bg pt-150 pb-120 pt-md-95 pb-md-70 pt-xs-95 pb-xs-70">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-5 col-lg-12">
              <div className="section-title section-title-2 text-center text-xl-start mb-50">
                <h2 className="mb-20">Kursus Populer Kami</h2>
              </div>
            </div>
            <div className="col-xl-7 col-lg-12 text-center text-xl-end">
              <div className="portfolio-menu portfolio-menu-two mb-30">
                <button onClick={filterkelas} className="gf_btn active" data-filter="Semua">
                  Semua
                </button>
                <button onClick={filterkelas} className="gf_btn" data-filter="UI Design">
                  UI UX Design
                </button>
                <button onClick={filterkelas} className="gf_btn" data-filter="Coding">
                  Pemrograman
                </button>
                <button onClick={filterkelas} className="gf_btn" data-filter="Bahasa">
                  Bahasa
                </button>
                <button onClick={filterkelas} className="gf_btn" data-filter="Ekonomi">
                  Ekonomi
                </button>
              </div>
            </div>
          </div>
          <div className="grid row">
            {alldata.map((data, index) => {

              return <CourseCard type="img" data={data} key={index} />;
            })}
          </div>
          <div className="row">
            <div
              className="col-xxl-12 mt-20 text-center mb-20 wow fadeInUp2 animated"
              data-wow-delay=".3s"
            >
              <a href="#" className="theme_btn">
                Selengkapnya
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ListCourse;
