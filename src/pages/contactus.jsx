import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Home from '../layout/home';
import Contact from '../section/contact';

const ContactUs = () => {
  return (
    <>
      <Home>
        <>
          {/*contact-us-area start*/}
          <section className="contact-us-area pt-150 pb-120 pt-md-100 pt-xs-100 pb-md-70 pb-xs-70">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-6 col-lg-6">
                  <div className="contact-img mb-30">
                    <img
                      className="img-fluid"
                      src="assets/img/contact/04.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                  <div className="contact-wrapper pl-75 mb-30">
                    <div className="section-title mb-30">
                      <h2>Hubungi Kami</h2>
                      <p>
                        Kami akan dengan senang hati menjawabnya secepat
                        mungkin. Kami menghargai setiap masukan yang Anda
                        berikan!
                      </p>
                    </div>
                    <div className="single-contact-box mb-30">
                      <div className="contact__iocn">
                        <img
                          src="assets/img/icon/material-location-on.svg"
                          alt=""
                        />
                      </div>
                      <div className="contact__text">
                        <h5>Jakarta Timur, Daerah Khusus Ibukota Jakarta </h5>
                      </div>
                    </div>
                    <div className="single-contact-box cb-2 mb-30">
                      <div className="contact__iocn">
                        <img src="assets/img/icon/phone-alt.svg" alt="" />
                      </div>
                      <div className="contact__text">
                        <h5>+62 (021) 3654 34</h5>
                        <h5>+0 (123) 4567 89</h5>
                      </div>
                    </div>
                    <div className="single-contact-box cb-3 mb-30">
                      <div className="contact__iocn">
                        <img src="assets/img/icon/feather-mail.svg" alt="" />
                      </div>
                      <div className="contact__text">
                        <h5>braineredufe14@gmail.com</h5>
                        <h5>pendidikan14@skilvul.com</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*contact-us-area end*/}
          <Contact />
        </>
      </Home>
    </>
  );
};

export default ContactUs;
