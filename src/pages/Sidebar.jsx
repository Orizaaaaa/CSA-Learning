import React from 'react';
import { Speedometer2 } from 'react-bootstrap-icons';
import { Envelope } from 'react-bootstrap-icons';
import { Image } from 'react-bootstrap-icons';
import { PersonBadge } from 'react-bootstrap-icons';
import { Basket } from 'react-bootstrap-icons';
import { X } from 'react-bootstrap-icons';
import { JournalCode } from 'react-bootstrap-icons';
import SideBarlist from '../components/Fragment/SideBarlist/SideBarlist';




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

                            <SideBarlist title='Dasboard' condition='active' icon={<Speedometer2 />} location='/PageContent' />
                            <SideBarlist title='Course' icon={<JournalCode />} location='/Course' />
                            <SideBarlist title='Email Application' icon={<Envelope />} location='/EmailAplication' />
                            <SideBarlist title='Photo Gallery' icon={<Image />} location='/PhotoGalery' />
                            <SideBarlist title='CSA Online Store' icon={<Basket />} location="/OnlineStore" />
                            <li className="sidebar-item" >
                                <button type="button" className='sidebar-link' >
                                    <div className='iconNavbar'> <PersonBadge /> </div>
                                    <span> Logout </span>
                                </button>

                            </li>
                        </ul>

                    </div>
                    <h6 className='mx-auto text-white' >Account</h6>
                </div>
            </div>
        </div >


    )
}

export default Sidebar
