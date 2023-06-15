import React, { useState } from 'react'

const Toast = ({ text }) => {
    const [display, setDisplay] = useState('inline');
    return (
        <><div
            className="toast align-items-center text-white bg-success border-0"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
            style={{ opacity: "unset", zIndex: "100", position: "fixed", right: "20px", bottom: "20px", display: display }}
        >
            <div className="d-flex">
                <div className="toast-body">{text} !</div>
                <button
                    type="button"
                    className="btn-close btn-close-white me-2 m-auto"
                    data-bs-dismiss="toast"
                    aria-label="Close"
                    onClick={() => setDisplay('none')}
                />
            </div>
        </div>
        </>
    )
}

export default Toast