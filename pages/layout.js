import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import 'react-toastify/dist/ReactToastify.css';
const Layout = ({ children }) => {
    return (
        <div className='bg-primary min-h-screen text-primary'>
            {/* header */}
            <Header />
            <div>{children}</div>
            {/* footer */}
            <Footer />
        </div>
    );
};

export default Layout;
