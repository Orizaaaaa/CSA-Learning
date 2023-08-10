import Sayhai from "../components/Element/SayHai/Sayhai"
import AuthLayout from "../components/Layout/AuthLayout"
import CaraoselPage from "../components/Fragment/CaraoselPage/CaraoselPage"
import CourseProgres from "../components/Fragment/CourseProgres/CourseProgres"
import LearningPath from "../components/Fragment/LearningPath/LearningPath"
import CodeChalenge from "../components/Fragment/CodeChalenge/CodeChalenge"
import { caraosel1, codeigniter, diamond, firebase, principle } from "../image"



function PageContent() {
    return (

        <AuthLayout>
            <Sayhai name='oriza sativa' />
            <section className="row">
                <section className="caraoselPage col ">
                    <div className="caraosel mt-4">
                        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>

                            <div className="carousel-inner">
                                <CaraoselPage condition='active' interval='2000' image={caraosel1} title='Artificial Intelligence for Marketing' >
                                    Learn how artificial intelligence is reshaping the way marketing is done at both large and small organizations.
                                </CaraoselPage>

                                <CaraoselPage interval='2000' image={caraosel1} title='Artificial Intelligence for Marketing' >
                                    Learn how Front End is reshaping the way marketing is done at both large and small organizations.
                                </CaraoselPage>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="courseProgres col">
                    <h4>Course In Progress</h4>

                    <div className="mt-4">
                        <CourseProgres title='Build Your First Application' image={codeigniter} text='code igniter' />
                        <CourseProgres title='Build something beautiful' image={diamond} text='Sketch' />
                        <CourseProgres title='Firebase on Android Cloud Fire' image={firebase} text='Firebase' />
                        <CourseProgres title='Creating Custom Animations' image={principle} text='Principle' />

                    </div>


                </section>
            </section>

            <section className="row" >
                <section className="learningPath col">
                    <div className="d-flex">
                        <h5 className="mt-5" >Your learning path</h5>
                    </div>
                    <div className="container row d-flex">
                        <LearningPath title='Intro to React.js' location='/Course' time='12 hours of video tutorials' student='423 students' modalTitle='Intro To React.js' modalDesc='Do You Wont Go To Class React JS' />
                        <LearningPath title='Become a Front-End ' time='8 hours of video tutorials ' student='648 students' />
                        <LearningPath title='Basic Javascript' time='24 hours of video tutorals ' student='562 students' />
                    </div>
                </section>


                <section className="codeChalenge col mt-5">
                    <CodeChalenge />
                </section>

            </section>


        </AuthLayout>
    )
}

export default PageContent