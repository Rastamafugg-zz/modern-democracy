import React from 'react';
import { connect } from 'react-redux';
import BCLawsAlphabeticalList from './lawAlphabeticalList';
import { selectPath } from '../../actions';

function BCLaws() {
  return (
    <div>
      <h1 className="home">BC Laws Library</h1>
      <BCLawsAlphabeticalList path={['statreg']} />
    </div>
  );
}

const mapStateToProps = () => {};

const mapDispatchToProps = (dispatch) => ({
  selectPath: (path) => (dispatch(selectPath(path))),
});

export default connect(mapStateToProps, mapDispatchToProps)(BCLaws);
