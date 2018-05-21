import React, { Component } from 'react';

export class Condicional extends Component {
    constructor(props){
        super(props)
        this.state={ decision: props.selector || false }
    }
  render() {
    return (
    <div className="card">
        <div className="card-body">
            <h5 className="card-title">Condicionales</h5>
            { this.state.decision? <ComponenteA/> :<ComponenteB/> }
        </div>
    </div>
    )
  }
};


class ComponenteA extends Component {
  render() {
    return ( <p>Componente  A</p>)
  }
};

class ComponenteB extends Component {
    render() {
        return ( <p>Componente B</p>)
    }
};

