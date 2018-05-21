import React, { Component } from 'react';
import {Estado} from './components/Estado'
import {Parametros} from './components/Parametros'
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
          <img src={logo} className="App-logo" alt="logo"/>
          <Hello texto="Hola mundo"/>
          <PrimerComponente texto="Primer componente"/>
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
                </div>            
            </div>
        </div>
      </div>
    );
  }
}

export default App;