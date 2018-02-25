import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List } from 'semantic-ui-react';
import Section from '../section';
//if(process.env.WEBPACK) require('./index.scss');

class TitledSection extends Component {
  constructor() {
    super();
    this.state = {
      isVisible: false,
    };
  }

  toggleSection() {
    this.setState({ isVisible: !this.state.isVisible });
  }

  render() {
    const { section } = this.props;

    let subsections;
    let caret = 'caret right';
    if (this.state.isVisible && section.sections && (section.title || section.text)) {
      caret = 'caret down';
      subsections = section.sections.map((subsection) => (
        <Section section={subsection} key={subsection.section} />
      ));
    }
    return (
      <List.Item key={section.section} style={{ paddingLeft: 10 }}>
        <List.Icon name={caret} disabled={!section.sections} onClick={() => this.toggleSection()} />
        <List.Content>
          <List.Header as={'h4'} onClick={() => this.toggleSection()}>{section.section} - {section.title}</List.Header>
          <List.Description>{section.text}</List.Description>
          <List.List>
            {subsections}
          </List.List>
        </List.Content>
      </List.Item>
    );
  }
}

TitledSection.propTypes = {
  section: PropTypes.object.isRequired,
};

export default TitledSection;
