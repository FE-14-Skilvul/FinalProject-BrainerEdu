import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from './pages/landing'
import CourseDetail from './pages/courseDetail'
import About from './pages/about'

function App() {
    return (
        <>
            <BrowserRouter >
                <Routes >
                    <Route path="/" element={<Landing />} />
                    <Route path="/course-detail/:id" element={< CourseDetail />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App