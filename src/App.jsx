import PageContent from "./pages/PageContent"
import EmailAplication from "./pages/EmailAplication";
import Sidebar from "./pages/Sidebar"
import Course from "./pages/Course";
import PhotoGalery from "./pages/PhotoGalery";
import OnlineStore from "./pages/OnlineStore"
import ChoiseDivision from "./pages/ChoiseDivison";
import DetailCourse from "./pages/DetailCourse";
import CourseInside from "./pages/CourseInside"
import Login from "./pages/Login";


import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <Sidebar />

      <Routes>
        <Route path="/" element={<PageContent />} />
        <Route path="/PageContent" element={<PageContent />} />
        <Route path="/EmailAplication" element={<EmailAplication />} />
        <Route path="/Course" element={<Course />} />
        <Route path="/PhotoGalery" element={<PhotoGalery />} />
        <Route path="/OnlineStore" element={<OnlineStore />} />
        <Route path="/ChoiseDivision" element={<ChoiseDivision />} />
        <Route path="/DetailCourse" element={<DetailCourse />} />
        <Route path="/CourseInside" element={<CourseInside />} />
        <Route path="/Login" element={<Login />} />

      </Routes>
    </>
  )
}


export default App