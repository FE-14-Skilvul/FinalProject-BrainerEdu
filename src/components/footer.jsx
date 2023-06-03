const Footer = () => {
    return (
        <>
            <footer className="footer-area footer-area-2 gradient-bg pt-135 pt-md-100 pt-xs-100">
                <div className="footer-blur-bg" />
                <div className="top-footer border-bot-2 pb-20 mb-60">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="footer__widget">
                                    <div className="footer-log mb-30">
                                        <a href="index.html" className="logo">
                                            <img src="/assets/img/logo/header_logo_one.svg" alt="" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 text-md-end">
                                <div className="footer__widget__two mb-30">
                                    <div className="social-media footer__social">
                                        <a href="#">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-twitter" />
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-linkedin-in" />
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-google-plus-g" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row pb-15">
                        <div
                            className="col-xl-3 col-lg-4 col-md-6  wow fadeInUp2 animated"
                            data-wow-delay=".1s"
                        >
                            <div className="footer__widget footer__widget__two mb-30">
                                <h4 className="sub-title mb-35">About Us</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consetetur sadip scing elitr, sed di
                                    nonumy eirmod temporinvi dunt ut labore lorem ipsum.
                                </p>
                                <h5 className="mail-to mt-25">info@example.com</h5>
                                <p className="phone-num mt-15">+00 235 695 58 , +0239564</p>
                            </div>
                        </div>
                        <div
                            className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp2 animated"
                            data-wow-delay=".3s"
                        >
                            <div className="footer__widget mb-30 pl-40 pl-md-0 pl-xs-0">
                                <h6 className="widget-title mb-35">Contact us</h6>
                                <ul className="fot-list">
                                    <li>
                                        <a href="#">info@example.com</a>
                                    </li>
                                    <li>
                                        <a href="#">+00 235 695 58</a>
                                    </li>
                                    <li>
                                        <a href="#">Terms &amp; Conditions</a>
                                    </li>
                                    <li>
                                        <a href="#">Privacy Policy</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div
                            className="col-xl-3 col-lg-4 col-md-6  wow fadeInUp2 animated"
                            data-wow-delay=".5s"
                        >
                            <div className="footer__widget mb-25 pl-65 pl-md-0 pl-xs-0">
                                <h6 className="widget-title mb-35">Quick Links</h6>
                                <ul className="fot-list">
                                    <li>
                                        <a href="about.html">About US</a>
                                    </li>
                                    <li>
                                        <a href="#">Explore Pages</a>
                                    </li>
                                    <li>
                                        <a href="#">Our Services</a>
                                    </li>
                                    <li>
                                        <a href="#">Destinations</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div
                            className="col-xl-3 col-lg-6 col-md-6  wow fadeInUp2 animated"
                            data-wow-delay=".7s"
                        >
                            <div className="footer__widget footer__widget__two mb-30">
                                <h6 className="widget-title mb-35">Subscribe Now</h6>
                                <div className="subscribe-form-box pos-rel">
                                    <form className="subscribe-form mb-15">
                                        <input type="text" placeholder="Email Here" />
                                    </form>
                                    <button className="sub_btn">Subscribe Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copy-right-area border-bot-top pt-45">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 mb-20">
                                <div className="copyright">
                                    <p>
                                        Copyright@ 2021 <a href="#">Zoomy</a>. All Rights Reserved
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 mb-20">
                                <div className="copyright text-lg-end">
                                    <ul className="fot-list">
                                        <li>
                                            <a href="#">Help</a>
                                        </li>
                                        <li>
                                            <a href="#">Privacy Policy</a>
                                        </li>
                                        <li>
                                            <a href="#">Terms &amp; Conditions</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer