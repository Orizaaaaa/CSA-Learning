import React from 'react'
import { NavLink } from 'react-router-dom'
import { Display } from 'react-bootstrap-icons'

function MateriCourse(props) {
    const { image, title, materi, location } = props
    return (
        <div class="col card p-3 ">
            <NavLink to={location}  >
                <img src={image} alt="" srcset="" className="w-100 mb-3 rounded-3" />
            </NavLink>
            <h6> {title}</h6>
            <div className="d-flex ">
                <Display className='mt-1 me-2' />
                <p> {materi}</p>
            </div>
        </div>
    )
}

export default MateriCourse