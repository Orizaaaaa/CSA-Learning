import React from 'react'
import { star1 } from "./image"

function LearningPath(props) {
    const { title, time, student, } = props
    return (
        <div className="col">
            <div className="card lerningcard">
                <div className="card-body">
                    <h6>{title}</h6>
                    <p>{time}</p>
                    <div className="mt-4" >
                        <p>{student}</p>
                        <div className="d-flex">
                            <img src="/images/people1.svg" alt="" />
                            <img src="/images/star1.svg" alt="" />
                            <button> <img src="/images/menuCard.svg" alt="" /></button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default LearningPath