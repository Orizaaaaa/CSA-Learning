import React from 'react'
import { ChevronRight } from 'react-bootstrap-icons'

function CourseProgres(props) {
    const { image, title, text } = props
    return (
        <div className="coursecard d-flex mb-4  ">
            <img className="codeigniter my-auto" src={image} alt="" />
            <div className="ms-3 my-auto">
                <h6 className="card-title">{title}</h6>
                <p className="card-text ">{text}</p>
            </div>

        </div>
    )
}

export default CourseProgres