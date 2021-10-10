/*
 * @brief - Parses the whole data in the components except *Builtins
 *
 * Classic source code tree.
 *
 * +----------------+
 * |    BoardName   | <- show, hide
 * +----------------+
 * |  ComponentName | <- show, hide
 * +----------------+
 * |  - application | <- register : others
 * |    - miniView  | <- register : others
 * +----------------+
 * |  ComponentName | <- show, hide
 * +----------------+
 */


/**
 * Using the *WebBoard to view tree
 */

import React from 'react';
import WebBoard from '../Boards/Web';


export default class ComponentTreeViewBuiltin extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      tree: {
        [ WebBoard.name ]: WebBoard.view_functions(),
      }
    }

  }

  componentDidMount() {
    // fill the state
  }

  render() {
    return (
      <h1>NOt this one!</h1>
    );
  }

}
