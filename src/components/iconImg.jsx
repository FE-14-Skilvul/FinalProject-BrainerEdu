import React from 'react'

const IconImg = ({ src }) => {
    return (
        <>
            <img className={`sl-shape shape_${src}`} src={`/assets/img/icon/${src}.svg`} alt="" />
        </>
    )
}

export default IconImg