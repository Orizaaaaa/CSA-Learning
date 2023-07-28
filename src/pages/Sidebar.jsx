import React from 'react';
import { Speedometer2 } from 'react-bootstrap-icons';
import { Envelope } from 'react-bootstrap-icons';
import { ChatDots } from 'react-bootstrap-icons';
import { Image } from 'react-bootstrap-icons';
import { PersonBadge } from 'react-bootstrap-icons';
import { Basket } from 'react-bootstrap-icons';
import { NavLink } from 'react-router-dom';
import { X } from 'react-bootstrap-icons';
import { JournalCode } from 'react-bootstrap-icons';




function Sidebar() {

    return (
        <div className="sidebar-wrapper">
            <div className="sidebar">
                <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                    <X className="btn-close mx-10" data-bs-dismiss="offcanvas" aria-label="Close"></X>
                    <div className="offcanvas-header">
                        <img className='mx-auto' src="/images/csaLogo.svg" alt="" />

                    </div>

                    <div className="offcanvas-body ">
                        <ul className="menu me-4">

                            <li className="sidebar-item active ">
                                <NavLink to="/PageContent" className='sidebar-link'>
                                    <Speedometer2 className='iconNavbar' />
                                    <span>Dashboard</span>
                                </NavLink>
                            </li>

                            <li className="sidebar-item  ">
                                <NavLink to="/Course" className='sidebar-link' >
                                    <JournalCode className='iconNavbar' />
                                    <span>Course</span>
                                </NavLink>
                            </li>

                            <li className="sidebar-item  ">
                                <NavLink to="/EmailAplication" className='sidebar-link' >
                                    <Envelope className='iconNavbar' />
                                    <span>Email Application</span>
                                </NavLink>
                            </li>

                            <li className="sidebar-item  ">
                                <a href="application-chat.html" className='sidebar-link'>
                                    <ChatDots className='iconNavbar' />
                                    <span>Chat Application</span>
                                </a>
                            </li>

                            <li className="sidebar-item  ">
                                <a href="application-gallery.html" className='sidebar-link'>
                                    <Image className='iconNavbar' />
                                    <span>Photo Gallery</span>
                                </a>
                            </li>

                            <li className="sidebar-item  ">
                                <a href="application-checkout.html" className='sidebar-link'>
                                    <Basket className='iconNavbar' />
                                    <span>CSA Online Store</span>
                                </a>
                            </li>

                            <li className="sidebar-item  has-sub">
                                <a href="#" className='sidebar-link'>
                                    <PersonBadge className='iconNavbar' />
                                    <span>Logout</span>
                                </a>

                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
