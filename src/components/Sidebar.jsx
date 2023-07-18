import React from 'react';
import { Speedometer2 } from 'react-bootstrap-icons';
import { Envelope } from 'react-bootstrap-icons';
import { ChatDots } from 'react-bootstrap-icons';
import { Image } from 'react-bootstrap-icons';
import { PersonBadge } from 'react-bootstrap-icons';
import { Basket } from 'react-bootstrap-icons';
import { X } from 'react-bootstrap-icons';
import { NavLink } from 'react-router-dom';
import useSidebarState from './useSidebarState';
import csaLogo from '../assets/img/csaLogo.svg'



function Sidebar() {

    const { Xvalue, toggleXvalue } = useSidebarState();



    return (
        <div id="app">
            <div id="sidebar" className={Xvalue}  >
                <div className="sidebar-wrapper active ">
                    <div className="sidebar-header position-relative">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="csaLogo mx-auto">
                                <a href="#"><img src={csaLogo} alt="Logo" srcSet="" /></a>
                            </div>

                            <div className="sidebar-toggler  x" >
                                <a onClick={() => toggleXvalue()} href="#" className="sidebar-hide d-xl-none d-block"><X /></a>
                            </div>
                        </div>
                    </div>

                    <div className="sidebar-menu">
                        <ul className="menu">

                            <li className="sidebar-item active ">
                                <NavLink to="/PageContent" className='sidebar-link'>
                                    <Speedometer2 className='iconNavbar' />
                                    <span>Dashboard</span>
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
                                    <span>Checkout Page</span>
                                </a>
                            </li>

                            <li className="sidebar-item  has-sub">
                                <a href="#" className='sidebar-link'>
                                    <PersonBadge className='iconNavbar' />
                                    <span>Authentication</span>
                                </a>
                                <ul className="submenu ">
                                    <li className="submenu-item ">
                                        <a href="auth-login.html">Login</a>
                                    </li>
                                    <li className="submenu-item ">
                                        <a href="auth-register.html">Register</a>
                                    </li>
                                    <li className="submenu-item ">
                                        <a href="auth-forgot-password.html">Forgot Password</a>
                                    </li>
                                </ul>
                            </li>


                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
