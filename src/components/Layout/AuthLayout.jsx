import React from 'react'
import ButtonSidebar from '../Element/ButtonSidebar/ButtonSidebar'



function AuthLayout(props) {
    const { children } = props
    return (
        <div id="main" >
            <ButtonSidebar />
            <div className="page-content">
                {children}
            </div>
        </div>

    )
}

export default AuthLayout