import React, { Component } from 'react';

/**************************************************/
/************* ESTATE DEL COMPONENTE **************/
/**************************************************/
export class Estado extends Component{
    constructor(props){
        super(props)
        console.log('Constructor')
        this.state={ 
            texto:'Contador Padre', 
            contador:props.contador || 0 //Inicializar JS
        }
        setInterval(()=>{this.setState({contador:this.state.contador+1})},2000)
    }
    render(){
        console.log('Render Padre')
        return <div className="card">
        <div className="card-body">
            <h5 className="card-title">Estate del Componente</h5>
            <p>{this.state.texto}: <b>{this.state.contador}</b></p>
            <EstadoHijo contador={this.state.contador}/>
        </div>
    </div>
    }
}

class EstadoHijo extends Component{
    render(){
        console.log('Render Hijo')
        return <p>Contador Hijo: {this.props.contador} </p>
    }
}
