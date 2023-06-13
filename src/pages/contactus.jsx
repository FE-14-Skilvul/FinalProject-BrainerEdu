import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Home from '../layout/home';

const ContactUs = () => {
  return (
    <>
      <Home>{/contact-us-area start/}
  <section className="contact-us-area pt-150 pb-120 pt-md-100 pt-xs-100 pb-md-70 pb-xs-70">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-xl-6 col-lg-6">
          <div className="contact-img mb-30">
            <img className="img-fluid" src="assets/img/contact/04.png" alt="" />
          </div>
        </div>
        <div className="col-xl-6 col-lg-6">
          <div className="contact-wrapper pl-75 mb-30">
            <div className="section-title mb-30">
              <h2>Hubungi Kami</h2>
              <p>
              Kami akan dengan senang hati menjawabnya secepat mungkin. Kami menghargai setiap masukan yang Anda berikan!
              </p>
            </div>
            <div className="single-contact-box mb-30">
              <div className="contact__iocn">
                <img src="assets/img/icon/material-location-on.svg" alt="" />
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
                <h5>+26 (081) 3654 34</h5>
              </div>
            </div>
            <div className="single-contact-box cb-3 mb-30">
              <div className="contact__iocn">
                <img src="assets/img/icon/feather-mail.svg" alt="" />
              </div>
              <div className="contact__text">
                <h5>braineredufe@gmail.com</h5>
                <h5>pendidikan14@skilvul.com</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/contact-us-area end/}
  {/contact-form-area start/}
  <section className="contact-form-area pt-150 pb-120 pt-md-100 pt-xs-100 pb-md-70 pb-xs-70">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="contact-form-wrapper mb-30">
            <h2 className="mb-45">Hubungi Kami</h2>
            <form action="#" className="row gx-3 comments-form contact-form">
              <div className="col-lg-6 col-md-6 mb-30">
                <input type="text" placeholder="Nama Depan" />
              </div>
              <div className="col-lg-6 col-md-6 mb-30">
                <input type="text" placeholder="Nama Belakang" />
              </div>
              <div className="col-lg-6 col-md-6 mb-30">
                <input type="text" placeholder="Nomer telepon" />
              </div>
              <div className="col-lg-6 col-md-6 mb-30">
                <input type="text" placeholder="Alamat" />
              </div>
              <div className="col-lg-12 mb-30">
                <input type="text" placeholder="Email " />
              </div>
              <div className="col-lg-12 mb-30">
                <textarea
                  name="commnent"
                  id="commnent"
                  cols={30}
                  rows={10}
                  placeholder="Pesan"
                  defaultValue={""}
                />
              </div>
            </form>
            <button className="theme_btn message_btn mt-20">
              Krim Pesan
            </button>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="contact-img contact-img-02 mb-30">
            <img className="img-fluid" src="assets/img/contact/05.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/contact-form-area end/}
  {/* subscribe-area start */}
  <section className="subscribe-area footer-bg border-bot pt-145 pb-50 pt-md-90 pt-xs-90">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-8">
          <div className="subscribe-wrapper text-center mb-30">
            <h2>
              Berlangganan sekarang dan dapatkan informasi menarik dari kami
            </h2>
            <div className="subscribe-form-box pos-rel">
              <form className="subscribe-form">
                <input type="text" placeholder="Ketik Email" />
              </form>
              <button className="sub_btn">Langganan</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* subscribe-area end */}
  </Home>
    </>
  );
};

export default ContactUs;
