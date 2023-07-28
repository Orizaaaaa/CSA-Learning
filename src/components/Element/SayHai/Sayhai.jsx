import React from 'react'

function Sayhai(props) {
    const { name } = props
    return (
        <>
            <div>
                <p>HI {name} !</p>
                <h3>What Will You Learn Today</h3>
            </div>
        </>
    );
}

export default Sayhai