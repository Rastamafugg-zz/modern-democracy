import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import BCLawsDocument from './lawDocument';

class BCLawsDocumentList extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  setLaw(lawId) {
    if (lawId !== '') {
      this.setState({ lawId });
    } else {
      delete this.state.lawId;
    }
  }

  render() {
    const { path, data: { lawsDocumentList = [] } } = this.props;

    const lawDocument = (this.state.lawId) ? (<BCLawsDocument path={[...path, this.state.lawId]} />) : undefined;
    return (
      <div>
        <select name="lawsList" onChange={(event) => this.setLaw(event.target.value)}>
          <option key={''} value={''}>Select a document</option>
          {
            lawsDocumentList && lawsDocumentList.map(({ title, id }) => (<option key={id} value={id}>{title}</option>))
          }
        </select>
        {lawDocument}
      </div>
    );
  }
}

BCLawsDocumentList.propTypes = {
  path: PropTypes.array.isRequired,
  data: PropTypes.object.isRequired,
};

const mapStateToProps = (state, ownProps) => ({ path: ownProps.path });

const mapDispatchToProps = (dispatch) => ({
  loadLawIndex: () => (dispatch({ type: 'LAWS_INDEX_FETCH_REQUESTED' })),
});


const query = gql`
    query LawsDocument($path: [String]) {
        lawsDocumentList(path: $path) {
            id,
            title,
            location,
            type,
            parent,
            ancestors,
            isVisible,
            order
        }
    }
`;

export default compose(
    graphql(query),
    connect(mapStateToProps, mapDispatchToProps)
)(BCLawsDocumentList);
