import React from 'react';
import './App.css';

import Header from './components/header/header';
import AddItem from './components/addItem/addItem';
import ClearInput from './logic/clearInput/clearInput';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ListItems: ['Create React App', 'Drink tea', 'Relax'],
    };
  }

  AddListItem = () => {
    const addInputValue = document.getElementById('addInput').value;
    this.setState((prevState) => ({
      ListItems: [...prevState.ListItems, addInputValue],
    }));
    ClearInput();
  }

  render() {
    return (
      <>
        <Header />
        <AddItem AddListItem={this.AddListItem} />
      </>
    );
  }
}

export default App;
