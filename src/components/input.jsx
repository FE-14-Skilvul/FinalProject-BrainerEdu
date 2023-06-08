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

const Input = forwardRef(({ type, placeholder }, ref) => {
    return (

        <div className="col-lg-12 mb-30">
            <input ref={ref} type={type} placeholder={placeholder} />
        </div>

    )
})

export default Input