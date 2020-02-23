import React, { Component } from 'react';

import  Card from '../card/card.component';

import './card-list.styles.css'

export default class CardList extends Component{

 constructor(props) {
    super(props);

    //console.log(this.props.monsters)
    this.state={monsters: this.props.monsters};
    //console.log('2',this.state.monsters)
}


  render() {
      return(
       
          <div className='card-list'>
            {this.props.monsters.map(monster =>( //props is giving monsters, iterating over the monsters array
              <Card key={monster.id} monster={monster} /> //sending monter as props to Card Component
            ))}
          </div> 
        
      )
  }
};
