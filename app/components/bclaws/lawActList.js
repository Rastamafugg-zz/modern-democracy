import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import BCLawsDocumentList from './lawDocumentList';

class BCLawsActList extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  setAct(actId) {
    this.setState({ actId });
  }

  render() {
    const { path, data: { lawsDocumentList = [] } } = this.props;

    const lawSelector = (this.state.actId) ? (<BCLawsDocumentList path={[...path, this.state.actId]} />) : undefined;
    return (
      <div>
        <select name="lawsList" onChange={(event) => this.setAct(event.target.value)}>
          <option key={''} value={''}>Select an act</option>
          {
            lawsDocumentList && lawsDocumentList.map(({title, id}) => (<option key={id} value={id}>{title}</option>))
          }
        </select>
        {lawSelector}
      </div>
    );
  }
}

BCLawsActList.propTypes = {
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
)(BCLawsActList);
