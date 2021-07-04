/*
 * @brief - Need a floated (drag and drop) elements.
 */

import React from 'react';


class Floated extends React.Component {
  constructor(props) {
    super(props);

    this.className = "baseBoard";
    this.style = {
      width: "100px",
      height: "100px"
    }

  }

  render() {
    return (
      <div className={this.className} style={this.style}>{this.className}</div>
    );
  }

}

export default Floated;
