import React, { Component } from 'react';
import logo from '../logo.svg';

//Componente como funcion
function PrimerComponente(props){
    return <h2>{props.texto}</h2>
}

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (    
        <header className="App-header">
        <div className="row">
            <div className="col-md-3">
                <img src={logo} className="App-logo" alt="logo"/> 
            </div>
            <div className="col-md-7">
                <PrimerComponente texto="Curso React Udemy"/>
            </div>
        </div>
    </header> )
    }
}
 
export default Header;