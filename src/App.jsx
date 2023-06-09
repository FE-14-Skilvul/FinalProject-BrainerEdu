import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from './pages/landing'
import CourseDetail from './pages/courseDetail'
import About from './pages/about'
import Login from './section/login'
import Register from './section/register'

function App() {
    return (
        <>
            <BrowserRouter >
                <Routes >
                    <Route path="/" element={<Landing />} />
                    <Route path="/course-detail/:id" element={< CourseDetail />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App