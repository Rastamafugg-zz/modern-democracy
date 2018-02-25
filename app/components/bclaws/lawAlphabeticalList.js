import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BCLawsActList from './lawActList';

class BCLawsAlphabeticalList extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  setLetter(letter) {
    this.setState({ letter });
  }

  render() {
    const { path, data: { lawsDocumentList = [] } } = this.props;

    const lawSelector = (this.state.letter) ? (<BCLawsActList path={[...path, this.state.letter]} />) : undefined;
    return (
      <div>
        <select name="lawsByLetter" onChange={(event) => this.setLetter(event.target.value)}>
          <option key={''} value={''}>Select a letter</option>
          {
            lawsDocumentList && lawsDocumentList.map(({ title, id }) => (<option key={id} value={id}>{title}</option>))
          }
        </select>
        {lawSelector}
      </div>
    );
  }
}

BCLawsAlphabeticalList.propTypes = {
  path: PropTypes.array.isRequired,
  data: PropTypes.object.isRequired,
};

export default BCLawsAlphabeticalList;
