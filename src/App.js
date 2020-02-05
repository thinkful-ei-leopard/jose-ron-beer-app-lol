import React from 'react';
import Header from './Header'
import Form from './Form'
import {AppContext} from './AppContext';
import BeerList from './BeerList';

class App extends React.Component {
  static contextType = AppContext;
  render() {
    console.log(this.context.fetchBooze)
    const contextValue = {
      brewery: this.context.brewery,
      setLang: this.context.fetchBooze,
    }
  return (
    <AppContext.Provider value={contextValue}>
    <main className='App'>
      <Header />
      <Form fetchBooze={this.context.fetchBooze}/> 
      <BeerList />
    </main>
    </AppContext.Provider>
  );
  }
}

export default App;