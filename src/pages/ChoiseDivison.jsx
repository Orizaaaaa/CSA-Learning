import React from 'react'
import { NavLink } from 'react-router-dom'
import AuthLayout from '../components/Layout/AuthLayout'

function ChoiseDivision() {
    return (
        <AuthLayout>
            <section className="ChoiseDivision">
                <figure className="row mx-auto my-auto">
                    <div className="col d-grid justify-content-center" >
                        <NavLink to='/Course' > <img src="/images/pemrograman.jpg" /></NavLink>
                        <figcaption >
                            <h2 className='text-center' >PROGRAMING</h2>
                            <p>Divisi Pemrograman adalah tim ahli yang menciptakan solusi perangkat lunak inovatif. Melalui kolaborasi kreatif, kami mengubah ide menjadi kode yang efisien, mendorong kemajuan teknologi dan pengalaman pengguna yang unik.</p>
                        </figcaption>
                    </div>

                    <div className="col d-grid justify-content-center  " >
                        <NavLink><img src="/images/multiMedia.jpg" /></NavLink>
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