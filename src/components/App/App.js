import React from 'react';

import Header from '../header/header';
import AddItem from '../addItem/addItem';
import ClearInput from '../../logic/clearInput/clearInput';
import List from '../list/list';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [{ value: 'create To do app', done: false, id: 1 }],
    };
  }

  AddListItem = () => {
    const addInputValue = document.getElementById('addInput').value;
    this.setState((prevState) => ({
      todos: [...prevState.todos, { value: addInputValue, done: false }],
    }));
    ClearInput();
  }

  render() {
    const { todos } = this.state;
    return (
      <>
        <Header />
        <List Items={todos} />
        <AddItem AddListItem={this.AddListItem} />
      </>
    );
  }
}

export default App;
