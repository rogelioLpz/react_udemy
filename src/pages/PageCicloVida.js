import React, { Component } from 'react'; 

export class PageCicloVida extends Component {
    //Default Constructor
    //constructor(...args){ super(...args) }
    
    //Construir Objetos e inicializar valores
    constructor(props){
        super(props)
        this.state={titulo:'Ciclo de Vida', contador:1,bpi:{}}
        console.log("Constructor",this.state)
        //debugger
    }

    //Inicializar valores
    componentWillMount(){
        this.setState({contador:10})
        console.log('componentWillMount',this.state)
        //debugger
    }

    //Cambios despues del primer render. Subscripción de eventos al DOM
    componentDidMount(){
        console.log('componentDidMount',this.state)
        //debugger
        this.setState({contador:100})
        document.addEventListener('click',(e)=>{this.setState({contador:e.x})})
        fetch('https://api.coindesk.com/v1/bpi/currentprice.json').then(res=>res.json())
        .then(data=>{
            this.setState({bpi:data.bpi})
            console.log(data)
        })
    }
    _renderCurrencies(){
        const {bpi}=this.state
        const curr=Object.keys(bpi) // [EUR,GBP,USD]
        return curr.map(c=>(
            <div className="row" key={c}>
                <p>
                <span className="badge badge-warning">1 BTC </span> &nbsp;
                <span className="badge badge-success">{bpi[c].rate}</span> &nbsp;
                <span className="badge badge-info">{c}</span>
                </p>
            </div>
        ))

    }


    render() {
        console.log("Render",this.state)
        //debugger
        return ( 
        <div className="container main-container">
            <div className="row">
                <h3>{this.state.titulo}</h3>
            </div>
            <div className="row">
                <p>Contador: {this.state.contador}</p>  
            </div>

            <h4 className="text-left">Bitcoin API</h4>
            {this._renderCurrencies()}
            
            
        </div>
        )

    }
}