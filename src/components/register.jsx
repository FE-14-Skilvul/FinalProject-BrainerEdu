import React, { useRef } from 'react';
import Home from '../layout/home';
import Input from './input';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Register = () => {
  const navigate = useNavigate();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const usernameRef = useRef(null);
  const repasswordRef = useRef(null);
  const namaRef = useRef(null);
  const { VITE_BASE_URL } = import.meta.env;
  // console.log(VITE_BASE_URL) // 123
  // console.log(import.meta.env.DB_PASSWORD) // undefined
  const saveAccount = async (e) => {
    e.preventDefault();
    const nama = namaRef.current.value;
    const email = emailRef.current.value;
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    const repassword = repasswordRef.current.value;

    // console.log({ email, password });
    try {
      // const response = await axios.get("http://localhost:5000/users");
      // const response = await axios.get("http://localhost:5000/users", { withCredentials: true });

      // return response.data;
      // await axios.get('http://localhost:5000/', { withCredentials: true })
      const response = axios.post(
        VITE_BASE_URL + '/register',
        {
          nama,
          username,
          email,
          password,
        },
        { withCredentials: true },
      );
      console.log({ nama, username, email, password, response });

      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Home>
        <section className="contact-form-area pt-150 pb-120 pt-md-100 pt-xs-100 pb-md-70 pb-xs-70">
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-6 col-md-8 grid-item cat2 cat3">
                <div
                  className="z-gallery z-gallery-two mb-30"
                  style={{ padding: '3rem' }}
                >
                  <div className="contact-form-wrapper text-center mb-30">
                    <div className="d-flex justify-content-start">
                      <h2 className="mb-45">Register</h2>
                    </div>
                    <form
                      onSubmit={saveAccount}
                      className="row gx-3 comments-form contact-form"
                    >
                      <Input
                        type="text"
                        ref={namaRef}
                        placeholder="Nama Lengkap"
                      />
                      <Input
                        type="text"
                        ref={usernameRef}
                        placeholder="Username"
                      />
                      <Input type="text" ref={emailRef} placeholder="Email" />
                      <Input
                        type="password"
                        ref={passwordRef}
                        placeholder="Password"
                      />
                      <Input
                        type="password"
                        ref={repasswordRef}
                        placeholder="Ulangi Password"
                      />
                      <button className="theme_btn message_btn mt-20 w-100">
                        Simpan
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Home>
    </>
  );
};

export default Register;
