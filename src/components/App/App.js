import React from 'react';

import Header from '../header/header';
import AddItem from '../addItem/addItem';
import ClearInput from '../../logic/clearInput/clearInput';
import List from '../list/list';

class App extends React.Component {
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
