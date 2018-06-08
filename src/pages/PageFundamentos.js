import React, { Component } from 'react';
import {Estado} from '../components/Estado'
import {Parametros} from '../components/Parametros'
import {Condicional} from '../components/Condicional'
import {Ciclos} from '../components/Ciclos'

class PageFundamentos extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="container main-container">
            <div className="row">
                <header><h3>Fundamentos de React</h3></header>
            </div>

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
        )
    }
}
 
export default PageFundamentos;