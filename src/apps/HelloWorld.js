/*
 * @brief - Dashboard.
 */

import React from 'react';
// import WebBoard from '../Boards/Web';
// import BaseBoard from '../Boards/Base';
import TreeViewBoard from '../Boards/TreeView';


class HelloWorldApp extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TreeViewBoard />
    );
  }

}

export default HelloWorldApp;
