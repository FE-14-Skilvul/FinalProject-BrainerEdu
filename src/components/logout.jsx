import Landing from "../pages/landing"
import Cookies from 'js-cookie';

const Logout = () => {
    Cookies.remove('userLogin');
    return (
        <><Landing /></>
    )
}

export default Logout