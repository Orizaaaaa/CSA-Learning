import React from 'react'
import { NavLink } from 'react-router-dom'

function SideBarlist(props) {
    const { location, icon, title, condition } = props
    return (
        <li className={`sidebar-item ${condition}`}>
            <NavLink to={location} className='sidebar-link'>
                <div className='iconNavbar'>{icon} </div>
                <span>{title}</span>
            </NavLink>
        </li>
    )
}

export default SideBarlist