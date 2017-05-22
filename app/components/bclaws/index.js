import React, { Component } from 'react';
import { connect } from 'react-redux';
import BCLawsAlphabeticalList from './lawAlphabeticalList';
import {selectPath} from '../../actions';

class BCLaws extends Component {
  render() {
    // const { data: {lawsDocument = []} } = this.props;

    return (
      <div>
        <h1 className='home'>BC Laws Library</h1>
        <BCLawsAlphabeticalList path={["statreg"]} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {}
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectPath: (path) => (dispatch(selectPath(path)))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(BCLaws);
