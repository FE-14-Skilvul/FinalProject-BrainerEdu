import Navbar from '../components/navbar';
import Hero from '../section/hero';
import KategoriCourse from '../section/kategoriCourse';
import ListCourse from '../section/listCourse';
import Footer from '../components/footer';
import Contact from '../section/contact';
import Testimoni from '../section/testimoni';
import Home from '../layout/home';
import Developer from '../components/developer';
import Partner from '../components/partner';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Loading from '../components/loading';

const Landing = () => {
  const [kelas, setKelas] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  const API = import.meta.env.VITE_BASE_URL;
  useEffect(() => {
    const getDataKelas = async () => {
      const response = await axios.get(`${API}/kelas`);
      setKelas(response.data);
      setisLoading(false);

    };
    getDataKelas();
  }, []);

  if (isLoading) return <Loading />

  return (
    <>
      <Home>
        <Hero />
        <Testimoni />
        <KategoriCourse />
        <ListCourse kelas={kelas} />
        <Partner />
        <Contact />
      </Home>
    </>
  );
};

export default Landing;
