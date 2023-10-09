import React from 'react'
import AuthLayout from '../components/Layout/AuthLayout'


function MateriList() {
    return (
        <AuthLayout>
            <h1 className='text-center' >Belajar dasar HTML</h1>

            <section className="materiList mt-5 d-flex align-items-center">
                <div className="container">
                    <div className="row row-cols-auto gap-3">
                        <div className="col">
                            <img src="img/projects-1.jpg" alt="" srcset="" className="w-100 mb-3 rounded-3" />
                            <h5 className="fw-bold">Client Side NFT</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>

                        <div className="col">
                            <img src="img/projects-2.jpg" alt="" srcset="" className="w-100 mb-3 rounded-3" />
                            <h5 className="fw-bold">UI UX E- Learning</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi tempora distinctio, excepturi
                                similique dolor unde voluptate eaque!s.</p>
                        </div>
                        <div className="col">
                            <img src="img/projects-3.jpg" alt="" srcset="" className="w-100 mb-3 rounded-3" />
                            <h5 className="fw-bold">Aplikasi Absen Sekolah</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi tempora distinctio, excepturi
                                similique dolor unde voluptate eaque!s.</p>
                        </div>
                        <div className="col">
                            <img src="img/projects-4.jpg" alt="" srcset="" className="w-100 mb-3 rounded-3" />
                            <h5 className="fw-bold">Aplikasi Absen Sekolah</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi tempora distinctio, excepturi
                                similique dolor unde voluptate eaque!s.</p>
                        </div>
                        <div className="col">
                            <img src="img/projects-5.jpg" alt="" srcset="" className="w-100 mb-3 rounded-3" />
                            <h5 className="fw-bold">Logo Website</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi tempora distinctio, excepturi
                                similique dolor unde voluptate eaque!s.</p>
                        </div>
                        <div className="col">
                            <img src="img/projects-6.jpg" alt="" srcset="" className="w-100 mb-3 rounded-3" />
                            <h5 className="fw-bold">Logo Website</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi tempora distinctio, excepturi
                                similique dolor unde voluptate eaque!s.</p>
                        </div>
                    </div>
                </div>
            </section>


        </AuthLayout>
    )
}

export default MateriList 