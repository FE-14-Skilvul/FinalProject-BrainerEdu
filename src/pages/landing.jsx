import Navbar from '../components/navbar'
import Hero from '../section/hero'
import KategoriCourse from '../section/kategoriCourse'
import ListCourse from '../section/listCourse'
import Footer from '../components/footer'
import Contact from '../section/contact'
import Testimoni from '../section/testimoni'
import Home from '../layout/home'
import About from '../section/about'
import Developer from '../components/developer'
import Partner from '../components/partner'

const Landing = () => {
    return (
        <>
            <Home>
                <Hero />
                <KategoriCourse />
                <ListCourse />
                <Testimoni />
                <Partner />
                <Developer />
                <Contact />
            </Home>
        </>
    )
}

export default Landing