import { useNavigate } from "react-router-dom";
import Button from "../components/button"
import Input from "../components/input"
import Auth from "../layout/auth"
import { useEffect, useState } from "react";
import axios from "axios";

const Login = () => {
    const API = import.meta.env.VITE_BASE_URL
    const navigate = useNavigate();
    const [formErrors, setFormErrors] = useState({
        email: '',
        password: '',
    });
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getDataUser = async () => {
            const response = await axios.get(`${API}/user`);
            setUsers(response.data);
        };
        getDataUser();
    }, []);
    const saveAccount = async (e) => {
        e.preventDefault();

        const data = new FormData(e.target)
        const formdata = Object.fromEntries(data.entries())
        const { errors, isValid } = validateForm(formdata, users)

        if (!isValid) {
            setFormErrors(errors)
            return;
        }
        const datauser = users.find(user => user.email === formdata.email);
        setCookie("userLogin", datauser);
        navigate('/')
    };
    return (
        <>
            <Auth onsubmit={saveAccount} title={'Login'} >
                {/* <Alert /> */}
                <Input message={formErrors.email} name={'email'} type="text" placeholder="Email" />
                <Input message={formErrors.password} name={'password'} type="password" placeholder="Password" />
                <Button text={'Simpan'} />
            </Auth>
        </>
    )
}

const validateForm = (formData, users) => {
    const { email, password } = formData;
    let isValid = true;
    const errors = {};
    const validateemail = users.some(user => user.email === email)
    const validatepassword = users.some(user => user.password === password)
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

    if (!validateemail || !validatepassword) {
        errors.email = 'Email atau password Tidak Terdaftar';
        isValid = false;
    }
    return { errors, isValid, validateemail, validatepassword };
};
function setCookie(name, value) {
    const date = new Date();
    date.setTime(date.getTime() + (24 * 60 * 60 * 1000)); // set the expiration time to 1 day
    const expires = "expires=" + date.toUTCString();
    const myObjStr = JSON.stringify(value);
    document.cookie = name + "=" + myObjStr + ";" + expires + ";path=/";
}

export default Login