/*
 * @brief - Minimum Card board
 */

import React from 'react';
import Floated from './Base';


class CardBoard extends Floated {
  constructor(props) {
    super(props);
  }

  static view_functions() {
    return ['view_me', 'not_me', 'skip_me', 'view_others'];
  }

  updateStyle() {
    let data = {};

    if (true) {
      data = {
        width: this.style.width, height: this.style.height, backgroundColor: "green"
      };

    } else {
      data = {
        width: (Number.parseInt(this.style.width.replace("%", "0")) - 300).toString() + "px",
        height: (Number.parseInt(this.style.height.replace("%", "0")) - 300).toString() + "px",
        backgroundColor: "green"
      };

    }

    return data;

  }
  render() {

    const style = this.updateStyle();

    return (
      <div
        id={this.props.order}
        key={this.props.order}
        style={style}
        // onMouseDown={this.handleMouseEvent}
        // onMouseUp={this.handleMouseEvent}>{this.props.sayHi}
        onClick={this.handleMouseEvent}>{this.props.sayHi}
      </div>
    );
  }

}

export default WebBoard;
