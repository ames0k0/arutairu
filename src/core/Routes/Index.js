/*
 * @brief - Apps for route.
 *
 * Load information from database or use the default one!
 *
 *
 * Default
 * -------
 * kk
 */


import React from 'react';
// import HelloWorldApp from '../Apps/HelloWorld';
// import LoadPageFromDatabase from '../Apps/DataLoader';
import PolygonRoute from './Polygon';


class IndexRoute extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <PolygonRoute />
    );
  }

}


export default IndexRoute;
