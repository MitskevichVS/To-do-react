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
      filter: '',
    };
  }

  setFilterTerm = (filterTerm) => {
    this.setState({ filter: filterTerm });
  }

  filterItems = (items, term) => {
    switch (term) {
      case 'All':
        return items;
      case 'Active':
        return items.filter((item) => item.done === false);
      case 'Done':
        return items.filter((item) => item.done === true);
      default:
        return items;
    }
  }

  setSearchText = (text) => {
    this.setState({ searchText: text });
  }

  findItems = (items, text) => {
    if (text.length === 0) {
      return items;
    }

    return items.filter((item) => item.value.toLowerCase().indexOf(text.toLowerCase()) !== -1);
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
    const { todos, searchText, filter } = this.state;

    const searcheItems = this.filterItems(this.findItems(todos, searchText), filter);
    return (
      <>
        <Header />
        <SearchPanel getSearchText={this.setSearchText} setFilterTerm={this.setFilterTerm} />
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
