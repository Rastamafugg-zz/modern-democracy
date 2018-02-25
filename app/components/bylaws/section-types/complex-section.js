import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List } from 'semantic-ui-react';
import Section from '../section';
//if(process.env.WEBPACK) require('./index.scss');

class ComplexSection extends Component {
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

    let caret = 'caret right';
    if (this.state.isVisible && section.sections && (section.title || section.text)) {
      caret = 'caret down';
    }
    const sectionSubSections = [];
    if (section.sections && section.sections.length > 0) {
      for (let x = 0; x < section.sections.length; x += 1) {
        if (section.sections[x].sections) {
          sectionSubSections[x] = section.sections[x].sections.map((subsection) => (
            <Section section={subsection} key={subsection.section} />
          ));
        }
      }
    }
    return (
      <List.Item key={section.section} style={{ paddingLeft: 10 }}>
        <List.Content>
          <List.List>
            {
              section.sections.map((subsection, index) => {
                return (
                  <List.Item key={`${section.section}-${index}`} style={{ paddingLeft: 10 }}>
                    <List.Icon name={caret} disabled={!section.sections} onClick={() => this.toggleSection()} />
                    <List.Content>
                      <List.Description onClick={() => this.toggleSection()}><strong>{(index === 0) ? `${section.section})` : ''}</strong> {subsection.text}</List.Description>
                      <List.List>
                        {sectionSubSections[index]}
                      </List.List>
                    </List.Content>
                  </List.Item>
                );
              })
            }
          </List.List>
        </List.Content>
      </List.Item>);
  }
}

ComplexSection.propTypes = {
  section: PropTypes.object.isRequired,
};

export default ComplexSection;
