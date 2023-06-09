import { useNavigate } from "react-router-dom";
import Button from "../components/button"
import Input from "../components/input"
import Auth from "../layout/auth"
import { useState } from "react";
import axios from "axios";

const Login = () => {
    const API = import.meta.env.VITE_BASE_URL
    const navigate = useNavigate();
    const [formErrors, setFormErrors] = useState({
        email: '',
        password: '',
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
            const headers = {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Accept': 'application/json',
            };

            const response = await axios.post(API + '/login', formdata, { withCredentials: true, headers: headers });

            console.log(response);
            // navigate("/");

        } catch (error) {
            console.log(error);
            // setFormErrors({ email: error.response.data.msg })
        }

    };
    return (
        <>
            <Auth onsubmit={saveAccount} title={'Login'} >
                <Input message={formErrors.email} name={'email'} type="text" placeholder="Email" />
                <Input message={formErrors.password} name={'password'} type="password" placeholder="Password" />
                <Button text={'Simpan'} />
            </Auth>
        </>
    )
}

const validateForm = (formData) => {
    const { email, password } = formData;
    let isValid = true;
    const errors = {};
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
    }

    return { errors, isValid };
};
export default Login