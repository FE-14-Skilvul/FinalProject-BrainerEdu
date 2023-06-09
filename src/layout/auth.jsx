import React from 'react'
import Home from './home'

const Auth = ({ children, title, onsubmit }) => {
    return (
        <>
            <Home>
                <section className="contact-form-area pt-150 pb-120 pt-md-100 pt-xs-100 pb-md-70 pb-xs-70">
                    <div className="container">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-lg-6 col-md-8 grid-item cat2 cat3">
                                <div className="z-gallery z-gallery-two mb-30" style={{ padding: '3rem' }}>
                                    <div className="contact-form-wrapper text-center mb-30">
                                        <div className="d-flex justify-content-start">
                                            <h2 className="mb-45">{title}</h2>
                                        </div>
                                        <form onSubmit={onsubmit} className="row gx-3 comments-form contact-form">
                                            {children}
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Home>
        </>
    )
}

export default Auth