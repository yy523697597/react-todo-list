import React, { Component } from "react";
import TodoListUi from "./todo-ui";
import {
  getTodoList,
  changeInputAction,
  addListItemAction,
  deleteItemAction
} from "./store/action-creators";
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
    const action = changeInputAction(e.target.value);
    store.dispatch(action);
  }

  addList() {
    const action = addListItemAction();
    store.dispatch(action);
  }

  deleteItem(index) {
    const action = deleteItemAction(index);
    store.dispatch(action);
  }

  storeChange() {
    console.log(store.getState());
    this.setState(store.getState());
  }

  componentDidMount() {
    const action = getTodoList();
    store.dispatch(action);
  }
}
export default Todo;
