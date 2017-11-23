import React from 'react';
import ons from 'onsenui';
import * as Ons from 'react-onsenui';
import Timer from './Timer';
import TodoApp from './TodoApp';

import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import MarkdownEditor from './MarkdownEditor';

class App extends React.Component {
  handleClick() {
    ons.notification.alert('Hello world!');
  }

  render() {
    return (
      <Ons.Page>
        <Ons.Button onClick={this.handleClick}>Tap me!</Ons.Button>
        <Timer />
        <TodoApp />
        <MarkdownEditor />
      </Ons.Page>
    );
  }
}

export default App;
