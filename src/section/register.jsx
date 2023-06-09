import React, { useRef, useState } from 'react'
import Home from '../layout/home'
import Input from '../components/input'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Auth from '../layout/auth';
import Button from '../components/button';


const Register = () => {

    const API = import.meta.env.VITE_BASE_URL

    const navigate = useNavigate();
    const [formErrors, setFormErrors] = useState({
        nama: '',
        username: '',
        email: '',
        password: '',
        repassword: ''
    });

    const saveAccount = async (e) => {
        e.preventDefault();

        const data = new FormData(e.target)
        const formdata = Object.fromEntries(data.entries())
        const { errors, isValid } = validateForm(formdata)
        if (!isValid) {
            setFormErrors(errors)
            return;
        }

        try {
            const response = await axios.post(API + '/register', formdata, { withCredentials: true });

            navigate("/login");
        } catch (error) {
            console.log(error);
        }

    };
    return (
        <>
            <Auth onsubmit={saveAccount} title={'Register'} >
                <Input message={formErrors.nama} name={'nama'} type="text" placeholder="Nama Lengkap" />
                <Input message={formErrors.username} name={'username'} type="text" placeholder="Username" />
                <Input message={formErrors.email} name={'email'} type="text" placeholder="Email" />
                <Input message={formErrors.password} name={'password'} type="password" placeholder="Password" />
                <Input message={formErrors.repassword} name={'repassword'} type="password" placeholder="Ulangi Password" />
                <Button text={'Simpan'} />
                {/* <Link className="theme_btn message_btn mt-20 w-100">Masuk Ke Akun</Link> */}
            </Auth>
        </>
    )
}




const validateForm = (formData) => {
    const { nama, email, password, repassword } = formData;
    let isValid = true;
    const errors = {};

    if (!nama) {
        errors.nama = 'Nama Tidak Boleh Kosong';
        isValid = false;
    }

    if (!email) {
        errors.email = 'Email Tidak Boleh Kosong';
        isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        errors.email = 'Email tidak valid !';
        isValid = false;
    }

    if (!password) {
        errors.password = 'Password Tidak Boleh Kosong';
        isValid = false;
    } else if (password.length < 6) {
        errors.password = 'Password should be at least 6 characters long';
        isValid = false;
    } else if (!repassword) {
        errors.repassword = 'Password Tidak Boleh Kosong';
        isValid = false;
    } else if (password !== repassword) {
        errors.repassword = 'Password dan Konfirmasi Password tidak cocok !';
        isValid = false;
    }

    return { errors, isValid };
};

export default Register