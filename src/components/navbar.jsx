import { Link } from "react-router-dom"

const Navbar = () => {
    return ( <
        >
        <
        header >
        <
        div id = "theme-menu-two"
        className = "main-header-area pl-100 pr-100 pt-20 pb-15" >
        <
        div className = "container-fluid" >
        <
        div className = "row align-items-center" >
        <
        div className = "col-xl-2 col-lg-2 col-5" >
        <
        div className = "logo" >
        <
        a href = "index.html" >
        <
        img src = "/assets/img/logo/header_logo_one.svg"
        alt = "" / >
        <
        /a> <
        /div> <
        /div> <
        div className = "col-xl-7 col-lg-8 d-none d-lg-block" >
        <
        nav className = "main-menu navbar navbar-expand-lg justify-content-center" >
        <
        div className = "nav-container" >
        <
        div className = "collapse navbar-collapse"
        id = "navbarSupportedContent" >
        <
        ul className = "navbar-nav" >

        <
        li className = "nav-item" >
        <
        Link to = { '/' }
        className = "nav-link" >
        Beranda <
        /Link>

        <
        /li> <
        li className = "nav-item" >
        <
        Link to = { '/about' }
        className = "nav-link" >
        Tentang <
        /Link> <
        /li> <
        li className = "nav-item" >
        <
        a className = "nav-link"
        href = "contact.html"
        id = "navbarDropdown5"
        role = "button"
        aria - expanded = "false" >
        Jalur Belajar <
        /a> <
        /li> <
        li className = "nav-item" >
        <
        a className = "nav-link"
        href = "contact.html"
        id = "navbarDropdown5"
        role = "button"
        aria - expanded = "false" >
        Kontak <
        /a> <
        /li> <
        /ul> <
        /div> <
        /div> <
        /nav> <
        /div> <
        div className = "col-xl-3 col-lg-2 col-7" >
        <
        div className = "right-nav d-flex align-items-center justify-content-end" >
        <
        div className = "right-btn mr-25 mr-xs-15" >
        <
        ul className = "d-flex align-items-center" >
        <
        li >
        <
        a href = "contact.html"
        className = "theme_btn free_btn" >
        Coba Sekarang <
        /a> <
        /li> <
        li >
        <
        a className = "sign-in ml-20"
        href = "login.html" >
        <
        img src = "/assets/img/icon/user.svg"
        alt = "" / >
        <
        /a> <
        /li> <
        /ul> <
        /div> <
        div className = "hamburger-menu d-md-inline-block d-lg-none text-right" >
        <
        a href = "#" >
        <
        i className = "far fa-bars" / >
        <
        /a> <
        /div> <
        /div> <
        /div> <
        /div> <
        /div> <
        /div> <
        /header> <
        />
    )
}

export default Navbar