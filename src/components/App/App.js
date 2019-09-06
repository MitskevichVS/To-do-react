import React from 'react';

import Header from '../header/header';
import AddItem from '../addItem/addItem';
import ClearInput from '../../logic/clearInput/clearInput';
import List from '../list/list';
import Stub from '../Stub/stub';
import SearchPanel from '../search/search';

let ListItemId = 1;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [{ value: 'create To do app', done: false, id: 1 }],
      searchText: '',
    };
  }

  setSearchText = (text) => {
    this.setState({ searchText: text });
  }

  findItems = (items, text) => {
    if (text.length === 0) {
      return items;
    }

    return items.filter((item) => item.value.indexOf(text) !== -1);
  }

  toggleListItem = (event) => {
    let node = event.target;
    while (!node.id) {
      node = node.parentNode;
    }
    const { id } = node;
    const { todos } = this.state;
    this.setState({
      todos: todos.map((item) => {
        if (item.id === +id) {
          // eslint-disable-next-line no-param-reassign
          item.done = !item.done;
          return item;
        } return item;
      }),
    });
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
    if (addInputValue === '') return;
    this.setState((prevState) => ({
      todos: [...prevState.todos, { value: addInputValue, done: false, id: ListItemId }],
    }));
    ClearInput();
  }

  render() {
    const { todos, searchText } = this.state;

    const searcheItems = this.findItems(todos, searchText);
    return (
      <>
        <Header />
        <SearchPanel getSearchText={this.setSearchText} />
        { todos.length === 0 ? <Stub />
          : (
            <List
              Items={searcheItems}
              deleteListItem={this.deleteListItem}
              toggleListItem={this.toggleListItem}
            />
          )}
        <AddItem AddListItem={this.AddListItem} />
      </>
    );
  }
}

export default App;
