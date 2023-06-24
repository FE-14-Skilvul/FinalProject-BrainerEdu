import React, { useRef, useState } from 'react';
import Home from '../layout/home';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import axios, { Axios } from 'axios';
import swal from 'sweetalert';
import Toast from './toast';
import { Image } from 'cloudinary-react';
import { useEffect } from 'react';

const Profile = () => {
  const API = import.meta.env.VITE_BASE_URL;

  //fotoprofile
  const [imageSelected, setImageSelected] = useState('');
  const [imageURL, setImageURL] = useState('');
  const uploadImage = () => {
    const formData = new FormData();
    formData.append('file', imageSelected);
    formData.append('upload_preset', 'ueukx2xe');
    formData.append('cloud_name', 'dqzc2i588');

    fetch('https://api.cloudinary.com/v1_1/dqzc2i588/image/upload', {
      method: 'post',
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        const imageURL = data.secure_url;
        setImageURL(imageURL);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleImageSelect = (event) => {
    setImageSelected(event.target.files[0]);
  };

  const navigate = useNavigate();
  const cookies = JSON.parse(Cookies.get('userLogin'));
  console.log(cookies.avatar);
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
                    {imageURL && (
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          width: '250px',
                          height: '250px',
                          borderRadius: '50%',
                          overflow: 'hidden',
                          marginBottom: '20px',
                          textAlign: 'center',
                        }}
                      >
                        <Image
                          width={250}
                          height={250}
                          cloudName="dqzc2i588"
                          publicId={imageURL}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                          }}
                        />
                      </div>
                    )}
                    <div className="mb-3">
                      <input
                        className="form-control"
                        type="file"
                        id="inputFile"
                        onChange={handleImageSelect}
                      />
                      <button
                        className="btn btn-primary"
                        style={{ marginTop: '20px' }}
                        onClick={uploadImage}
                      >
                        Unggah Gambar
                      </button>
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
