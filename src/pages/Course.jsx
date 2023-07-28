import React from 'react'
import ButtonSidebar from '../components/Element/ButtonSidebar/ButtonSidebar'

function Course() {
    return (
        <div id="main">
            <ButtonSidebar />
            <h1>Hallo ini adalah Course</h1>

            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowFullScreen></iframe>
            </div>
        </div>
    )
}

export default Course