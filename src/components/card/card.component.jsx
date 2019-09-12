import React, {Component} from 'react';
import axios from 'axios';
import './card.styles.css';

export default class Card extends Component{

    // constructor(props) {
    //     super(props);
    
       // console.log(this.props.monster)
        state={
            name:'',
            imageUrl:'',
            pokemonIndex:'',
            typeUrl:'',
            types:[]
        };
        // console.log(this.state.monster)
    // }
    // state={
    //     name:'',
    //     imageUrl:'',
    //     pokemonIndex:''
    // }


   async componentDidMount(){
        
        const name= this.props.monster.name;
        const url = this.props.monster.url;
        
        const pokemonIndex = url.split('/')[url.split('/').length - 2];
        
        const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`;

        const typeUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonIndex}/`;

        const res = await axios.get(typeUrl);
    
        const types= res.data['types'];

       // this.state.types.map(monster => (console.log(monster.name)));

        this.setState({
            name,
            url,
            pokemonIndex,
            imageUrl,
            typeUrl,
            types
        });
        this.state.types.map(monster => (console.log(monster.type.name)));
      //  console.log('5',this.state.name)
    }
    async componentWillReceiveProps(nextProps) {
        const name= nextProps.monster.name;
        const url = nextProps.monster.url;
        
        const pokemonIndex = url.split('/')[url.split('/').length - 2];
        
        const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`

        const typeUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonIndex}/`;

        const res = await axios.get(typeUrl);
    
        const types= res.data['types'];

        this.setState({
            name,
            url,
            pokemonIndex,
            imageUrl,
            typeUrl,
            types
        });
        console.log('5',this.state.types.map(monster =>( monster.type.name)))
    }
    // componentWillReceiveProps(nextProps) {
    //     this.setState({
    //         name:nextProps.name,
    //         url:nextProps.url,
    //         pokemonIndex:nextProps.pokemonIndex,
    //         imageUrl:nextProps.imageUrl
    //     });
    // }

    render() {
        return(
            <div className='card-container'>
               <img alt="monster" src={this.state.imageUrl} />
                <h1> {this.state.name} </h1> 
                <div>
                <p>Type:</p>
                {this.state.types.map(monster => <p>{monster.type.name}</p>)}
                </div>
            </div>
        )
    }
}

// export const Card = props => ( //it fets monster from props from Card-list-component
//     //  {pokemonIndex = props.monster.url}
//     <div className='card-container'>
//         <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} />
//         <h1> {props.monster.name} </h1> 
//         <p> {props.monster.url} </p>
//     </div>
// );
