import React from 'react'
import ButtonSidebar from '../Element/ButtonSidebar/ButtonSidebar'
import { Basket, Image, JournalCode, PersonBadge, Speedometer2, X } from 'react-bootstrap-icons'
import SideBarlist from '../Fragment/SideBarlist/SideBarlist'



function AuthLayout({ children }) {
    return (
        <>
            <div className="sidebar">
                <div className="offcanvass  offcanvas-start py-5" >
                    <div className="offcanvas-header">
                        <img className='mx-auto' src="/images/csaLogo.svg" alt="" />
                    </div>

                    <div className="offcanvass-body mt-5 ">
                        <ul className="menu d-grid justify-content-center mx-auto p-0">
                            <SideBarlist title='Dasboard' condition='active' icon={<Speedometer2 />} location='/PageContent' />
                            <SideBarlist title='Course' icon={<JournalCode />} location='/ChoiseDivision' />
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
                    <h6 className='d-flex justify-content-center text-white' >Logout</h6>
                </div>
            </div >
            <main >
                {children}
            </main>
        </>

    )
}

export default AuthLayout