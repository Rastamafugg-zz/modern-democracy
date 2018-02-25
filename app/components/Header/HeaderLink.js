import { Link } from 'react-router';
import styled, { css } from 'styled-components';

const media = {
  mobile: (...args) => css`
    @media (max-width: 749px) {
      ${ css(...args) }
    }
  `,
  desktop: (...args) => css`
    @media (min-width: 750px) {
      ${ css(...args) }
    }
  `,
}

export default styled(Link)`
  display: inline-flex;
  padding: 0.25em 0.5em;
  margin: 0.5em;
  text-decoration: none;
  border-radius: 4px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 12px;
  border: 2px solid #FFFFFF;
  color: #FFFFFF;
  background-color: #41ADDD;
  
  &:active {
    background: #41ADDD;
    color: #FFF;
  }
`;
