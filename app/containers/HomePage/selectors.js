/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectHome = (state) => {
  return state.get('home');
}

const makeSelectUsername = () => createSelector(
  selectHome,
  (homeState) => {
    return (homeState) ? homeState.get('username') : undefined;
  }
);

export {
  selectHome,
  makeSelectUsername,
};
