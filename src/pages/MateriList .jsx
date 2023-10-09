import React from 'react'
import AuthLayout from '../components/Layout/AuthLayout'
import { Link } from 'react-router-dom'


function MateriList() {
    return (
        <AuthLayout>
            <h4 >Belajar dasar HTML</h4>

            <section className="materiList mt-5 d-flex align-items-center">
                <div className="container">

                    <div className="row row-cols-auto gap-3" >

                        <Link to={'/VidioCourse'} style={{ textDecoration: 'none' }}>
                            <div className="col p-3" >
                                <h5 className="fw-4">Apa itu HTML</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </div>
                        </Link>



                        <Link to={'/VidioCourse'} style={{ textDecoration: 'none' }}>
                            <div className="col p-3">
                                <h5 className="fw-4">Semantik Code</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                            </div>
                        </Link>

                        <Link to={'/VidioCourse'} style={{ textDecoration: 'none' }}>
                            <div className="col p-3">
                                <h5 className="fw-4">Image Elements</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                            </div>
                        </Link>

                        <Link to={'/VidioCourse'} style={{ textDecoration: 'none' }}>
                            <div className="col p-3">

                                <h5 className="fw-4">Audio & Vidio</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                            </div>
                        </Link>

                        <Link to={'/VidioCourse'} style={{ textDecoration: 'none' }}>
                            <div className="col p-3">

                                <h5 className="fw-4">Canvas</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                            </div>
                        </Link>

                        <Link to={'/VidioCourse'} style={{ textDecoration: 'none' }}>
                            <div className="col p-3">

                                <h5 className="fw-4">Svg</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                            </div>
                        </Link>


                    </div>
                </div>
            </section >


        </AuthLayout >
    )
}

export default MateriList 