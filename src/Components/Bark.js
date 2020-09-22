import React from 'react'

const Bark = ({ name, content }) => {

    return (
        <div className="bark">
            <h3>{name}</h3>
            <h3>{content}</h3>
        </div>
    )
}

export default Bark;