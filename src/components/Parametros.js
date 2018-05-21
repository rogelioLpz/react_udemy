import React, { Component } from 'react';

/**************************************************/
/***************** PARAMETROS  ********************/
/**************************************************/
export class Parametros extends Component{
    render(){
        let textobooleano=this.props.flag?'True':'False'
        console.log(this.props)
        let { arreglo,booleano,cadena,componente,flag,funcion,numero,objeto,prop_default } =this.props
        return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Envío de Parametros</h5>
                <p> {typeof(cadena)}: {cadena}</p>
                <p> {typeof(numero)}: {numero}</p>
                <p> {typeof(booleano)}: {textobooleano}</p>
                <p> {typeof(flag)}: {flag?'True':'False'}</p>
                <p> {typeof(arreglo)}: {arreglo.join(', ')}</p>
                <p> {typeof(objeto)}: {JSON.stringify(objeto) }</p>
                <p> {typeof(funcion)}: {funcion(numero)}</p>
                <p> {typeof(componente)}: {componente}</p> 
                <p> {typeof(prop_default)}: {prop_default}</p> 
            </div>
        </div>)
    }
}
//Inicializacion React
Parametros.defaultProps={
    prop_default:'Valor default'
}
