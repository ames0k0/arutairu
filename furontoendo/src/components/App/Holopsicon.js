import React from 'react';


/*
 * @brief - Simple object with drag & drop functions
 *
 * Container that holds other Holopsicons ?
 */

class Holopsicon extends React.Component {

  constructor(props) {
    super(props);
    // {x, y} coor

    this.style = {
      width: "100%",
      height: "100%",
      // backgroundColor: "green"
    }

    this.state = {
    }

  }

  render() {
    return (
      <div
        style={this.style}
        >Holopsicon</div>
    );
  }

}


export default Holopsicon;
