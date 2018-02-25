import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List } from 'semantic-ui-react';
// import Section from './section';

class Section extends Component {
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
    const { section } = this.props;
    let sections;
    let caret = 'caret up';
    if (section.content) {
      if (this.state.isVisible) {
        caret = 'caret down';
        sections = (
          <List.List style={{ paddingLeft: 10 }}>
            {section.content.map((content) => (
              <Section key={content.id} section={content} />
            ))}
          </List.List>
        );
      } else {
        caret = 'caret right';
      }
    }
    if (section.type && section.type === 'Definition') {
      if (section.term === 'winding-up resolution') debugger
      return (
        <List.Item key={section.id}>
          <List.Content>
            <List.Header as={'p'} onClick={() => this.toggleDivision()}><strong>{section.term}</strong> - {section.text}</List.Header>
            {sections}
          </List.Content>
        </List.Item>
      );
    } else if (section.type && section.type === 'Section') {
      return (
        <List.Item key={section.id}>
          <List.Content>
            <List.Header as={'p'} onClick={() => this.toggleDivision()}><strong>{section.term}</strong> - {section.text}</List.Header>
            {sections}
          </List.Content>
        </List.Item>
      );
    }
    const sectionText = (section.marginalNote) ? section.marginalNote : section.text;
    if (sectionText === 'Responsibilities of strata corporation') debugger
    return (
      <List.Item key={section.id}>
        <List.Content>
          <List.Header as={'h4'} onClick={() => this.toggleDivision()}><List.Icon name={caret} />{`${section.num} - ${sectionText}`}</List.Header>
          {sections}
        </List.Content>
      </List.Item>
    );
  }
}

Section.propTypes = {
  section: PropTypes.object.isRequired,
};


export default Section;
