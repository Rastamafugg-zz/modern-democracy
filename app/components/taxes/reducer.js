/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable';

import {
  CHANGE_YEAR,
  CHANGE_REGION,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  username: '',
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_YEAR:
      return state
        .set('year', action.year);
    case CHANGE_REGION:
      return state
        .set('year', action.region);
    default:
      return state;
  }
}

export default homeReducer;
