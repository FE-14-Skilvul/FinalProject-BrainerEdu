const index = () => {
    return (
        <>

<>
  {/*[if lte IE 9]>
      <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience and security.</p>
  <![endif]*/}
  {/* Add your site or application content here */}
  {/* preloader */}
  <div id="preloader">
    <div className="preloader">
      <span />
      <span />
    </div>
  </div>
  {/* preloader end  */}
  <header>
    <div
      id="theme-menu-one"
      className="main-header-area pl-100 pr-100 pt-20 pb-15"
    >
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-xl-2 col-lg-2 col-5">
            <div className="logo">
              <a href="index.html">
                <img src="assets/img/logo/header_logo_one.svg" alt="" />
              </a>
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
                    <li className="nav-item dropdown mega-menu">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        All Categories
                      </a>
                      <ul
                        className="dropdown-menu submenu mega-menu__sub-menu-box"
                        aria-labelledby="navbarDropdown"
                      >
                        <li>
                          <a href="index.html">
                            <span>
                              <img src="assets/img/icon/icon7.svg" alt="" />
                            </span>{" "}
                            Business
                          </a>
                        </li>
                        <li>
                          <a href="index-2.html">
                            <span>
                              <img src="assets/img/icon/icon8.svg" alt="" />
                            </span>{" "}
                            Technology
                          </a>
                        </li>
                        <li>
                          <a href="index.html">
                            <span>
                              <img src="assets/img/icon/icon9.svg" alt="" />
                            </span>{" "}
                            Development
                          </a>
                        </li>
                        <li>
                          <a href="index-2.html">
                            <span>
                              <img src="assets/img/icon/icon10.svg" alt="" />
                            </span>{" "}
                            Photography
                          </a>
                        </li>
                        <li>
                          <a href="index.html">
                            <span>
                              <img src="assets/img/icon/icon11.svg" alt="" />
                            </span>{" "}
                            Digital Marketing
                          </a>
                        </li>
                        <li>
                          <a href="index-2.html">
                            <span>
                              <img src="assets/img/icon/icon12.svg" alt="" />
                            </span>{" "}
                            Programming
                          </a>
                        </li>
                        <li>
                          <a href="index.html">
                            <span>
                              <img src="assets/img/icon/icon14.svg" alt="" />
                            </span>{" "}
                            Videograpgy
                          </a>
                        </li>
                        <li>
                          <a href="index-2.html">
                            <span>
                              <img src="assets/img/icon/icon13.svg" alt="" />
                            </span>{" "}
                            Illustration
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown active">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdown2"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Home
                      </a>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown2"
                      >
                        <li>
                          <a className="dropdown-item" href="index.html">
                            Home Style 1
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="index-2.html">
                            Home Style 2
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="index-3.html">
                            Home Style 3
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdown3"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Pages
                      </a>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown3"
                      >
                        <li>
                          <a className="dropdown-item" href="about.html">
                            About Us
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="courses.html">
                            Course One
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="courses-2.html">
                            Course Two
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="course-details.html"
                          >
                            Courses Details
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="price.html">
                            Price
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="instructor.html">
                            Instructor
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="instructor-profile.html"
                          >
                            Instructor Profile
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="faq.html">
                            FAQ
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdown4"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Blog
                      </a>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown4"
                      >
                        <li>
                          <a className="dropdown-item" href="blog.html">
                            Blog Grid
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="blog-details.html">
                            Blog Details
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="contact.html"
                        id="navbarDropdown5"
                        role="button"
                        aria-expanded="false"
                      >
                        Contact
                      </a>
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
                    <a href="contact.html" className="theme_btn free_btn">
                      Try Free Now
                    </a>
                  </li>
                  <li>
                    <a className="sign-in ml-20" href="login.html">
                      <img src="assets/img/icon/user.svg" alt="" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="hamburger-menu d-md-inline-block d-lg-none text-right">
                <a href="javascript:void(0);">
                  <i className="far fa-bars" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>{" "}
    {/* /.theme-main-menu */}
  </header>
  {/* slide-bar start */}
  <aside className="slide-bar">
    <div className="close-mobile-menu">
      <a href="javascript:void(0);">
        <i className="fas fa-times" />
      </a>
    </div>
    {/* offset-sidebar start */}
    <div className="offset-sidebar">
      <div className="offset-widget offset-logo mb-30">
        <a href="index.html">
          <img src="assets/img/logo/header_logo_one.svg" alt="logo" />
        </a>
      </div>
      <div className="offset-widget mb-40">
        <div className="info-widget">
          <h4 className="offset-title mb-20">About Us</h4>
          <p className="mb-30">
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and will give you a complete
            account of the system and expound the actual teachings of the great
            explore
          </p>
          <a className="theme_btn theme_btn_bg" href="contact.html">
            Contact Us
          </a>
        </div>
      </div>
      <div className="offset-widget mb-30 pr-10">
        <div className="info-widget info-widget2">
          <h4 className="offset-title mb-20">Contact Info</h4>
          <p>
            {" "}
            <i className="fal fa-address-book" /> 23/A, Miranda City Likaoli
            Prikano, Dope
          </p>
          <p>
            {" "}
            <i className="fal fa-phone" /> +0989 7876 9865 9{" "}
          </p>
          <p>
            {" "}
            <i className="fal fa-envelope-open" /> info@example.com{" "}
          </p>
        </div>
      </div>
    </div>
    {/* offset-sidebar end */}
    {/* side-mobile-menu start */}
    <nav className="side-mobile-menu">
      <ul id="mobile-menu-active">
        <li className="has-dropdown">
          <a href="index.html">Home</a>
          <ul className="sub-menu">
            <li>
              <a href="index.html">Home Style 1</a>
            </li>
            <li>
              <a href="index-2.html">Home Style 2</a>
            </li>
            <li>
              <a href="index-3.html">Home Style 3</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="about.html">About</a>
        </li>
        <li className="has-dropdown">
          <a href="#">Pages</a>
          <ul className="sub-menu">
            <li>
              <a href="courses.html">Course One</a>
            </li>
            <li>
              <a href="courses-2.html">Course Two</a>
            </li>
            <li>
              <a href="course-details.html">Courses Details</a>
            </li>
            <li>
              <a href="price.html">Price</a>
            </li>
            <li>
              <a href="instructor.html">Instructor</a>
            </li>
            <li>
              <a href="instructor-profile.html">Instructor Profile</a>
            </li>
            <li>
              <a href="faq.html">FAQ</a>
            </li>
            <li>
              <a href="login.html">login</a>
            </li>
          </ul>
        </li>
        <li className="has-dropdown">
          <a href="#">Blogs</a>
          <ul className="sub-menu">
            <li>
              <a href="blog.html">Blog Grid</a>
            </li>
            <li>
              <a href="blog-details.html">Blog Details</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="contact.html">Contacts Us</a>
        </li>
      </ul>
    </nav>
    {/* side-mobile-menu end */}
  </aside>
  <div className="body-overlay" />
  {/* slide-bar end */}
  <main>
    {/*slider-area start*/}
    <section className="slider-area pt-180 pt-xs-150 pt-150 pb-xs-35">
      <img className="sl-shape shape_01" src="assets/img/icon/01.svg" alt="" />
      <img className="sl-shape shape_02" src="assets/img/icon/02.svg" alt="" />
      <img className="sl-shape shape_03" src="assets/img/icon/03.svg" alt="" />
      <img className="sl-shape shape_04" src="assets/img/icon/04.svg" alt="" />
      <img className="sl-shape shape_05" src="assets/img/icon/05.svg" alt="" />
      <img className="sl-shape shape_06" src="assets/img/icon/06.svg" alt="" />
      <img
        className="sl-shape shape_07"
        src="assets/img/shape/dot-box-5.svg"
        alt=""
      />
      <div className="main-slider pt-10">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6 order-last order-lg-first">
              <div className="slider__img__box mb-50 pr-30">
                <img
                  className="img-one mt-55 pr-70"
                  src="assets/img/slider/01.png"
                  alt=""
                />
                <img
                  className="slide-shape img-two"
                  src="assets/img/slider/02.png"
                  alt=""
                />
                <img
                  className="slide-shape img-three"
                  src="assets/img/slider/03.png"
                  alt=""
                />
                <img
                  className="slide-shape img-four"
                  src="assets/img/shape/dot-box-1.svg"
                  alt=""
                />
                <img
                  className="slide-shape img-five"
                  src="assets/img/shape/dot-box-2.svg"
                  alt=""
                />
                <img
                  className="slide-shape img-six"
                  src="assets/img/shape/zigzg-1.svg"
                  alt=""
                />
                <img
                  className="slide-shape img-seven wow fadeInRight animated"
                  data-delay="1.5s"
                  src="assets/img/icon/dot-plan-1.svg"
                  alt="Chose-img"
                />
                <img
                  className="slide-shape img-eight"
                  src="assets/img/slider/earth-bg.svg"
                  alt=""
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="slider__content pt-15">
                <h1
                  className="main-title mb-40 wow fadeInUp2 animated"
                  data-wow-delay=".1s"
                >
                  Learn Everyday &amp; Any New Skills Online with Top{" "}
                  <span className="vec-shape">Instructors.</span>
                </h1>
                <h5
                  className="mb-35 wow fadeInUp2 animated"
                  data-wow-delay=".2s"
                >
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form.
                </h5>
                <ul className="search__area d-md-inline-flex align-items-center justify-content-between mb-30">
                  <li>
                    <div className="widget__search">
                      <form className="input-form" action="#">
                        <input type="text" placeholder="Find Courses" />
                      </form>
                      <button className="search-icon">
                        <i className="far fa-search" />
                      </button>
                    </div>
                  </li>
                  <li>
                    <div className="widget__select">
                      <select name="select-cat" id="select">
                        <option value="">Categories</option>
                        <option value="">Class One</option>
                        <option value="">Class Two</option>
                        <option value="">Class Three</option>
                        <option value="">Class Four</option>
                        <option value="">Class Five</option>
                      </select>
                    </div>
                  </li>
                  <li>
                    <button className="theme_btn search_btn ml-35">
                      Search Now
                    </button>
                  </li>
                </ul>
                <p className="highlight-text">
                  <span>#1</span> Worldwide Online Learning &amp; Skills
                  Development Platform
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*slider-area end*/}
    {/*great-deal-area start*/}
    <section className="great-deal-area pt-150 pb-90 pt-md-100 pb-md-40 pt-xs-100 pb-xs-40">
      <div className="container">
        <div className="row justify-content-lg-center justify-content-start">
          <div className="col-xl-3 col-lg-8">
            <div className="deal-box mb-30 text-center text-xl-start">
              <h2 className="mb-20">
                <b>Great</b> Deals For You
              </h2>
              <p>
                There are many variations of passa of Lorem Ipsum available, but
                the majority have suffered.
              </p>
            </div>
          </div>
          <div className="col-xl-8">
            <div className="deal-active owl-carousel mb-30">
              <div className="single-item">
                <div className="single-box mb-30">
                  <div className="single-box__icon mb-25">
                    <img src="assets/img/icon/puzzle.svg" alt="" />
                  </div>
                  <h4 className="sub-title mb-20">Learn New Skills</h4>
                  <p>
                    There are many variations of pas of Lorm Ipsum available.
                  </p>
                </div>
              </div>
              <div className="single-item">
                <div className="single-box s-box2 mb-30">
                  <div className="single-box__icon mb-25">
                    <img src="assets/img/icon/manager.svg" alt="" />
                  </div>
                  <h4 className="sub-title mb-20">Expert Trainers</h4>
                  <p>
                    There are many variations of pas of Lorm Ipsum available.
                  </p>
                </div>
              </div>
              <div className="single-item">
                <div className="single-box s-box3 mb-30">
                  <div className="single-box__icon mb-25">
                    <img src="assets/img/icon/notepad.svg" alt="" />
                  </div>
                  <h4 className="sub-title mb-20">Free Trial Lesson</h4>
                  <p>
                    There are many variations of pas of Lorm Ipsum available.
                  </p>
                </div>
              </div>
              <div className="single-item">
                <div className="single-box mb-30">
                  <div className="single-box__icon mb-25">
                    <img src="assets/img/icon/puzzle.svg" alt="" />
                  </div>
                  <h4 className="sub-title mb-20">Learn New Skills</h4>
                  <p>
                    There are many variations of pas of Lorm Ipsum available.
                  </p>
                </div>
              </div>
              <div className="single-item">
                <div className="single-box s-box2 mb-30">
                  <div className="single-box__icon mb-25">
                    <img src="assets/img/icon/manager.svg" alt="" />
                  </div>
                  <h4 className="sub-title mb-20">Expert Trainers</h4>
                  <p>
                    There are many variations of pas of Lorm Ipsum available.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*great-deal-area end*/}
    {/*what-loking-for start*/}
    <section className="what-looking-for pos-rel">
      <div className="what-blur-shape-one" />
      <div className="what-blur-shape-two" />
      <div className="what-look-bg gradient-bg pt-145 pb-130 pt-md-95 pb-md-80 pt-xs-95 pb-xs-80">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center mb-55">
                <h5 className="bottom-line mb-25">Teachers &amp; Students</h5>
                <h2>What you Looking For?</h2>
              </div>
            </div>
          </div>
          <div className="row mb-85">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div
                className="what-box text-center mb-35 wow fadeInUp2 animated"
                data-wow-delay=".3s"
              >
                <div className="what-box__icon mb-30">
                  <img src="assets/img/icon/phone-operator.svg" alt="" />
                </div>
                <h3>Do you want to teach here?</h3>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  di nonumy eirmod tempor invidunt ut labore et dolore magn aliq
                  erat.
                </p>
                <a href="contact.html" className="theme_btn border_btn">
                  Register Now
                </a>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div
                className="what-box text-center mb-35 wow fadeInUp2 animated"
                data-wow-delay=".3s"
              >
                <div className="what-box__icon mb-30">
                  <img src="assets/img/icon/graduate.svg" alt="" />
                </div>
                <h3>Do you want to learn here?</h3>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  di nonumy eirmod tempor invidunt ut labore et dolore magn aliq
                  erat.
                </p>
                <a href="contact.html" className="theme_btn border_btn active">
                  Register Now
                </a>
              </div>
            </div>
          </div>
          <div className="categoris-container">
            <div className="col-xl-12">
              <div className="section-title text-center mb-55">
                <h5 className="bottom-line mb-25">Browse Categories</h5>
                <h2>Explore our Online Subjects</h2>
              </div>
            </div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-5">
              <div className="col">
                <div
                  className="single-category text-center mb-30 wow fadeInUp2 animated"
                  data-wow-delay=".1s"
                >
                  <img
                    className="mb-30"
                    src="assets/img/category-icon/atom.svg"
                    alt=""
                  />
                  <h4 className="sub-title mb-10">
                    <a href="course-details.html">Science</a>
                  </h4>
                  <p>126+ Courses Available</p>
                </div>
              </div>
              <div className="col">
                <div
                  className="single-category text-center mb-30 wow fadeInUp2 animated"
                  data-wow-delay=".2s"
                >
                  <img
                    className="mb-30"
                    src="assets/img/category-icon/web-development.svg"
                    alt=""
                  />
                  <h4 className="sub-title mb-10">
                    <a href="course-details.html">Development</a>
                  </h4>
                  <p>325+ Courses Available</p>
                </div>
              </div>
              <div className="col">
                <div
                  className="single-category text-center mb-30 wow fadeInUp2 animated"
                  data-wow-delay=".3s"
                >
                  <img
                    className="mb-30"
                    src="assets/img/category-icon/atom.svg"
                    alt=""
                  />
                  <h4 className="sub-title mb-10">
                    <a href="course-details.html">Science</a>
                  </h4>
                  <p>95+ Courses Available</p>
                </div>
              </div>
              <div className="col">
                <div
                  className="single-category text-center mb-30 wow fadeInUp2 animated"
                  data-wow-delay=".4s"
                >
                  <img
                    className="mb-30"
                    src="assets/img/category-icon/career-path.svg"
                    alt=""
                  />
                  <h4 className="sub-title mb-10">
                    <a href="course-details.html">Career</a>
                  </h4>
                  <p>156+ Courses Available</p>
                </div>
              </div>
              <div className="col">
                <div
                  className="single-category text-center mb-30 wow fadeInUp2 animated"
                  data-wow-delay=".5s"
                >
                  <img
                    className="mb-30"
                    src="assets/img/category-icon/graphic-tool.svg"
                    alt=""
                  />
                  <h4 className="sub-title mb-10">
                    <a href="course-details.html">Arts &amp; Design</a>
                  </h4>
                  <p>136+ Courses Available</p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div
                className="col-md-12 mt-20 text-center mb-20 wow fadeInUp2 animated"
                data-wow-delay=".6s"
              >
                <a href="courses.html" className="theme_btn">
                  All Categories
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*what-loking-for end*/}
    {/* case-gallery start */}
    <section className="feature-course pt-150 pb-130 pt-md-95 pb-md-80 pt-xs-95 pb-xs-80">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="section-title text-center mb-50">
              <h5 className="bottom-line mb-25">Featured Courses</h5>
              <h2>Explore our Popular Courses</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-12 text-center">
            <div className="portfolio-menu mb-30">
              <button className="gf_btn active" data-filter="*">
                All
              </button>
              <button className="gf_btn" data-filter=".cat1">
                Career
              </button>
              <button className="gf_btn" data-filter=".cat2">
                Development
              </button>
              <button className="gf_btn" data-filter=".cat3">
                Business
              </button>
              <button className="gf_btn" data-filter=".cat4">
                science
              </button>
              <button className="gf_btn" data-filter=".cat5">
                Design
              </button>
            </div>
          </div>
        </div>
        <div className="grid row">
          <div className="col-lg-4 col-md-6 grid-item cat2 cat3">
            <div className="z-gallery mb-30">
              <div className="z-gallery__thumb mb-20">
                <a href="course-details.html">
                  <img
                    className="img-fluid"
                    src="assets/img/course/01.png"
                    alt=""
                  />
                </a>
                <div className="feedback-tag">4.8(256)</div>
                <div className="heart-icon">
                  <i className="fas fa-heart" />
                </div>
              </div>
              <div className="z-gallery__content">
                <div className="course__tag mb-15">
                  <span>Science</span>
                  <span>Lab</span>
                  <a className="f-right" href="instructor-details.html">
                    <img src="assets/img/course/in1.png" alt="" />
                  </a>
                </div>
                <h4 className="sub-title mb-20">
                  <a href="course-details.html">
                    Take Your Career to the Next Level Future
                  </a>
                </h4>
                <div className="course__meta">
                  <span>
                    <img
                      className="icon"
                      src="assets/img/icon/time.svg"
                      alt="course-meta"
                    />{" "}
                    12 Class
                  </span>
                  <span>
                    <img
                      className="icon"
                      src="assets/img/icon/bar-chart.svg"
                      alt="course-meta"
                    />{" "}
                    Higher
                  </span>
                  <span>
                    <img
                      className="icon"
                      src="assets/img/icon/user.svg"
                      alt="course-meta"
                    />{" "}
                    6395+
                  </span>
                  <span>$260</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 grid-item cat1 cat3 cat4">
            <div className="z-gallery mb-30">
              <div className="z-gallery__thumb mb-20">
                <a href="course-details.html">
                  <img
                    className="img-fluid"
                    src="assets/img/course/02.png"
                    alt=""
                  />
                </a>
                <div className="feedback-tag">4.8(256)</div>
                <div className="heart-icon">
                  <i className="fas fa-heart" />
                </div>
              </div>
              <div className="z-gallery__content">
                <div className="course__tag mb-15">
                  <span>Science</span>
                  <span>Lab</span>
                  <a className="f-right" href="instructor-details.html">
                    <img src="assets/img/course/in2.png" alt="" />
                  </a>
                </div>
                <h4 className="sub-title mb-20">
                  <a href="course-details.html">
                    Your Career to build for the pro level
                  </a>
                </h4>
                <div className="course__meta">
                  <span>
                    <img
                      className="icon"
                      src="assets/img/icon/time.svg"
                      alt="course-meta"
                    />{" "}
                    12 Class
                  </span>
                  <span>
                    <img
                      className="icon"
                      src="assets/img/icon/bar-chart.svg"
                      alt="course-meta"
                    />{" "}
                    Higher
                  </span>
                  <span>
                    <img
                      className="icon"
                      src="assets/img/icon/user.svg"
                      alt="course-meta"
                    />{" "}
                    6395+
                  </span>
                  <span>$260</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 grid-item cat2 cat1 cat5">
            <div className="z-gallery mb-30">
              <div className="z-gallery__thumb mb-20">
                <a href="course-details.html">
                  <img
                    className="img-fluid"
                    src="assets/img/course/03.png"
                    alt=""
                  />
                </a>
                <div className="feedback-tag">4.8(256)</div>
                <div className="heart-icon">
                  <i className="fas fa-heart" />
                </div>
              </div>
              <div className="z-gallery__content">
                <div className="course__tag mb-15">
                  <span>Science</span>
                  <span>Lab</span>
                  <a className="f-right" href="instructor-details.html">
                    <img src="assets/img/course/in3.png" alt="" />
                  </a>
                </div>
                <h4 className="sub-title mb-20">
                  <a href="course-details.html">
                    Take A Course For You Biright Future
                  </a>
                </h4>
                <div className="course__meta">
                  <span>
                    <img
                      className="icon"
                      src="assets/img/icon/time.svg"
                      alt="course-meta"
                    />{" "}
                    12 Class
                  </span>
                  <span>
                    <img
                      className="icon"
                      src="assets/img/icon/bar-chart.svg"
                      alt="course-meta"
                    />{" "}
                    Higher
                  </span>
                  <span>
                    <img
                      className="icon"
                      src="assets/img/icon/user.svg"
                      alt="course-meta"
                    />{" "}
                    6395+
                  </span>
                  <span>$260</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 grid-item cat2 cat3">
            <div className="z-gallery mb-30">
              <div className="z-gallery__thumb mb-20">
                <a href="course-details.html">
                  <img
                    className="img-fluid"
                    src="assets/img/course/04.png"
                    alt=""
                  />
                </a>
                <div className="feedback-tag">4.8(256)</div>
                <div className="heart-icon">
                  <i className="fas fa-heart" />
                </div>
              </div>
              <div className="z-gallery__content">
                <div className="course__tag mb-15">
                  <span>Science</span>
                  <span>Lab</span>
                  <a className="f-right" href="instructor-details.html">
                    <img src="assets/img/course/in4.png" alt="" />
                  </a>
                </div>
                <h4 className="sub-title mb-20">
                  <a href="course-details.html">
                    Take Your Career to the Next Level Future
                  </a>
                </h4>
                <div className="course__meta">
                  <span>
                    <img
                      className="icon"
                      src="assets/img/icon/time.svg"
                      alt="course-meta"
                    />{" "}
                    12 Class
                  </span>
                  <span>
                    <img
                      className="icon"
                      src="assets/img/icon/bar-chart.svg"
                      alt="course-meta"
                    />{" "}
                    Higher
                  </span>
                  <span>
                    <img
                      className="icon"
                      src="assets/img/icon/user.svg"
                      alt="course-meta"
                    />{" "}
                    6395+
                  </span>
                  <span>$260</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 grid-item cat5 cat4">
            <div className="z-gallery mb-30">
              <div className="z-gallery__thumb mb-20">
                <a href="course-details.html">
                  <img
                    className="img-fluid"
                    src="assets/img/course/05.png"
                    alt=""
                  />
                </a>
                <div className="feedback-tag">4.8(256)</div>
                <div className="heart-icon">
                  <i className="fas fa-heart" />
                </div>
              </div>
              <div className="z-gallery__content">
                <div className="course__tag mb-15">
                  <span>Science</span>
                  <span>Lab</span>
                  <a className="f-right" href="instructor-details.html">
                    <img src="assets/img/course/in5.png" alt="" />
                  </a>
                </div>
                <h4 className="sub-title mb-20">
                  <a href="course-details.html">
                    Your Career to build for the pro level
                  </a>
                </h4>
                <div className="course__meta">
                  <span>
                    <img
                      className="icon"
                      src="assets/img/icon/time.svg"
                      alt="course-meta"
                    />{" "}
                    12 Class
                  </span>
                  <span>
                    <img
                      className="icon"
                      src="assets/img/icon/bar-chart.svg"
                      alt="course-meta"
                    />{" "}
                    Higher
                  </span>
                  <span>
                    <img
                      className="icon"
                      src="assets/img/icon/user.svg"
                      alt="course-meta"
                    />{" "}
                    6395+
                  </span>
                  <span>$260</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 grid-item cat3 cat1">
            <div className="z-gallery mb-30">
              <div className="z-gallery__thumb mb-20">
                <a href="course-details.html">
                  <img
                    className="img-fluid"
                    src="assets/img/course/06.png"
                    alt=""
                  />
                </a>
                <div className="feedback-tag">4.8(256)</div>
                <div className="heart-icon">
                  <i className="fas fa-heart" />
                </div>
              </div>
              <div className="z-gallery__content">
                <div className="course__tag mb-15">
                  <span>Science</span>
                  <span>Lab</span>
                  <a className="f-right" href="instructor-details.html">
                    <img src="assets/img/course/in6.png" alt="" />
                  </a>
                </div>
                <h4 className="sub-title mb-20">
                  <a href="course-details.html">
                    Take A Course For You Biright Future
                  </a>
                </h4>
                <div className="course__meta">
                  <span>
                    <img
                      className="icon"
                      src="assets/img/icon/time.svg"
                      alt="course-meta"
                    />{" "}
                    12 Class
                  </span>
                  <span>
                    <img
                      className="icon"
                      src="assets/img/icon/bar-chart.svg"
                      alt="course-meta"
                    />{" "}
                    Higher
                  </span>
                  <span>
                    <img
                      className="icon"
                      src="assets/img/icon/user.svg"
                      alt="course-meta"
                    />{" "}
                    6395+
                  </span>
                  <span>$260</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className="col-lg-12 mt-20 text-center mb-20 wow fadeInUp2 animated"
            data-wow-delay=".3s"
          >
            <a href="courses.html" className="theme_btn">
              All Categories
            </a>
          </div>
        </div>
      </div>
    </section>
    {/* case-gallery end */}
    {/* why-chose-section-wrapper start */}
    <div className="why-chose-section-wrapper gradient-bg mr-100 ml-100">
      {/* why-chose-us start */}
      <section className="why-chose-us">
        <div className="why-chose-us-bg pt-150 pb-175 pt-md-95 pb-md-90 pt-xs-95 pb-xs-90">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-7 col-lg-7">
                <div className="chose-img-wrapper mb-50 pos-rel">
                  <div className="coures-member">
                    <h5>Total Students</h5>
                    <img
                      className="choses chose_01"
                      src="assets/img/chose/01.png"
                      alt="Chose-img"
                    />
                    <img
                      className="choses chose_02"
                      src="assets/img/chose/02.png"
                      alt="Chose-img"
                    />
                    <img
                      className="choses chose_03"
                      src="assets/img/chose/03.png"
                      alt="Chose-img"
                    />
                    <img
                      className="choses chose_04"
                      src="assets/img/chose/04.png"
                      alt="Chose-img"
                    />
                    <span>25k+</span>
                  </div>
                  <div className="feature tag_01">
                    <span>
                      <img src="assets/img/icon/shield-check.svg" alt="" />
                    </span>{" "}
                    Safe &amp; Secured
                  </div>
                  <div className="feature tag_02">
                    <span>
                      <img src="assets/img/icon/catalog.svg" alt="" />
                    </span>{" "}
                    120+ Catalog
                  </div>
                  <div className="feature tag_03">
                    <span>
                      <i className="fal fa-check" />
                    </span>{" "}
                    Quality Education
                  </div>
                  <div className="video-wrapper">
                    <a
                      href="https://www.youtube.com/watch?v=7omGYwdcS04"
                      className="popup-video"
                    >
                      <i className="fas fa-play" />
                    </a>
                  </div>
                  <div className="img-bg pos-rel">
                    <img
                      className="chose_05 pl-70 pl-lg-0 pl-md-0 pl-xs-0"
                      src="assets/img/chose/05.png"
                      alt="Chose-img"
                    />
                  </div>
                  <img
                    className="chose chose_06"
                    src="assets/img/shape/dot-box3.svg"
                    alt="Chose-img"
                  />
                </div>
              </div>
              <div className="col-xl-5 col-lg-5">
                <div className="chose-wrapper pl-25 pl-lg-0 pl-md-0 pl-xs-0">
                  <div
                    className="section-title mb-30 wow fadeInUp2 animated"
                    data-wow-delay=".1s"
                  >
                    <h5 className="bottom-line mb-25">Explore Zoomy</h5>
                    <h2 className="mb-25">Why Choose Zoomy?</h2>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form. There are many variations of passages of Lorem
                      Ipsum available.
                    </p>
                  </div>
                  <ul
                    className="text-list mb-40 wow fadeInUp2 animated"
                    data-wow-delay=".2s"
                  >
                    <li>
                      There are many variations of passages of Lorem Ipsum.
                    </li>
                    <li>
                      The majority have suffered alteration in some form.{" "}
                    </li>
                    <li>
                      There are many variations of passages of Lorem Ipsum.
                    </li>
                  </ul>
                  <a
                    href="about.html"
                    className="theme_btn wow fadeInUp2 animated"
                    data-wow-delay=".3s"
                  >
                    More Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* why-chose-us end */}
      {/* course-instructor start */}
      <section className="course-instructor nav-style-two pos-rel">
        <div className="course-blur-shape" />
        <div className="course-bg-space pt-150 pb-120 pt-md-95 pb-md-70 pt-xs-95 pb-xs-70">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-9">
                <div className="section-title text-center text-md-start mb-60">
                  <h5 className="bottom-line mb-25">Our Instructor</h5>
                  <h2 className="mb-25">Explore Experienced Instructor</h2>
                </div>
              </div>
            </div>
            <div className="instructor-active owl-carousel">
              <div className="item">
                <div className="z-instructors text-center mb-30">
                  <div className="z-instructors__thumb mb-15">
                    <img src="assets/img/instructor/01.jpg" alt="" />
                    <div className="social-media">
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fab fa-instagram" />
                      </a>
                      <a href="#">
                        <i className="fab fa-youtube" />
                      </a>
                    </div>
                  </div>
                  <div className="z-instructors__content">
                    <h4 className="sub-title mb-10">
                      <a href="instructor-profile.html">John Zlathan</a>
                    </h4>
                    <p>Software Development</p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="z-instructors text-center mb-30">
                  <div className="z-instructors__thumb mb-15">
                    <img src="assets/img/instructor/02.jpg" alt="" />
                    <div className="social-media">
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fab fa-instagram" />
                      </a>
                      <a href="#">
                        <i className="fab fa-youtube" />
                      </a>
                    </div>
                  </div>
                  <div className="z-instructors__content">
                    <h4 className="sub-title mb-10">
                      <a href="instructor-profile.html">Mally Yan</a>
                    </h4>
                    <p>UI/UX Designer</p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="z-instructors text-center mb-30">
                  <div className="z-instructors__thumb mb-15">
                    <img src="assets/img/instructor/03.jpg" alt="" />
                    <div className="social-media">
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fab fa-instagram" />
                      </a>
                      <a href="#">
                        <i className="fab fa-youtube" />
                      </a>
                    </div>
                  </div>
                  <div className="z-instructors__content">
                    <h4 className="sub-title mb-10">
                      <a href="instructor-profile.html">Mesud Lamb</a>
                    </h4>
                    <p>Programmer</p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="z-instructors text-center mb-30">
                  <div className="z-instructors__thumb mb-15">
                    <img src="assets/img/instructor/04.jpg" alt="" />
                    <div className="social-media">
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fab fa-instagram" />
                      </a>
                      <a href="#">
                        <i className="fab fa-youtube" />
                      </a>
                    </div>
                  </div>
                  <div className="z-instructors__content">
                    <h4 className="sub-title mb-10">
                      <a href="instructor-profile.html">Havana Lyon</a>
                    </h4>
                    <p>Digital Marketing</p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="z-instructors text-center mb-30">
                  <div className="z-instructors__thumb mb-15">
                    <img src="assets/img/instructor/01.jpg" alt="" />
                    <div className="social-media">
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fab fa-instagram" />
                      </a>
                      <a href="#">
                        <i className="fab fa-youtube" />
                      </a>
                    </div>
                  </div>
                  <div className="z-instructors__content">
                    <h4 className="sub-title mb-10">
                      <a href="instructor-profile.html">John Zlathan</a>
                    </h4>
                    <p>Software Development</p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="z-instructors text-center mb-30">
                  <div className="z-instructors__thumb mb-15">
                    <img src="assets/img/instructor/02.jpg" alt="" />
                    <div className="social-media">
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fab fa-instagram" />
                      </a>
                      <a href="#">
                        <i className="fab fa-youtube" />
                      </a>
                    </div>
                  </div>
                  <div className="z-instructors__content">
                    <h4 className="sub-title mb-10">
                      <a href="instructor-profile.html">Mally Yan</a>
                    </h4>
                    <p>UI/UX Designer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* course-instructor end */}
    </div>
    {/* why-chose-section-wrapper start */}
    {/* testimonial-area start */}
    <section className="testimonial-area testimonial-pad pt-150 pb-120 pt-md-95 pb-md-70 pt-xs-95 pb-xs-70">
      <div className="container custom-container-testimonial">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <div className="section-title text-center text-md-start mb-35">
              <h5 className="bottom-line mb-25">Our Instructor</h5>
              <h2 className="mb-25">Explore Experienced Instructor</h2>
            </div>
          </div>
          <div className="col-lg-4 text-center text-lg-end">
            <a href="instructor.html" className="theme_btn">
              Read All Reviews
            </a>
          </div>
        </div>
        <div className="row testimonial-active-01">
          <div className="col-xl-3">
            <div className="item">
              <div className="testimonial-wrapper mb-30">
                <div className="testimonial-authors overflow-hidden mb-15">
                  <div className="testimonial-authors__avatar">
                    <img
                      src="assets/img/testimonial/01.png"
                      alt="testi-author"
                    />
                  </div>
                  <div className="testimonial-authors__content mt-10">
                    <h4 className="sub-title">Georgia Laila</h4>
                    <p>Full Stack Developer</p>
                  </div>
                </div>
                <p>
                  " Lorem ipsum dolor sit amet, consetetur sadip scing elitr,
                  sed di nonumy eirmod tempor invidt utlabore et dolore magn
                  aliq erat.
                </p>
                <div className="quote-icon mt-20">
                  <img src="assets/img/icon/quote.svg" alt="quote-icon" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3">
            <div className="item">
              <div className="testimonial-wrapper mb-30">
                <div className="testimonial-authors overflow-hidden mb-15">
                  <div className="testimonial-authors__avatar">
                    <img
                      src="assets/img/testimonial/02.png"
                      alt="testi-author"
                    />
                  </div>
                  <div className="testimonial-authors__content mt-10">
                    <h4 className="sub-title">Emily Gemon</h4>
                    <p>User Interface</p>
                  </div>
                </div>
                <p>
                  " Lorem ipsum dolor sit amet, consetetur sadip scing elitr,
                  sed di nonumy eirmod tempor invidt utlabore et dolore magn
                  aliq erat.
                </p>
                <div className="quote-icon mt-20">
                  <img src="assets/img/icon/quote.svg" alt="quote-icon" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3">
            <div className="item">
              <div className="testimonial-wrapper mb-30">
                <div className="testimonial-authors overflow-hidden mb-15">
                  <div className="testimonial-authors__avatar">
                    <img
                      src="assets/img/testimonial/03.png"
                      alt="testi-author"
                    />
                  </div>
                  <div className="testimonial-authors__content mt-10">
                    <h4 className="sub-title">Micheal George</h4>
                    <p>Content Writer</p>
                  </div>
                </div>
                <p>
                  " Lorem ipsum dolor sit amet, consetetur sadip scing elitr,
                  sed di nonumy eirmod tempor invidt utlabore et dolore magn
                  aliq erat.
                </p>
                <div className="quote-icon mt-20">
                  <img src="assets/img/icon/quote.svg" alt="quote-icon" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3">
            <div className="item">
              <div className="testimonial-wrapper mb-30">
                <div className="testimonial-authors overflow-hidden mb-15">
                  <div className="testimonial-authors__avatar">
                    <img
                      src="assets/img/testimonial/01.png"
                      alt="testi-author"
                    />
                  </div>
                  <div className="testimonial-authors__content mt-10">
                    <h4 className="sub-title">Georgia Laila</h4>
                    <p>Full Stack Developer</p>
                  </div>
                </div>
                <p>
                  " Lorem ipsum dolor sit amet, consetetur sadip scing elitr,
                  sed di nonumy eirmod tempor invidt utlabore et dolore magn
                  aliq erat.
                </p>
                <div className="quote-icon mt-20">
                  <img src="assets/img/icon/quote.svg" alt="quote-icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* testimonial-area end */}
    {/* blog-area start */}
    <section className="blog-area mr-100 ml-100">
      <div className="blog-bg gradient-bg pl-100 pr-100 pt-150 pb-120 pt-md-100 pb-md-70 pt-xs-100 pb-xs-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center mb-60">
                <h5 className="bottom-line mb-25">Latest News</h5>
                <h2 className="mb-25">Lots of new Blogs &amp; News</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div
                className="z-blogs mb-30 wow fadeInUp2 animated"
                data-wow-delay=".1s"
              >
                <div className="z-blogs__thumb mb-30">
                  <a href="blog-details.html">
                    <img src="assets/img/blog/01.jpg" alt="blog-img" />
                  </a>
                </div>
                <div className="z-blogs__content">
                  <h5 className="mb-25">Online . School . Skill</h5>
                  <h4 className="sub-title mb-15">
                    <a href="blog-details.html">
                      5 Ways to Use Padlet in Higher -Ed Online Classroom
                    </a>
                  </h4>
                  <div className="z-blogs__meta d-sm-flex justify-content-between pt-20">
                    <span>Date : June 15 , 2021</span>
                    <span>By Guest Admin</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="z-blogs mb-30 wow fadeInUp2 animated"
                data-wow-delay=".2s"
              >
                <div className="z-blogs__thumb mb-30">
                  <a href="blog-details.html">
                    <img src="assets/img/blog/02.jpg" alt="blog-img" />
                  </a>
                </div>
                <div className="z-blogs__content">
                  <h5 className="mb-25">Education . Expert</h5>
                  <h4 className="sub-title mb-15">
                    <a href="blog-details.html">
                      4 New Zoom Features Enhance Virtual Teaching &amp;
                      Learning
                    </a>
                  </h4>
                  <div className="z-blogs__meta d-sm-flex justify-content-between pt-20">
                    <span>Date : June 15 , 2021</span>
                    <span>By Guest Admin</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="z-blogs mb-30 wow fadeInUp2 animated"
                data-wow-delay=".3s"
              >
                <div className="z-blogs__thumb mb-30">
                  <a href="blog-details.html">
                    <img src="assets/img/blog/03.jpg" alt="blog-img" />
                  </a>
                </div>
                <div className="z-blogs__content">
                  <h5 className="mb-25">Creative . Programmer</h5>
                  <h4 className="sub-title mb-15">
                    <a href="blog-details.html">
                      Using Social Media to Support Online Teaching
                    </a>
                  </h4>
                  <div className="z-blogs__meta d-sm-flex justify-content-between pt-20">
                    <span>Date : June 15 , 2021</span>
                    <span>By Guest Admin</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-lg-12 text-center mt-20 mb-30 wow fadeInUp2 animated"
              data-wow-delay=".4s"
            >
              <a href="blog-details.html" className="theme_btn">
                Load More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* blog-area end */}
    {/* subscribe-area start */}
    <section className="subscribe-area border-bot pt-145 pb-50 pt-md-90 pt-xs-90">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8">
            <div className="subscribe-wrapper text-center mb-30">
              <h2>Subscribe our Newsletter &amp; Get every updates.</h2>
              <div className="subscribe-form-box pos-rel">
                <form className="subscribe-form">
                  <input type="text" placeholder="Write Your E-mail" />
                </form>
                <button className="sub_btn">Subscribe Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* subscribe-area end */}
  </main>
  {/*footer-area start*/}
  <footer className="footer-area pt-70 pb-40">
    <div className="container">
      <div className="row mb-15">
        <div
          className="col-xl-3 col-lg-4 col-md-6  wow fadeInUp2 animated"
          data-wow-delay=".1s"
        >
          <div className="footer__widget mb-30">
            <div className="footer-log mb-20">
              <a href="index.html" className="logo">
                <img src="assets/img/logo/header_logo_one.svg" alt="" />
              </a>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadip scing elitr, sed di
              nonumy eirmod temporinvi dunt ut labore lorem ipsum.
            </p>
            <div className="social-media footer__social mt-30">
              <a href="#">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#">
                <i className="fab fa-twitter" />
              </a>
              <a href="#">
                <i className="fab fa-linkedin-in" />
              </a>
              <a href="#">
                <i className="fab fa-google-plus-g" />
              </a>
            </div>
          </div>
        </div>
        <div
          className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp2 animated"
          data-wow-delay=".3s"
        >
          <div className="footer__widget mb-30 pl-40 pl-md-0 pl-xs-0">
            <h6 className="widget-title mb-35">Contact us</h6>
            <ul className="fot-list">
              <li>
                <a href="#">info@example.com</a>
              </li>
              <li>
                <a href="#">+00 235 695 58</a>
              </li>
              <li>
                <a href="#">Terms &amp; Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="contact.html">Contacts</a>
              </li>
              <li>
                <a href="#">Our Careers</a>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="col-xl-3 col-lg-4 col-md-6  wow fadeInUp2 animated"
          data-wow-delay=".5s"
        >
          <div className="footer__widget mb-25 pl-90 pl-md-0 pl-xs-0">
            <h6 className="widget-title mb-35">Quick Links</h6>
            <ul className="fot-list">
              <li>
                <a href="about.html">About US</a>
              </li>
              <li>
                <a href="#">Explore Pages</a>
              </li>
              <li>
                <a href="#">Our Services</a>
              </li>
              <li>
                <a href="#">Destinations</a>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="col-xl-3 col-lg-6 col-md-6  wow fadeInUp2 animated"
          data-wow-delay=".7s"
        >
          <div className="footer__widget mb-30 pl-150 pl-lg-0 pl-md-0 pl-xs-0">
            <h6 className="widget-title mb-35">Features</h6>
            <ul className="fot-list mb-30">
              <li>
                <a href="index.html">Home Page</a>{" "}
              </li>
              <li>
                <a href="#">Testimonials</a>
              </li>
              <li>
                <a href="blog.html">Latest News</a>
              </li>
              <li>
                <a href="#">Help Center</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="copy-right-area border-bot pt-40">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <div className="copyright text-center">
              <h5>
                Copyright@ 2021 <a href="#">Brainer Education</a>. All Rights Reserved
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  {/*footer-area end*/}
  {/* JS here */}
</>




        </>
    )
}

export default About