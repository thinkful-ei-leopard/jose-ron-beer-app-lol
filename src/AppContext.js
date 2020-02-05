import React from 'react';

const AppContext = React.createContext({
    brewery: [],
    fetchBooze: () => {

    },
});


export default class AppProvider extends React.Component {
    state = {
        brewery: []
    }

    fetchBooze = (e) => {
        e.preventDefault();

        fetch(`https://api.openbrewerydb.org/breweries?by_${e.target.beerType.value}=${e.target.breweryInfo.value}`)
            .then(response => response.json())
            .then(response => this.setState({
                brewery: response
            }))
    }

    render() {
        const contextValue = {
            brewery: this.state.brewery,
            fetchBooze: this.fetchBooze,
        }
        return (
            <AppContext.Provider value={contextValue}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}




export {AppContext}