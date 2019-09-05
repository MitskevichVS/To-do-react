import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
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
    };
  }

  searchItems = (event) => {
    const receivedText = event.target.value;
    const { getSearchText } = this.props;
    this.setState({ text: receivedText });
    getSearchText(receivedText);
  }

  render() {
    const { text } = this.state;
    return (
      <Container>
        <InputGroup className="searchGroup">
          <FormControl
            placeholder="Enter something to find"
            onChange={this.searchItems}
            value={text}
          />
          <ToggleButtonGroup type="radio" name="options" defaultValue="All">
            <ToggleButton variant="outline-secondary" value="All">All</ToggleButton>
            <ToggleButton variant="outline-secondary" value="Complete">Complete</ToggleButton>
            <ToggleButton variant="outline-secondary" value="Incomplete">Incomplete</ToggleButton>
          </ToggleButtonGroup>
        </InputGroup>
      </Container>
    );
  }
}

SearchPanel.propTypes = {
  getSearchText: PropTypes.func.isRequired,
};

export default SearchPanel;
