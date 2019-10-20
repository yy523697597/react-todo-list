import React, { Component, Fragment } from "react";
import { Input, Button, List } from "antd";
import store from "./store/index";
import "antd/dist/antd.css";
class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();

    // this.deleteItem = this.deleteItem.bind(this);
    this.changeInputValue = this.changeInputValue.bind(this);
    this.storeChange = this.storeChange.bind(this);
    this.addList = this.addList.bind(this);
    // 订阅 redux 更改
    store.subscribe(this.storeChange);
  }

  render() {
    return (
      <Fragment>
        <div>
          <Input
            value={this.state.inputValue}
            onChange={this.changeInputValue}
            placeholder="请输入您的服务"
            style={{ width: "250px", margin: "10px 10px" }}
          />
          <Button type="primary" onClick={this.addList}>
            添加日程
          </Button>
        </div>
        <List
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => (
            <List.Item onClick={this.deleteItem.bind(this, index)}>
              {item}
            </List.Item>
          )}
          style={{ width: "250px", marginLeft: "10px" }}
        />
      </Fragment>
    );
  }
  changeInputValue(e) {
    const action = {
      type: "change_input_value",
      value: e.target.value
    };
    store.dispatch(action);
  }

  addList() {
    const action = {
      type: "add_list_item"
    };
    store.dispatch(action);
  }

  deleteItem(index) {
    const action = {
      type: "delete-item",
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
