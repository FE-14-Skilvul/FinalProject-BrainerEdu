import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Hero from './pages/hero'
import KategoriCourse from './pages/kategoriCourse'
import ListCourse from './pages/listCourse'
import Footer from './components/footer'
import Contact from './pages/contact'
import Testimoni from './pages/testimoni'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div id="preloader">
                <div className="preloader">
                    <span />
                    <span />
                </div>
            </div>
            <Navbar />

            <div className="body-overlay" />
            <main>
                <Hero />
                <KategoriCourse />
                <ListCourse />
                <Testimoni />
            </main>
            <Contact />
            <Footer />

        </>


    )
}

export default App