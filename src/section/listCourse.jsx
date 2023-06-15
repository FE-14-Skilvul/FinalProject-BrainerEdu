import React, { useEffect, useState } from 'react';
import CourseCard from '../components/courseCard';
import axios from 'axios';
import { addData } from '../action';

const ListCourse = () => {
  const [kelas, setKelas] = useState([]);

  const API = import.meta.env.VITE_BASE_URL;
  useEffect(() => {
    const getDataKelas = async () => {
      const response = await axios.get(`${API}/kelas`);
      setKelas(response.data);
      addData(response.data);
    };
    getDataKelas();
  }, []);
  console.log(kelas);
  return (
    <>
      <section className="feature-course gradient-bg pt-150 pb-120 pt-md-95 pb-md-70 pt-xs-95 pb-xs-70">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-12">
              <div className="section-title section-title-2 text-center text-xl-start mb-50">
                <h2 className="mb-20">Kursus Populer Kami</h2>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12 text-center text-xl-end">
              <div className="portfolio-menu portfolio-menu-two mb-30">
                <button className="gf_btn active" data-filter="*">
                  Semua
                </button>
                <button className="gf_btn" data-filter=".cat1">
                  UI UX Design
                </button>
                <button className="gf_btn" data-filter=".cat2">
                  Pemrograman
                </button>
              </div>
            </div>
          </div>
          <div className="grid row">
            {kelas.map((data, index) => {
              return <CourseCard data={data} key={index} />;
            })}
          </div>
          <div className="row">
            <div
              className="col-xxl-12 mt-20 text-center mb-20 wow fadeInUp2 animated"
              data-wow-delay=".3s"
            >
              <a href="#" className="theme_btn">
                Explore More
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ListCourse;
