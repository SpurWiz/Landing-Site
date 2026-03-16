import React from 'react'
import Header from './header'
import Footer from './footer'

const Wrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="wrapper">
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Wrapper