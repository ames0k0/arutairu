/*
 * @brief - Need a floated (drag and drop) elements.
 *
 *
 * Events
 * ------
 * Creating the element by mouse. This element will be used as tree view.
 */

import React from 'react';


export default class BaseBoard extends React.Component {
  constructor(props) {
    super(props);

    // Super
    this.key = "0";

    this.state = {
      mode: "show",
      childComponents: [],
    }

    this.style = {
      width: "100%",
      height: "100%",
      backgroundColor: "#a0caa9"
    }

    // Events
    this.handleMouseEvent = this.handleMouseEvent.bind(this);

    // Functions
    this.createBoard = this.createBoard.bind(this);

    this.registerComponents = this.registerComponents.bind(this);

  }

  componentDidMount() {
    this.registerComponents()
  }

  /**
   * register only components
   */
  registerComponents() {
    this.setState((state) => {
      let renderedComponents = state.childComponents;
      this.props.registerComponents.forEach((item, i) => {
        item.parentKey = this.key;
        item.key = renderedComponents.length ? renderedComponents[(renderedComponents.length-1)].key+1 : i;
        renderedComponents.push(item);
      })
      return {
        childComponents: renderedComponents
      }
    });
  }

  // SEE: https://codesandbox.io/s/y06mk7wr49?file=/src/index.js:753-792
  createBoard(caller, boardName, x, y, message) {
    for (let Board of this.boards) {

      if (Board.name === boardName) {
        // const newKey = (caller.key.toString() + boardIndex.toString());

        // parentBase.key => childBase (parentBase.key + childBase)
        const newKey = (this.key + (this.state.children.length + 1).toString());

        const _board = <Board x={x} y={y} message={message} order={newKey} sayHi="No" />;

        this.setState(prevState => ({
          children: [...prevState.children, _board]
        }));

        // Adding *child to the *parent
        // caller.appendChild(_board);
        // ReactDOM.render(_board, caller);
        //
        // this.children.push(_board);
        // return undefined;

      }
    }

  }

  handleMouseEvent(event) {
    console.log('EVENT:', event);

    this.createBoard(
      event.target, "WebBoard", event.clientX, event.clientY, "No thanks"
    );

    // console.log('NEW:', _board);

    // this.children.push(_board)

    console.log('LENGTH:', this.state.children.length);
    console.log(this.state.children);

    // console.log('boards', this.boards);
    // console.log('BoardName:', this.boards[0].constructor.name);
    // if (event.type === "mousedown") {
    //   this.createBoard(event.target, "WebBoard", event.clientX, event.clientY, "No thanks");
    //   console.log("mouse down", event.clientX, event.clientY);
    // } else {
    //   console.log("mouse up", event.clientX, event.clientY);
    // }

  }

  render() {
    const updated_children = this.state.children.map(function(name, index) {
      return <name key={index} />;
    });

    console.log('UPD;', updated_children);

    const u_style = {
      backgroundColor: "red",
      width: "300px",
      height: "300px"
    }

    return (
      <div
        id={this.key}
        key={this.key}
        style={this.style}
        onClick={this.handleMouseEvent}
        // onMouseDown={this.handleMouseEvent}
        // onMouseUp={this.handleMouseEvent}
      >
        { updated_children }
        <div className="na" style={u_style} >Hi</div>
      </div>
    );

  }

}
