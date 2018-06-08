import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
//import PageFundamentos from './pages/PageFundamentos'
//import PageIntermedio from './pages/PageIntermedio'
import { PageCicloVida } from "./pages/PageCicloVida";

/**************************************************/
/************** COMPONENTE PRINCIPAL **************/
/**************************************************/
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        {/* <PageFundamentos></PageFundamentos> */}
        {/* <PageIntermedio></PageIntermedio> */}
        <PageCicloVida></PageCicloVida>
      </div>
    );
  }
}

export default App;
