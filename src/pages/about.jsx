import { useNavigate, useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import Home from "../layout/home";

const About = () => {
    return ( 
    < >
            <Home > { /*about-us-area start*/} <section className="about-us-area pt-150 pb-120 pt-md-100 pb-md-70 pt-xs-100 pb-xs-70" >

                <div className="container" >

                    <div className="row align-items-center mb-120" >

                        <div className="col-lg-7" >

                            <div className="about__img__box mb-60" >

                                <img className="about-main-thumb pl-110"
                                    src="assets/img/slider/01.png"
                                    alt="about-img" />


                                <img className="about-img about_01"
                                    src="assets/img/about/01.png"
                                    alt="about-img" />


                                <img className="about-img about_02"
                                    src="assets/img/about/02.png"
                                    alt="about-img" />

                                <
                                    img className="about-img about_03"
                                    src="assets/img/slider/earth-bg.svg"
                                    alt="about-img" /
                                >
                                <
        /div> <
        /div> <
        div className="col-lg-5" >
                                    <
        div className="about-wrapper" >
                                        <
        div className="section-title section-title-4 mb-60" >
                                            <
        h5 className="bottom-line mb-25" > Tentang Kami < /h5> <
        h2 className="mb-20" >
                                                    Experience the thrill of mastering new skills and transform your education into an exhilarating adventure!
                                                    <
        /h2> <
        p className="mb-20" >
                                                        Brainer Education adalah web berfokus dibidang pembelajaran gratis dan berbayar dengan metode online. {' '}
                                                        Menawarkan video belajar dan latihan yang dapat memudahkan pembelajaran para penggunanya. {' '}
                                                        Melalui platform ini kita bisa belajar tanpa ketinggalan dan bisa menuntunkan minat yang diinginkan. <
        /p>

                                                        <
        /div> <
        /div> <
        /div> <
        /div> <
        div className="row pl-75 pr-75 pr-lg-0 pr-md-0 pr-xs-0 pl-lg-0 pl-md-0 pl-xs-0" >
                                                            <
        div className="col-lg-3 col-md-6 col-sm-6" >
                                                                <
        div className="counters text-center mb-30" >
                                                                    <
        h2 >
                                                                        <
        span className="counter" > 100 < /span>+ <
        /h2> <
        h5 > Specialist Good Teachers < /h5> <
        /div> <
        /div> <
        div className="col-lg-3 col-md-6 col-sm-6" >
                                                                                    <
        div className="counters count-1 text-center mb-30" >
                                                                                        <
        h2 >
                                                                                            <
        span className="counter" > 1000 < /span>+ <
        /h2> <
        h5 > Online Learning Courses < /h5> <
        /div> <
        /div> <
        div className="col-lg-3 col-md-6 col-sm-6" >
                                                                                                        <
        div className="counters count-2 text-center mb-30" >
                                                                                                            <
        h2 >
                                                                                                                <
        span className="counter" > 13654 < /span>+ <
        /h2> <
        h5 > Online - Offline Students < /h5> <
        /div> <
        /div> <
        div className="col-lg-3 col-md-6 col-sm-6" >
                                                                                                                            <
        div className="counters count-3 text-center mb-30" >
                                                                                                                                <
        h2 >
                                                                                                                                    <
        span className="counter" > 365 < /span>+ <
        /h2> <
        h5 > Special Awards Winning < /h5> <
        /div> <
        /div> <
        /div> <
        /div> <
        /section> { /*about-us-area end*/} <
        section className="why-chose-us" >
                                                                                                                                                <
        div className="why-chose-us-bg pt-150 pb-175 pt-md-95 pb-md-90 pt-xs-95 pb-xs-90" >
                                                                                                                                                    <
        div className="container" >
                                                                                                                                                        <
        div className="row align-items-center" >
                                                                                                                                                            <
        div className="col-xl-7 col-lg-7" >
                                                                                                                                                                <
        div className="chose-img-wrapper mb-50 pos-rel" >

                                                                                                                                                                    <
        div className="feature tag_01" >
                                                                                                                                                                        <
        span >
                                                                                                                                                                            <
                                                                                                                                                                                img src="assets/img/icon/shield-check.svg"
                                                                                                                                                                                alt="" />
                                                                                                                                                                            <
        /span>{" "}
                                                                                                                                                                            Keamanan Terjamin <
        /div> <
        div className="feature tag_02" >
                                                                                                                                                                                <
        span >
                                                                                                                                                                                    <
                                                                                                                                                                                        img src="assets/img/icon/catalog.svg"
                                                                                                                                                                                        alt="" />
                                                                                                                                                                                    <
        /span>{" "}
                                                                                                                                                                                    120 + Materi Pembelajaran <
        /div> <
        div className="feature tag_03" >
                                                                                                                                                                                        <
        span >
                                                                                                                                                                                            <
                                                                                                                                                                                                i className="fal fa-check" />
                                                                                                                                                                                            <
        /span>{" "}
                                                                                                                                                                                            Pembelajaran Berkualitas <
        /div> <
        div className="video-wrapper" >
                                                                                                                                                                                                <
        a href="https://www.youtube.com/watch?v=7omGYwdcS04"
                                                                                                                                                                                                    className="popup-video" >
                                                                                                                                                                                                    <
                                                                                                                                                                                                        i className="fas fa-play" />
                                                                                                                                                                                                    <
        /a> <
        /div> <
        div className="img-bg pos-rel" >
                                                                                                                                                                                                        <
                                                                                                                                                                                                            img className="chose_05 pl-70 pl-lg-0 pl-md-0 pl-xs-0"
                                                                                                                                                                                                            src="assets/img/chose/05.png"
                                                                                                                                                                                                            alt="Chose-img" /
                                                                                                                                                                                                        >
                                                                                                                                                                                                        <
        /div> <
                                                                                                                                                                                                            img className="chose chose_06"
                                                                                                                                                                                                            src="assets/img/shape/dot-box-4.svg"
                                                                                                                                                                                                            alt="Chose-img" /
                                                                                                                                                                                                        >
                                                                                                                                                                                                        <
        /div> <
        /div> <
        div className="col-xl-5 col-lg-5" >
                                                                                                                                                                                                            <
        div className="chose-wrapper pl-25 pl-lg-0 pl-md-0 pl-xs-0" >
                                                                                                                                                                                                                <
        div className="section-title mb-30 wow fadeInUp2 animated"
                                                                                                                                                                                                                    dataWowDelay=".1s" >
                                                                                                                                                                                                                    <
        h2 className="mb-25" > Mengapa Harus Memilih Brainer Education ? < /h2> <
        p >
                                                                                                                                                                                                                            Brainer Education merupakan pilihan yang ideal bagi mereka yang mencari platform pembelajaran online yang komprehensif, interaktif, dan terpercaya. {' '}
                                                                                                                                                                                                                            Dengan berbagai keunggulan dan fitur yang ditawarkan, Brainer Education menjadi solusi yang efektif untuk meningkatkan pengetahuan dan keterampilan di bidang programming, akuntansi, dan bahasa. <
        /p> <
        /div> <
        ul className="text-list mb-40 wow fadeInUp2 animated"
                                                                                                                                                                                                                                dataWowDelay=".2s" >
                                                                                                                                                                                                                                <
        li > Video Belajar yang Berkualitas < /li> <
        li > Kelas Gratis dan Berbayar < /li> <
        li > Metode Pembelajaran Online < /li> <
        li > Beragam Materi Pembelajaran < /li> <
        /ul> <
        /div> <
        /div> <
        /div> <
        /div> <
        /div> <
        /section>

                                                                                                                                                                                                                                                { /*about-section-wrapper start*/} <
        div className="about-section-wrapper pos-rel gradient-bg" >
                                                                                                                                                                                                                                                    <
                                                                                                                                                                                                                                                        div className="what-blur-shape-one" />
                                                                                                                                                                                                                                                    <
                                                                                                                                                                                                                                                        div className="what-blur-shape-two" /> { /*what-loking-for start*/} <
        section className="what-looking-for pt-145 pb-130 pt-md-95 pb-md-80 pt-xs-95 pb-xs-80" >
                                                                                                                                                                                                                                                        <
        div className="container" >
                                                                                                                                                                                                                                                            <
        div className="row justify-content-center" >
                                                                                                                                                                                                                                                                <
        div className="col-lg-8" >
                                                                                                                                                                                                                                                                    <
        div className="section-title text-center mb-55" >

                                                                                                                                                                                                                                                                        <
        h2 > Apa yang kamu butuhkan ? < /h2> <
        /div> <
        /div> <
        /div> <
        div className="row" >
                                                                                                                                                                                                                                                                                <
        div className="col-xl-6 col-lg-6 col-md-6" >
                                                                                                                                                                                                                                                                                    <
        div className="what-box text-center mb-3" >
                                                                                                                                                                                                                                                                                        <
        div className="what-box__icon mb-30" >
                                                                                                                                                                                                                                                                                            <
                                                                                                                                                                                                                                                                                                img src="assets/img/icon/phone-operator.svg"
                                                                                                                                                                                                                                                                                                alt="" />
                                                                                                                                                                                                                                                                                            <
        /div> <
        h3 > Lihat Kelas < /h3> <
        p >
                                                                                                                                                                                                                                                                                                    Temukan kelas online menarik sesuai minatmu.Dapatkan pengetahuan dan keterampilan baru dari kenyamanan rumahmu. {' '}
                                                                                                                                                                                                                                                                                                    Mentor ahli, materi interaktif, dan pelajaran berkualitas tinggi. {' '}
                                                                                                                                                                                                                                                                                                    Pilih dari beragam topik, seperti pemrograman, akuntansi, dan bahasa. {' '}
                                                                                                                                                                                                                                                                                                    Mulailah perjalanan pembelajaran yang mengubah hidupmu sekarang.Daftar dan temukan peluang baru!
                                                                                                                                                                                                                                                                                                    <
        /p> <
        Link to={'/courseDetail'}
                                                                                                                                                                                                                                                                                                        className="theme_btn border_btn active" >
                                                                                                                                                                                                                                                                                                        Selengkapnya <
        /Link> <
        /div> <
        /div> <
        div className="col-xl-6 col-lg-6 col-md-6" >
                                                                                                                                                                                                                                                                                                            <
        div className="what-box text-center mb-3" >
                                                                                                                                                                                                                                                                                                                <
        div className="what-box__icon mb-30" >
                                                                                                                                                                                                                                                                                                                    <
                                                                                                                                                                                                                                                                                                                        img src="assets/img/icon/graduate.svg"
                                                                                                                                                                                                                                                                                                                        alt="" />
                                                                                                                                                                                                                                                                                                                    <
        /div> <
        h3 > Butuh Bantuan ? < /h3> <
        p >
                                                                                                                                                                                                                                                                                                                            Temukan dukungan yang Anda butuhkan dalam perjalanan belajar Anda dengan layanan bantuan kami. {' '}
                                                                                                                                                                                                                                                                                                                            Apapun pertanyaan atau kesulitan yang kamu hadapi, tim kami siap membantu. {' '}
                                                                                                                                                                                                                                                                                                                            Tingkatkan pemahamanmu, atasi tantangan, dan capai tujuanmu dengan bantuan yang tepat. {' '}
                                                                                                                                                                                                                                                                                                                            Jangan ragu untuk meminta bantuan, kami di sini untuk membantu anda. <
        /p> <
        Link to={'/contact'}
                                                                                                                                                                                                                                                                                                                                className="theme_btn border_btn" >
                                                                                                                                                                                                                                                                                                                                Hubungi Kami <
        /Link> <
        /div> <
        /div> <
        /div> <
        /div> <
        /section> { /*what-loking-for end*/} <
        /div> { /*about-section-wrapper start*/} <
        /Home> <
        />
                                                                                                                                                                                                                                                                                                                                )
}

                                                                                                                                                                                                                                                                                                                                export default About