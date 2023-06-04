import Navbar from '../components/navbar'
import Hero from '../section/hero'
import KategoriCourse from '../section/kategoriCourse'
import ListCourse from '../section/listCourse'
import Footer from '../components/footer'
import Contact from '../section/contact'
import Testimoni from '../section/testimoni'
import Home from '../layout/home'
import About from '../section/about'
const Landing = () => {
    return (
        <>
            <Home>
                <Hero />
                <KategoriCourse />
                <ListCourse />
                <Testimoni />
                <Contact />
            </Home>
        </>
    )
}

export default Landing