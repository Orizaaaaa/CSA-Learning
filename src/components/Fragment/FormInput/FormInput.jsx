import React from 'react'

function FormInput({ htmlFor, title, type, onChange }) {
    return (
        <>
            <label htmlFor={htmlFor} className="form-label text-black ">
                {title}
            </label>
            <input
                type={type}
                className="form-control"
                aria-describedby="emailHelp"
                name={htmlFor}
                onChange={onChange}
            />
        </>
    )
}

export default FormInput