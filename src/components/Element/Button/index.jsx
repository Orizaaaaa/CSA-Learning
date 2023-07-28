import React from 'react'

function Button(props) {
    const { variant = 'btn-dark', title = 'Learn Now' } = props
    return (
        <button className={`btn ${variant}  mt-2`} >{title}</button>
    )
}

export default Button

