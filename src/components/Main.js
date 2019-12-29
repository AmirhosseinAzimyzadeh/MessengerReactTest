import React from 'react';
import { Component } from "react";
// components
import MainContainer from './MainContainer'

class Main extends Component {
    constructor(){
        super()
    }


    render(){
        return(
            <div>
                <MainContainer />
            </div>
        );
    }
}


export default Main;