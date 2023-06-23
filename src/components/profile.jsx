import React, { useRef, useState } from 'react';
import Home from '../layout/home';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import Toast from './toast';

const Profile = () => {
  const API = import.meta.env.VITE_BASE_URL;

  const navigate = useNavigate();
  const cookies = JSON.parse(Cookies.get('userLogin'));
  const [toast, setToast] = useState(false);
  const alamatRef = useRef(null);
  // alamatRef.target.innerHtml = 'dasdasads'
  const saveAccount = async (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    const formdata = Object.fromEntries(data.entries());

    let { nama, username, alamat } = formdata;
    if (!nama) {
      nama = cookies.nama;
    }
    if (!username) {
      username = cookies.username;
    }
    if (!alamat) {
      alamat = cookies.alamat;
    }
    try {
      const response = await axios.put(`${API}/user/${cookies.id}`, {
        nama,
        username,
        alamat,
      });
      Cookies.remove('userLogin');
      setCookie('userLogin', response.data);
      if (response.request.status === 200) setToast(true);
      // if (response.request.status == 200) return <Toast text={'Data Berhasil disimpan'} />;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Home>
        <section className="pt-150 pb-120 pt-md-100 pt-xs-100 pb-md-70 pb-xs-70">
          <div className="container-xl px-4 mt-5">
            {toast && <Toast text={'Data Berhasil disimpan'} />}
            <div className="row">
              <div className="d-flex justify-content-end mb-5">
                <h4>
                  {' '}
                  Saldo Anda : Rp.{' '}
                  {parseInt(cookies.saldo).toLocaleString('id-ID')}
                </h4>
              </div>
              <div className="col-xl-4">
                <div className="card mb-4 mb-xl-0">
                  <div className="card-header">Foto Profile</div>
                  <div className="card-body text-center">
                    <img
                      className="img-account-profile rounded-circle mb-2"
                      src="assets/img/slider/profile.png"
                      width={250}
                      height={250}
                      alt=""
                    />
                    <div className="mb-3">
                      <label
                        htmlFor="inputFile"
                        className="form-label"
                        style={{
                          fontSize: '16px',
                        }}
                      >
                        Ubah Foto Profile
                      </label>
                      <input
                        className="form-control"
                        type="file"
                        id="inputFile"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-8">
                <div className="card mb-4">
                  <div className="card-header">Pengaturan</div>
                  <div className="card-body">
                    <form onSubmit={saveAccount}>
                      <div className="mb-3">
                        <label className="small mb-1" htmlFor="inputUsername">
                          Username
                        </label>
                        <input
                          className="form-control"
                          id="inputUsername"
                          type="text"
                          // value={cookies.username}
                          placeholder={cookies.username}
                        />
                      </div>

                      <div className="mb-3">
                        <label className="small mb-1" htmlFor="inputUsername">
                          Nama
                        </label>
                        <input
                          className="form-control"
                          id="inputFirstName"
                          type="text"
                          name="nama"
                          placeholder={cookies.nama}
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          className="small mb-1"
                          htmlFor="inputEmailAddress"
                        >
                          Email
                        </label>
                        <input
                          className="form-control"
                          id="inputEmailAddress"
                          placeholder={cookies.email}
                          type="email"
                          name="email"
                          disabled
                        />
                      </div>
                      <div className="row gx-3 mb-3">
                        <div className="col-md-12">
                          <label className="small mb-1" htmlFor="inputBirthday">
                            Alamat
                          </label>
                          <input
                            className="form-control"
                            id="inputBirthday"
                            type="text"
                            name="alamat"
                            ref={alamatRef}
                            placeholder={cookies.alamat}
                          />
                        </div>
                      </div>
                      <div className="d-flex justify-content-end">
                        <button className="btn btn-primary" type="submit">
                          Simpan
                        </button>
                      </div>
                      <button
                        className="btn btn-outline-primary"
                        style={{ marginRight: '20px', marginTop: '20px' }}
                        onClick={() => {
                          window.location.href = 'https://wa.me/6281263451839';
                        }}
                      >
                        Hubungi Admin
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
function setCookie(name, value) {
  const date = new Date();
  date.setTime(date.getTime() + 24 * 60 * 60 * 1000); // set the expiration time to 1 day
  const expires = 'expires=' + date.toUTCString();
  const myObjStr = JSON.stringify(value);
  document.cookie = name + '=' + myObjStr + ';' + expires + ';path=/';
}

export default Profile;
