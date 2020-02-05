import React from 'react';
import {AppContext} from './AppContext'


export default function Form(props) {
    return (
        <AppContext.Consumer>
            {(value) => {
                return (
        <>
            <form onSubmit={props.fetchBooze} id="beerForm">
            <label htmlFor="searchInput">Search Brewery</label>
            <input type="text" id="searchInput" name="breweryInfo"></input>
            <select name="beerType" form="beerForm" className="beerFilter">
                <option value="state">state</option>
                <option value="city">city</option>
                <option value="postal">postal</option>
                <option value="name">brewery names</option>
                <option value="type">brewery type</option>
            </select>
            <button type="submit">Search</button>
            </form>
        </>
        )
        }}
        </AppContext.Consumer>
    );
}
