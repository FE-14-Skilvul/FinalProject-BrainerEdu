import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
const Navbar = () => {
    // console.log();

    const cookies = Cookies.get('userLogin') ? JSON.parse(Cookies.get('userLogin')) : '';
    // const firstName = cookies.nama.split(" ")[0];
    // console.log(obj);

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
                            <div className="col-xl-3 col-lg-2 col-7 d-flex justify-content-center">
                                <nav className="main-menu navbar navbar-expand-lg justify-content-center">
                                    <div className="">
                                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                            <ul className="navbar-nav">

                                                {cookies ?
                                                    <li className="nav-item dropdown d-flex align-items-center">

                                                        <p className="nav-link mx-0"> Halo, {cookies.nama.split(" ")[0]}</p>
                                                        <a
                                                            className="nav-link dropdown-toggle sign-in d-flex justify-content-center mx-3 align-items-center"
                                                            href="#"
                                                            id="navbarDropdown4"
                                                            role="button"
                                                            data-bs-toggle="dropdown"
                                                            aria-expanded="false"
                                                            style={{ padding: 0 }}
                                                        >
                                                            <img src="/assets/img/icon/user.svg" alt="" />
                                                        </a>
                                                        <ul className="dropdown-menu " style={{ marginLeft: "-65px" }} aria-labelledby="navbarDropdown4">
                                                            <li>
                                                                <a className="dropdown-item" href="blog.html">
                                                                    Pengaturan
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="blog-details.html">
                                                                    Kelas Saya
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <Link to={'/logout'} className="dropdown-item "  >
                                                                    Logout
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    // <li className="nav-item dropdown">
                                                    //     <Link to={'/login'} className="sign-in ml-20 nav-link dropdown-toggle" id="navbarDropdown4"
                                                    //         role="button"
                                                    //         data-bs-toggle="dropdown"
                                                    //         aria-expanded="false">
                                                    //         <img src="/assets/img/icon/user.svg" alt="" />
                                                    //     </Link>
                                                    // </li>
                                                    : <div className='d-flex gap-2'>
                                                        <li className="nav-item dropdown">
                                                            <Link to={'/register'} className="theme_btn free_btn "  >
                                                                Daftar
                                                            </Link>
                                                        </li>
                                                        <li className="nav-item dropdown">
                                                            <Link to={'/login'} className="theme_btn-light free_btn "  >
                                                                Login
                                                            </Link>
                                                        </li>
                                                    </div>
                                                }


                                            </ul>
                                        </div>
                                    </div>
                                </nav>

                                {/* <div className="right-nav d-flex align-items-center justify-content-end">
                                    <div className="right-btn mr-25 mr-xs-15">
                                        <ul className="navbar-nav d-flex align-items-center gap-2">
                                            <li class="nav-item dropdown">
                                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown4" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Blog
                                                </a>
                                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown4">
                                                    <li><a class="dropdown-item" href="blog.html">Blog Grid</a></li>
                                                    <li><a class="dropdown-item" href="blog-details.html">Blog Details</a></li>
                                                </ul>
                                            </li>



                                        </ul>
                                    </div>
                                    <div className="hamburger-menu d-md-inline-block d-lg-none text-right">
                                        <a href="#">
                                            <i className="far fa-bars" />
                                        </a>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Navbar;
