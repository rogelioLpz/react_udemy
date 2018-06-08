import React, { Component } from 'react';
class Eventos extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            mouseX:0,
            mouseY:0,
            name:'',
            email:'',
            twitter:'@'
        }
    }

    handleClick(e){
        alert('Eventos con REACT')
        console.log('Evento Sintetico',e);
    }
    handleMouseMove=(e)=>{
        const { clientX, clientY }= e
        this.setState({mouseX:clientX,mouseY:clientY})
    }
    handleSumbit=(e)=>{
        e.preventDefault();
        console.log(this.state)
    }
    handleChangue=(e)=>{
        console.log(e.target.value)
        this.setState({name:e.target.value})
    }

    render() { 
        return (
            <div className="container main-container">
            <div className="row">
                <h3>Eventos</h3>
            </div>
            <br/>
            <div className="row">
                <button  onClick={this.handleClick }className="btn btn-primary"> Evento Click </button>
            </div>
            <br/>
            <div className="row">
                <div
                    onMouseMove={this.handleMouseMove}
                    style={{height:100, width:150, border:'1px solid black'}}>
                    X: {this.state.mouseX} Y: {this.state.mouseY}
                </div>
            </div>
            <br/>
            <div className="row">
                <form onSubmit={this.handleSumbit}>
                    <div className="form-group">
                        <label htmlFor="nombre">Nombre</label>
                        <input className="form-control" type="text"
                            value={this.state.name} 
                            onChange={this.handleChangue}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input className="form-control"  type="text" 
                            value={this.state.email} 
                            onChange={i=>this.setState({email:i.target.value})}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="twitter">Twiter</label>
                        <input className="form-control"  type="text"
                            value={this.state.twitter} 
                            onChange={i=>this.setState({twitter:i.target.value})}
                        />
                    </div>
                    <button className="btn btn-primary"> Submit </button>
                </form>
            </div>
        </div> 

         )
    }
}
 
export default Eventos;