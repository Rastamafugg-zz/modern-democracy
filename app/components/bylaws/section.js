import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ComplexSection, TextSection, TitledSection, UnlabelledSection } from './section-types';
//if(process.env.WEBPACK) require('./index.scss');

class Section extends Component {
  render() {
    const { section } = this.props;

    let sectionBody;
    if (section.section && section.title) {
      sectionBody = (
        <TitledSection section={section} key={section.section} />
      );
    } else if (section.section && section.text) {
      sectionBody = (
        <TextSection section={section} key={section.section} />
      );
    } else if (section.section) {
      sectionBody = (
        <ComplexSection section={section} key={section.section} />
      );
    } else {
      sectionBody = (
        <UnlabelledSection section={section} key={section.text} />
      );
    }
    return sectionBody;
  }
}

Section.propTypes = {
  section: PropTypes.object.isRequired,
};

export default Section;
