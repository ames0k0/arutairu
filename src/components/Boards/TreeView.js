/*
 * @brief - Just printing the avaliable things to render
 */

import React from 'react';
import BaseBoard from './Base';


export default class TreeViewBoard extends BaseBoard {
  // can import others to create a tree view
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="TreeView">TreeView</div>
    );
  }

}
