import React from 'react'
import AuthLayout from '../components/Layout/AuthLayout'
//ini adalah halaman yang menampilkan dari detail materi yang telah di klik oleh user
function DetailCourse() {
    return (

        <AuthLayout>
            <p>ini adalah halaman yang menampilkan dari detail materi yang telah di klik oleh user, seharus nya sebelum masuk ke halaman ini masuk dulu ke halaman course inside</p>
            <div className="ratio modulLearning ratio-16x9">
                <iframe className="modulLearning-item" src="https://www.youtube.com/embed/lkIFF4maKMU" title="YouTube video" allowFullScreen></iframe>
            </div>

        </AuthLayout>
    )
}

export default DetailCourse