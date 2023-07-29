import React from 'react'
import AuthLayout from '../components/Layout/AuthLayout'
import MateriCourse from '../components/Fragment/MateriCourse/MateriCourse'
import { People } from 'react-bootstrap-icons'

const courseList = [
    {
        id: 1,
        title: "Belajar Dasar HTML",
        materi: " 5 materi",
        image: "/images/Belajar-Dasar-HTML.png",
        location: '/EmailAplication'
    },
    {
        id: 1,
        title: "Belajar Dasar CSS",
        materi: " 20 materi",
        image: "/images/Belajar-Dasar-CSS.png",
        location: '/EmailAplication'
    },
    {
        id: 1,
        title: "Belajar Bootsrap CSS Framework",
        materi: " 5 materi",
        image: "/images/Belajar-Bootstrap-CSS-Framework.jpg",
        location: '/EmailAplication'
    },
    {
        id: 1,
        title: "Belajar Javascript DOM",
        materi: " 5 materi",
        image: "/images/Belajar_JavaScript_DOM.png",
        location: '/EmailAplication'
    },
    {
        id: 1,
        title: "Belajar Javascript OOP",
        materi: " 5 materi",
        image: "/images/Belajar_Konsep_OOP_di_JavaScript.jpg",
        location: '/EmailAplication'
    },
    {
        id: 1,
        title: "Belajar AJAX",
        materi: " 5 materi",
        image: "/images/ajax.png",
        location: '/EmailAplication'
    },
]


function Course() {
    return (
        <AuthLayout>
            <div className="courseHeader mx-auto">
                <img className='mb-4' src="/images/csaLogo.svg" />
                <p>Kelas online belajar Fullstack web developer from A to Z. Cocok buat yang pengen punya karir bagus, skill dibutuhin industri, gaji tinggi dan bisa bikin web atau aplikasi buat ngembangin bisnis online sendiri.</p>
                <div className="d-flex mt-5">
                    <People className='mt-1 me-2' />
                    <p  >120 Mahasiswa</p>
                </div>
            </div>

            <div class="container">
                <h2 class="fw-bold text-center mt-5 mb-5">Front End Dasar</h2>
                <div class="row row-cols-lg-4 row-cols-md-3 row-cols-2 g-2 ">

                    {courseList.map((courseList) => (
                        <MateriCourse key={courseList.id} title={courseList.title}
                            materi={courseList.materi} location={courseList.location} image={courseList.image} />
                    ))}



                </div>
            </div>
        </AuthLayout>
    )
}

export default Course