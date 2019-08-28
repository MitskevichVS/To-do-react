import React from 'react';
import './App.css';

import Header from './components/header/header';
import AddItem from './components/addItem/addItem';
import ClearInput from './logic/clearInput/clearInput';
import List from './components/list/list';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ListItems: [{ title: 'Create React App', done: false }, { title: 'Drink tea', done: false }, { title: 'Relax', done: false }],
    };
  }

  AddListItem = () => {
    const addInputValue = document.getElementById('addInput').value;
    this.setState((prevState) => ({
      ListItems: [...prevState.ListItems, { title: addInputValue, done: false }],
    }));
    ClearInput();
  }

  render() {
    const { ListItems } = this.state;
    return (
      <>
        <Header />
        <List ListItems={ListItems} />
        <AddItem AddListItem={this.AddListItem} />
      </>
    );
  }
}

export default App;
