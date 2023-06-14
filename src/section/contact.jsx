import React from 'react';

const Contact = () => {
  return (
    <>
      <section className="contact-form-area pt-150 pb-120 pt-md-100 pt-xs-100 pb-md-70 pb-xs-70">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="contact-form-wrapper mb-30">
                <h2 className="mb-45">Hubungi Kami</h2>
                <form
                  action="#"
                  className="row gx-3 comments-form contact-form"
                >
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
                      defaultValue={''}
                    />
                  </div>
                </form>
                <button className="theme_btn message_btn mt-20">
                  Kirim Pesan
                </button>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-img contact-img-02 mb-30">
                <img
                  className="img-fluid"
                  src="assets/img/contact/kontak.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
