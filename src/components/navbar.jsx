import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <header>
                <div
                    id="theme-menu-two"
                    className="main-header-area pl-100 pr-100 pt-20 pb-15"
                >
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-xl-2 col-lg-2 col-5">
                                <div className="logo">
                                    <Link to={'/'}>
                                        <img
                                            src="/assets/img/logo/logobrainerr.png"
                                            alt=""
                                            width={157}
                                            height={45}
                                        />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-xl-7 col-lg-8 d-none d-lg-block">
                                <nav className="main-menu navbar navbar-expand-lg justify-content-center">
                                    <div className="nav-container">
                                        <div
                                            className="collapse navbar-collapse"
                                            id="navbarSupportedContent"
                                        >
                                            <ul className="navbar-nav">
                                                <li className="nav-item">
                                                    <Link to={'/'} className="nav-link">
                                                        Beranda
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to={'/about'} className="nav-link">
                                                        Tentang
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to={'/skillpath'} className="nav-link">
                                                        Jalur Belajar
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to={'/contactus'} className="nav-link">
                                                        Kontak
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                            <div className="col-xl-3 col-lg-2 col-7">
                                <div className="right-nav d-flex align-items-center justify-content-end">
                                    <div className="right-btn mr-25 mr-xs-15">
                                        <ul className="d-flex align-items-center">
                                            <li>
                                                <Link to={'/register'} className="theme_btn free_btn">
                                                    Daftar Sekarang
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to={'/login'} className="sign-in ml-20">
                                                    <img src="/assets/img/icon/user.svg" alt="" />
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="hamburger-menu d-md-inline-block d-lg-none text-right">
                                        <a href="#">
                                            <i className="far fa-bars" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Navbar;
