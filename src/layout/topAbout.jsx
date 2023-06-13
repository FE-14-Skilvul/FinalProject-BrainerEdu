import Motivation from "../section/motivation"
import Testimoni from "../section/testimoni"

const TopAbout = () => {
    return (
        <>
            <section className="about-us-area pt-150 pb-120 pt-md-100 pb-md-70 pt-xs-100 pb-xs-70">
                <div className="container">
                    <Motivation />
                    <Testimoni />
                </div>
            </section>
        </>
    )
}

export default TopAbout