/*
 * @brief - Polygon to generate a route with applications.
 *
 *
 *        Polygon (WebBoard)
 *  +-----------------------------+
 *  | +---------+ +-------------+ |
 *  | | SaveApp | | TreeViewApp | |
 *  | +---------+ +-------------+ |
 *  +-----------------------------+
 */

import React from 'react';

import WebBoard from '../Boards/Web';

import SaveRouteBuiltin from '../Builtins/SaveRoute';
import ComponentTreeViewBuiltin from '../Builtins/ComponentTreeView';


export default class PolygonRoute extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const defaultComponents = [SaveRouteBuiltin, ComponentTreeViewBuiltin];

    return (
      <div>
        <WebBoard registerComponents={defaultComponents} />
        <ComponentTreeViewBuiltin />
      </div>
    );

  }

}
