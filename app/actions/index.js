import {SELECT_PATH} from '../config'

export function selectPath(path) {
  return {...path, action: SELECT_PATH};
}