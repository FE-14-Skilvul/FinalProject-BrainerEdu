import React from 'react'

const Button = ({ text }) => {
    return (
        <>
            <button className="theme_btn message_btn mt-20 w-100">{text}</button>
        </>
    )
}

export default Button