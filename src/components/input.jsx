import React, { Children, forwardRef } from 'react'

// const InputForm = forwardRef(({ type, ...props }, ref) => {
//     // const { type, placeholder, className } = props
//     return (
//         <div className="field input-field">
//             <input ref={ref} {...props} />
//             {type == 'password' ? <i className="bx bx-hide eye-icon" /> : ''}
//         </div>
//     )
// })

const Input = ({ ...props }) => {
    return (

        <div className="col-lg-12 mb-30">
            <input {...props} />
            <p className="d-flex justify-content-start text-danger">
                {props.message}
            </p>

        </div>

    )
}

export default Input