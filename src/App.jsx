import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './pages/landing';
import CourseDetail from './pages/courseDetail';
import About from './pages/about';
import Register from './components/register';
import ContactUs from './pages/contactus';
import Skillpath from './pages/skillpath';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/course-detail/:id" element={<CourseDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/skillpath" element={<Skillpath />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
