import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Container from 'react-bootstrap/Container';
import PropTypes from 'prop-types';

import './search.css';

class SearchPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      filterTerm: 'All',
    };
  }

  searchItems = (event) => {
    const receivedText = event.target.value;
    const { getSearchText } = this.props;
    this.setState({ text: receivedText });
    getSearchText(receivedText);
  }

  filterItems = (event) => {
    const { setFilterTerm } = this.props;
    this.setState({ filterTerm: event });
    setFilterTerm(event);
  }

  render() {
    const { text, filterTerm } = this.state;
    return (
      <Container>
        <InputGroup className="searchGroup">
          <FormControl
            placeholder="Enter something to find"
            onChange={this.searchItems}
            value={text}
          />
          <ButtonToolbar>
            <ToggleButtonGroup name="filter" type="radio" onChange={this.filterItems} value={filterTerm}>
              <ToggleButton value="All" variant="outline-secondary">All</ToggleButton>
              <ToggleButton value="Active" variant="outline-secondary">Active</ToggleButton>
              <ToggleButton value="Done" variant="outline-secondary">Done</ToggleButton>
            </ToggleButtonGroup>
          </ButtonToolbar>
        </InputGroup>
      </Container>
    );
  }
}

SearchPanel.propTypes = {
  getSearchText: PropTypes.func.isRequired,
  setFilterTerm: PropTypes.func.isRequired,
};

export default SearchPanel;
