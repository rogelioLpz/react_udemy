import React, { Component } from 'react';
import {Estado} from './components/Estado'
import {Parametros} from './components/Parametros'
import {Condicional} from './components/Condicional'
import {Ciclos} from './components/Ciclos'
import logo from './logo.svg';
import './App.css';


//Componente como funcion
function Hello(props){
  return <h3>{props.texto}</h3>
}

//Componente como clase
class PrimerComponente extends Component{
    render(){
        return <h3>{this.props.texto}</h3>
    }
}



/**************************************************/
/************** COMPONENTE PRINCIPAL **************/
/**************************************************/
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <div className="row">
                <div className="col-md-3">
                    <img src={logo} className="App-logo" alt="logo"/> 
                </div>
                <div className="col-md-7">
                    <PrimerComponente texto="Primer componente"/>
                    <Hello texto="Hola mundo"/>
                </div>
            </div>
        </header>

        <div className="container main-container">
            <div className="row">
                <div className="col-md-6">
                    <Parametros 
                        arreglo={[1,2,3,4,5,6]}
                        booleano={false} 
                        cadena='React JS' 
                        componente={<small> <b> Componente Small b </b></small>}
                        flag
                        funcion={(x)=>{ return x*2}}
                        numero={9.09} 
                        objeto={{key:'value',key_2:'value_2'}}
                        //prop_default='Valor Asignado'
                    />
                </div>
                <div className="col-md-6">
                    <Estado contador={10}/>
                    <Condicional/>
                    <Ciclos/>
                </div>            
            </div>
        </div>
      </div>
    );
  }
}

export default App;
