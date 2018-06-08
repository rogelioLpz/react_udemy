import React, { Component } from 'react';
import PropTypes from 'prop-types';
class Children_Proptypes extends Component {
    static propTypes={
        titulo:PropTypes.string.isRequired,
        fecha:PropTypes.string.isRequired
    }
    constructor(props) {
        console.log(props)
        super(props);
    }
    render() { 
        return ( 
        <div className="container main-container">
            <div className="card">
                <h5 className="card-header">{this.props.titulo}</h5>
                <div className="card-body">
                <h5 className="card-title">{this.props.children}</h5>
                <p className="card-text"> {this.props.fecha}</p>
                </div>
            </div>
        </div>
        )
    }
}
 
export default Children_Proptypes;