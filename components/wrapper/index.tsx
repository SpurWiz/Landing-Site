import React from 'react'
import Header from './header'
import Footer from './footer'

const Wrapper = ({ children, noFooter }: { children: React.ReactNode, noFooter?:boolean }) => {
    return (
        <div className="wrapper">
            <Header />
            {children}
            {!noFooter && <Footer />}
        </div>
    )
}

export default Wrapper