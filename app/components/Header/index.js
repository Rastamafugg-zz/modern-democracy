import React from 'react';
import { FormattedMessage } from 'react-intl';

import H2 from '../H2';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import messages from './messages';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <H2>Modern Democracy</H2>
        <NavBar>
          <HeaderLink to="/bylaws">
            <FormattedMessage {...messages.bylaws} />
          </HeaderLink>
          <HeaderLink to="/strataMap">
            <FormattedMessage {...messages.strataMap} />
          </HeaderLink>
          <HeaderLink to="/bclaws">
            <FormattedMessage {...messages.bclaws} />
          </HeaderLink>
          <HeaderLink to="/taxes">
            <FormattedMessage {...messages.taxes} />
          </HeaderLink>
        </NavBar>
      </div>
    );
  }
}

export default Header;
