import AuthLayout from "../components/Layout/AuthLayout"

function EmailAplication() {
    return (
        <AuthLayout>
            <h1>Halaman Email</h1>

            {/* untuk mengambil vidio dari youtube nya dalah dengan mengambil link terakhir dari vidio youtube nya */}
            <div className="ratio modulLearning ratio-16x9">
                <iframe className="modulLearning-item" src="https://www.youtube.com/embed/lkIFF4maKMU" title="YouTube video" allowFullScreen></iframe>
            </div>

        </AuthLayout>
    )
}

export default EmailAplication