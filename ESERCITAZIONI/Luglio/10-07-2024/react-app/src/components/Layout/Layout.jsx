import styles from './Layout.module.css'
import { useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


function Layout({children}) {
    return (
        <>
            <Header />
                {children}
            <Footer />
        </>
    )
}

export default Layout