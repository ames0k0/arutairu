/*
 * @brief - Dashboard.
 */

import React from 'react';
import WebBoard from '../Boards/Web';


class HelloWorldApp extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <WebBoard>
        <h1>Hello, World!</h1>
      </WebBoard>
    );
  }

}

export default HelloWorldApp;
