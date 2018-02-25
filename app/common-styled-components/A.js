/**
 * A link to a certain page, an anchor tag
 */

import styled from 'styled-components';
import {COLORS} from './config';

const A = styled.a`
  color: ${COLORS.FONT};

  &:hover {
    color: ${COLORS.HOVER};
  }
`;

export default A;
