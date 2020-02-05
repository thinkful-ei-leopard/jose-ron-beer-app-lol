import React from 'react';
import {AppContext} from './AppContext';


export default class BeerList extends React.Component {
    static contextType = AppContext;
    render(){
        return(
            <>
            <ul>
        {this.context.brewery.map((beer, index) => <li key={index}> {beer.name} - {' '} brewery type:
         <span>{beer.brewery_type}</span> </li>)}
            </ul>
            </>
        )
    }
}
