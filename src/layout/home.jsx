import Footer from "../components/footer"
import Navbar from "../components/navbar"

const Home = ({ children }) => {
    return (
        <>
            <Navbar />
            <div className="body-overlay" />
            <main>
                {children}
            </main>

            <Footer />
        </>
    )
}

export default Home