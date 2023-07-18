import Header from "../components/Header"
import caraosel from "../assets/img/caraosel1.svg"
import images8 from "../assets/img/images_8.svg"
function PageContent() {
    return (
        <div id="main" >
            <Header />
            <div className="page-content">
                <section className="row">
                    <div className="caraosel mt-4">
                        <div id="carouselExampleIndicators" className="carousel slide">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="innercaraosel d-flex mx-auto">
                                        <img src={images8} alt="" />
                                        <aside>
                                            <h4 >Artificial Intelligence for Marketing</h4>
                                            <p>Learn how artificial intelligence is reshaping the way marketing is done at both large and small organizations.</p>
                                            <button className="btn btn-dark mt-5" >Learn Now</button>
                                        </aside>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src={caraosel} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={caraosel} className="d-block w-100" alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default PageContent