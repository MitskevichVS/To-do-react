import React from 'react';

import Header from '../header/header';
import AddItem from '../addItem/addItem';
import ClearInput from '../../logic/clearInput/clearInput';
import List from '../list/list';

let ListItemId = 1;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [{ value: 'create To do app', done: false, id: 1 }],
    };
  }

  deleteListItem = (event) => {
    let node = event.target;
    while (!node.id) {
      node = node.parentNode;
    }
    const { id } = node;
    const { todos } = this.state;
    this.setState({
      todos: todos.filter((item) => item.id !== +id),
    });
  }

  AddListItem = () => {
    ListItemId += 1;
    const addInputValue = document.getElementById('addInput').value;
    this.setState((prevState) => ({
      todos: [...prevState.todos, { value: addInputValue, done: false, id: ListItemId }],
    }));
    ClearInput();
  }

  render() {
    const { todos } = this.state;
    return (
      <>
        <Header />
        <List Items={todos} deleteListItem={this.deleteListItem} />
        <AddItem AddListItem={this.AddListItem} />
      </>
    );
  }
}

export default App;
