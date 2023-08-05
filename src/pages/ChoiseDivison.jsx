import React from 'react'
import AuthLayout from '../components/Layout/AuthLayout'

function ChoiseDivision() {
    return (
        <AuthLayout>
            <div className="row">
                <div className="col">
                    <img src="/images/csaDivisi.svg" alt="" />
                </div>
                <div className="col">
                    <img src="/images/mulmedDivisi.svg" alt="" />
                </div>
            </div>
        </AuthLayout>
    )
}

export default ChoiseDivision