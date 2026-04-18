import React from 'react'
import Header from './header'
import Footer from './footer'

const Wrapper = ({ children, noFooter, noOverflow }: { children: React.ReactNode, noFooter?:boolean, noOverflow?:boolean }) => {
    return (
        <div className={`wrapper ${noOverflow ? 'overflow-hidden!' : ''}`}>
            <Header />
            {children}
            {!noFooter && <Footer />}
        </div>
    )
}

export default Wrapper