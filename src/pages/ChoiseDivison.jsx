import React from 'react'
import { NavLink } from 'react-router-dom'
import AuthLayout from '../components/Layout/AuthLayout'

function ChoiseDivision() {
    return (
        <AuthLayout>
            <section className="ChoiseDivision ">
                <figure className="row d-flex align-items-center justify-content-center row-cols-lg-2  row-cols-1">
                    <div className="col " >
                        <NavLink to='/Course' > <img src="/images/pemrograman.jpg" /></NavLink>
                        <figcaption >
                            <h2 className='text-center' >PROGRAMING</h2>
                            <p>Divisi Pemrograman adalah tim ahli yang menciptakan solusi perangkat lunak inovatif. Melalui kolaborasi kreatif, kami mengubah ide menjadi kode yang efisien, mendorong kemajuan teknologi dan pengalaman pengguna yang unik.</p>
                        </figcaption>
                    </div>

                    <div className="col" >
                        <NavLink ><img src="/images/multiMedia.jpg" className='mx-auto' /></NavLink>
                        <figcaption>
                            <h2 className='text-center'>MULTIMEDIA</h2>
                            <p>Multi media kami menggabungkan seni visual, audio, dan interaktif untuk menghasilkan pengalaman luar biasa. Kreativitas bertemu teknologi dalam setiap detail. Kami menggabungkan seni visual, audio, dan interaktif dalam multi media kami.</p>
                        </figcaption>
                    </div>

                </figure>
            </section>
        </AuthLayout>
    )
}

export default ChoiseDivision