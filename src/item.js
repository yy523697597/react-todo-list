import React, { Component } from "react";
class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleItemClick = this.handleItemClick.bind(this);
  }
  render() {
    return <li onClick={this.handleItemClick}>{this.props.content}</li>;
  }
  handleItemClick() {
    this.props.deleteItem();
  }
}

export default Item;
