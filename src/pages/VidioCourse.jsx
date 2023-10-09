import React from 'react'
import AuthLayout from '../components/Layout/AuthLayout'
function VidioCourse() {
    return (

        <AuthLayout>
            <div className="vidioCourse ratio ratio-16x9">
                <iframe className="modulLearning-item" src="https://www.youtube.com/embed/lkIFF4maKMU" title="YouTube video" allowFullScreen></iframe>
            </div>

        </AuthLayout>
    )
}

export default VidioCourse