import React from 'react';
import Navbar from './Navbar.jsx';
import FooterContenedor from './FooterContenedor';

function Layout(props){
    return <>
        <div className="wrapper">
        <Navbar />
        <div className="container">
        {props.children}    
        </div>       

        <FooterContenedor />

        </div>

    
    </>;
}

export default Layout;

