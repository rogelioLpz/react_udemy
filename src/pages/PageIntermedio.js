import React, { Component } from 'react';
import Eventos from '../components/Eventos'
import Children_Proptypes from '../components/Children_Proptypes';
class PageIntermedio extends Component {

    render() { 
        return (
            <div className="container main-container">

            <div className="row  text-left">
                <div className="col-md-6">
                   <Eventos/> 
                </div>
                <div className="col-md-6">
                    <Children_Proptypes titulo="prop Children" fecha={new Date().toLocaleDateString()}> Texto children</Children_Proptypes>
                    <Children_Proptypes titulo="PropTypes" fecha={'2018-01-10'}> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa omnis </Children_Proptypes>
                </div>            
            </div>
        </div> 

         )
    }
}
 
export default PageIntermedio;