import React, { Component, Fragment } from "react";
import TodoListUi from "./todo-ui";
import {
  DELETE_ITEM,
  CHANGE_INPUT_VALUE,
  ADD_LIST_ITEM
} from "./store/action-types";
import store from "./store/index";
class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();

    this.deleteItem = this.deleteItem.bind(this);
    this.changeInputValue = this.changeInputValue.bind(this);
    this.storeChange = this.storeChange.bind(this);
    this.addList = this.addList.bind(this);
    // 订阅 redux 更改
    store.subscribe(this.storeChange);
  }

  render() {
    return (
      <TodoListUi
        inputValue={this.state.inputValue}
        list={this.state.list}
        changeInputValue={this.changeInputValue}
        deleteItem={this.deleteItem}
        addList={this.addList}
      />
    );
  }
  changeInputValue(e) {
    const action = {
      type: CHANGE_INPUT_VALUE,
      value: e.target.value
    };
    store.dispatch(action);
  }

  addList() {
    const action = {
      type: ADD_LIST_ITEM
    };
    store.dispatch(action);
  }

  deleteItem(index) {
    const action = {
      type: DELETE_ITEM,
      value: index
    };
    store.dispatch(action);
  }

  storeChange() {
    console.log(store.getState());
    this.setState(store.getState());
  }
}
export default Todo;
