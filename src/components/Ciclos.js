import React, { Component } from 'react';
import cars from '../data/cars.json'

export class Ciclos extends Component {
  render() {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Ciclos</h5>
                <ul className="text-left">
                    {
                        cars.map((item,idx)=>{
                            return  <li key={item.id}> Auto:<b>{item.name}</b>  Compañia:<b>{item.company}</b></li>
                        })
                    }
                </ul>
                
            </div>
        </div>
    )
  }
};
