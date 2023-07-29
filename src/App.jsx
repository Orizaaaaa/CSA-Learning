import PageContent from "./pages/PageContent"
import EmailAplication from "./pages/EmailAplication";
import Sidebar from "./pages/Sidebar"
import Course from "./pages/Course";
import PhotoGalery from "./pages/PhotoGalery";
import OnlineStore from "./pages/OnlineStore"
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
      </Routes>
    </>
  )
}


export default App