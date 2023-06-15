import { useNavigate } from "react-router-dom";
import Landing from "../pages/landing"
import Cookies from 'js-cookie';
import swal from "sweetalert";
import Toast from "./toast";

const Logout = () => {
    Cookies.remove('userLogin');
    const navigate = useNavigate();
    navigate('/')
    // swal("Berhasil Logout!")

    return <>
        <Toast text={'Berhasil Logout'} />
        <Landing />
    </>
}

export default Logout