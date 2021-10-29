import React, { Component } from "react";
import { Link } from "react-router-dom";


class About2 extends React.Component {
    render(){
        return (
            <>
             
             <div>
                <h1> About 2 </h1>
                <Link to="/about">About</Link>
             </div>
             
            </>
        );
    }
}
 export default About2;