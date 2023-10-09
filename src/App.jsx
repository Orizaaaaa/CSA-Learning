import PageContent from "./pages/PageContent"
import Sidebar from "./pages/Sidebar"
import Course from "./pages/Course";
import PhotoGalery from "./pages/PhotoGalery";
import OnlineStore from "./pages/OnlineStore"
import ChoiseDivision from "./pages/ChoiseDivison";
import VidioCourse from "./pages/VidioCourse";
import MateriList from "./pages/MateriList ";
import Login from "./pages/Login";
import Register from "./pages/Register";


import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <Sidebar />

      <Routes>
        <Route path="/" element={<PageContent />} />
        <Route path="/PageContent" element={<PageContent />} />
        <Route path="/Course" element={<Course />} />
        <Route path="/PhotoGalery" element={<PhotoGalery />} />
        <Route path="/OnlineStore" element={<OnlineStore />} />
        <Route path="/ChoiseDivision" element={<ChoiseDivision />} />
        <Route path="/VidioCourse" element={<VidioCourse />} />
        <Route path="/Materilist" element={<MateriList />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />

      </Routes>
    </>
  )
}


export default App