import Header from "../components/Header"
import caraosel from "../assets/img/caraosel1.svg"
import images8 from "../assets/img/images_8.svg"
import codeigniter from "../assets/img/codeigniter.svg"
import people1 from "../assets/img/people1.svg"
import star1 from "../assets/img/star1.svg"
import diamond from "../assets/img/diamond.svg"
import firebase from "../assets/img/firebase.svg"
import principle from "../assets/img/principle.svg"
import menuCard from "../assets/img/menuCard.svg"


function PageContent() {
    return (
        <div id="main" >
            <Header />
            <div className="page-content">

                <section className="row">
                    <section className="caraoselPage col">
                        <div className="caraosel mt-4">
                            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                </div>
                                <div className="carousel-inner">
                                    <div className="carousel-item active mb-5" data-bs-interval="50000">
                                        <div className="innercaraosel d-flex mx-auto" >
                                            <img src={images8} alt="" />
                                            <aside>
                                                <h4 >Artificial Intelligence for Marketing</h4>
                                                <p>Learn how artificial intelligence is reshaping the way marketing is done at both large and small organizations.</p>
                                                <button className="btn btn-dark mt-2" >Learn Now</button>
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

                    <aside className="courseProgres col">
                        <h6>Course In Progress</h6>
                        <div className="row">

                            <div className="col mt-4">
                                <div className="coursecard d-flex mb-4">
                                    <img className="codeigniter my-auto" src={codeigniter} alt="" />
                                    <div className="ms-3 my-auto">
                                        <h6 className="card-title">Build Your First Application</h6>
                                        <p className="card-text">code igniter</p>
                                    </div>
                                </div>
                                <div className="coursecard d-flex mb-4">
                                    <img className="codeigniter my-auto" src={diamond} alt="" />
                                    <div className="ms-3 my-auto">
                                        <h6 className="card-title">Build Your First Application</h6>
                                        <p className="card-text">code igniter</p>
                                    </div>
                                </div>
                                <div className="coursecard d-flex mb-4">
                                    <img className="codeigniter my-auto" src={firebase} alt="" />
                                    <div className="ms-3 my-auto">
                                        <h6 className="card-title">Build Your First Application</h6>
                                        <p className="card-text">code igniter</p>
                                    </div>
                                </div>
                                <div className="coursecard d-flex mb-4">
                                    <img className="codeigniter my-auto" src={principle} alt="" />
                                    <div className="ms-3 my-auto">
                                        <h6 className="card-title">Build Your First Application</h6>
                                        <p className="card-text">code igniter</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </aside>

                    <section className="learningPath">
                        <h5 className="mt-5" >Your learning path</h5>
                        <div className="container row row-cols-lg-3 row-cols-md-3 row-cols-2 g-2 ">


                            <div className="col">
                                <div className="card lerningcard">
                                    <div className="card-body">
                                        <h6>Intro to React.js</h6>
                                        <p>12 hours of video tutorials</p>
                                        <div className="mt-4" >
                                            <p>423 students</p>
                                            <div className="d-flex">
                                                <img src={people1} alt="" />
                                                <img src={star1} alt="" />
                                                <button> <img src={menuCard} alt="" /></button>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col">
                                <div className="card lerningcard">
                                    <div className="card-body">
                                        <h6>Become a Front-End </h6>
                                        <p>8 hours of video tutorials </p>
                                        <div className="mt-4" >
                                            <p>423 students</p>
                                            <div className="d-flex">
                                                <img src={people1} alt="" />
                                                <img src={star1} alt="" />
                                                <button> <img src={menuCard} alt="" /></button>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col">
                                <div className="card lerningcard">
                                    <div className="card-body">
                                        <h6 className="card-title">Basic Javascript</h6>
                                        <p className="card-text">24 hours of video tutorials </p>
                                        <div className="mt-4" >
                                            <p>423 students</p>
                                            <div className="d-flex">
                                                <img src={people1} alt="" />
                                                <img src={star1} alt="" />
                                                <button> <img src={menuCard} alt="" /></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                </section>
            </div>
        </div>
    )
}

export default PageContent