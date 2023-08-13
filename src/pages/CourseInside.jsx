import React from 'react'
import AuthLayout from '../components/Layout/AuthLayout'

function CourseInside() {
    return (
        <AuthLayout>
            <div>
                Halaman ini adalah berisikan ketika halaman Course awal yang di pilih maka akan masuk ke
                dalam halaman di mana terdapat materi yang di klik sebelum nya menjadi sub" materi seperti dari HTML 1 sampai 5
            </div>
            <section class="project mt-5 d-flex align-items-center">
                <div class="container">
                    <div class="row row-cols-lg-3 row-cols-md-2 row-cols-1 g-4">
                        <div class="col">
                            <img src="img/projects-1.jpg" alt="" srcset="" class="w-100 mb-3 rounded-3" />
                            <h5 class="fw-bold">Client Side NFT</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>

                        <div class="col">
                            <img src="img/projects-2.jpg" alt="" srcset="" class="w-100 mb-3 rounded-3" />
                            <h5 class="fw-bold">UI UX E- Learning</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi tempora distinctio, excepturi
                                similique dolor unde voluptate eaque!s.</p>
                        </div>
                        <div class="col">
                            <img src="img/projects-3.jpg" alt="" srcset="" class="w-100 mb-3 rounded-3" />
                            <h5 class="fw-bold">Aplikasi Absen Sekolah</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi tempora distinctio, excepturi
                                similique dolor unde voluptate eaque!s.</p>
                        </div>
                        <div class="col">
                            <img src="img/projects-4.jpg" alt="" srcset="" class="w-100 mb-3 rounded-3" />
                            <h5 class="fw-bold">Aplikasi Absen Sekolah</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi tempora distinctio, excepturi
                                similique dolor unde voluptate eaque!s.</p>
                        </div>
                        <div class="col">
                            <img src="img/projects-5.jpg" alt="" srcset="" class="w-100 mb-3 rounded-3" />
                            <h5 class="fw-bold">Logo Website</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi tempora distinctio, excepturi
                                similique dolor unde voluptate eaque!s.</p>
                        </div>
                        <div class="col">
                            <img src="img/projects-6.jpg" alt="" srcset="" class="w-100 mb-3 rounded-3" />
                            <h5 class="fw-bold">Logo Website</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi tempora distinctio, excepturi
                                similique dolor unde voluptate eaque!s.</p>
                        </div>
                    </div>
                </div>
            </section>

        </AuthLayout>
    )
}

export default CourseInside