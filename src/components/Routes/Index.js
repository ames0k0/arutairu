/*
 * @brief - Apps for route.
 */

import React from 'react';
import HelloWorldApp from '../Apps/HelloWorld';


class IndexRoute extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <HelloWorldApp />
    );
  }

}


export default IndexRoute;
