import React from 'react';
import Home from '../layout/home';

const Profile = () => {
  return (
    <>
      <Home>
        <div className="about-section-wrapper pos-rel gradient-bg">
          <section className="pt-150 pb-120 pt-md-100 pt-xs-100 pb-md-70 pb-xs-70">
            <div className="container-xl px-4 mt-5">
              <div className="row">
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
                      <form>
                        <div className="mb-3">
                          <label className="small mb-1" htmlFor="inputUsername">
                            Username
                          </label>
                          <input
                            className="form-control"
                            id="inputUsername"
                            type="text"
                            placeholder="username"
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
                            placeholder="nama"
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
                            type="email"
                            placeholder="email"
                          />
                        </div>
                        <div className="row gx-3 mb-3">
                          <div className="col-md-6">
                            <label className="small mb-1" htmlFor="inputPhone">
                              Nomor Telepon
                            </label>
                            <input
                              className="form-control"
                              id="inputPhone"
                              type="tel"
                              placeholder="+62"
                            />
                          </div>
                          <div className="col-md-6">
                            <label
                              className="small mb-1"
                              htmlFor="inputBirthday"
                            >
                              Alamat
                            </label>
                            <input
                              className="form-control"
                              id="inputBirthday"
                              type="text"
                              name="birthday"
                              placeholder="alamat anda"
                            />
                          </div>
                        </div>
                        <button className="btn btn-primary" type="button">
                          Simpan
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Home>
    </>
  );
};

export default Profile;
