import React from 'react';
import ons from 'onsenui';
import * as Ons from 'react-onsenui';

import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

class App extends React.Component {
  handleClick() {
    ons.notification.alert('Hello world!');
  }

  render() {
    return (
      <Ons.Page>
        <Ons.Button onClick={this.handleClick}>Tap me!</Ons.Button>
      </Ons.Page>
    );
  }
}

export default App;
