import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List } from 'semantic-ui-react';
import Section from './section';

class Part extends Component {
  constructor() {
    super();
    this.state = {
      isVisible: false,
    };
  }

  toggleDivision() {
    this.setState({ isVisible: !this.state.isVisible });
  }

  render() {
    const { part } = this.props;
    let sections;
    let caret = 'caret right';
    if (this.state.isVisible) {
      caret = 'caret down';
      sections = (
        <List.List style={{ paddingLeft: 10 }}>
          {part.content.map((content) => (
            <Section key={content.id} section={content} />
          ))}
        </List.List>
      );
    }

    return (
      <List.Item key={part.postfix}>
        <List.Content>
          <List.Header as={'h3'} onClick={() => this.toggleDivision()}><List.Icon name={caret} />{(part.text) ? `${part.postfix} - ${part.text}` : part.postfix }</List.Header>
          {sections}
        </List.Content>
      </List.Item>
    );
  }
}

Part.propTypes = {
  part: PropTypes.object.isRequired,
};


export default Part;
