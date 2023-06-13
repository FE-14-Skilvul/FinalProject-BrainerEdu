import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './pages/landing';
import CourseDetail from './pages/courseDetail';
import About from './pages/about';
import Register from './section/register';
import ContactUs from './pages/contactus';
import Skillpath from './pages/skillpath';
import Login from './section/login';
import Logout from './components/logout';
import Profile from './components/profile';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/course-detail/:id" element={<CourseDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/skillpath" element={<Skillpath />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
