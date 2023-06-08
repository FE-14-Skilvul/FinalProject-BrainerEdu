import React, { useRef } from 'react';
import Home from '../layout/home';

const Login = () => {
  return (
    <>
      <Home>
        {' '}
        <section className="contact-form-area pt-150 pb-120 pt-md-100 pt-xs-100 pb-md-70 pb-xs-70">
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-6">
                <div className="contact-form-wrapper text-center mb-30">
                  <h2 className="mb-45">Login</h2>
                  <form
                    action="#"
                    className="row gx-3 comments-form contact-form"
                  >
                    <div className="col-lg-12 mb-30">
                      <input type="text" placeholder="Username" />
                    </div>
                    <div className="col-lg-12 mb-30">
                      <input type="password" placeholder="Password" />
                    </div>
                  </form>
                  <button className="theme_btn message_btn mt-20">Login</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Home>
    </>
  );
};

export default Login;
