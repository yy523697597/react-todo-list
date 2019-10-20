import React, { Component, Fragment } from "react";
import Item from "./item";
import { Input, Button, List } from "antd";
import store from "./store/index";
import "antd/dist/antd.css";
class xjj extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();

    this.deleteItem = this.deleteItem.bind(this);
    this.getItem = this.getItem.bind(this);
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
            增加服务
          </Button>
        </div>
        <List
          bordered
          dataSource={this.state.list}
          renderItem={item => <List.Item>{item}</List.Item>}
          style={{ width: "250px", marginLeft: "10px" }}
        />
      </Fragment>
    );
  }

  getItem() {
    return this.state.list.map((item, index) => {
      return (
        <Item content={item} deleteItem={this.deleteItem} key={item + index} />
      );
    });
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
    console.log(index);
    let list = this.state.list;
    list.splice(index, 1);
    this.setState({
      list
    });
  }

  storeChange() {
    console.log(store.getState());
    this.setState(store.getState());
  }
}
export default xjj;
