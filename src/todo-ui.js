import React, { Component, Fragment } from "react";

import { Input, Button, List } from "antd";
import "antd/dist/antd.css";

class TodoListUi extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <Input
            value={this.props.inputValue}
            onChange={this.props.changeInputValue}
            placeholder="请输入您的服务"
            style={{ width: "250px", margin: "10px 10px" }}
          />
          <Button type="primary" onClick={this.props.addList}>
            添加日程
          </Button>
        </div>
        <List
          bordered
          dataSource={this.props.list}
          renderItem={(item, index) => (
            <List.Item onClick={() => this.props.deleteItem(index)}>
              {item}
            </List.Item>
          )}
          style={{ width: "250px", marginLeft: "10px" }}
        />
      </Fragment>
    );
  }
}

export default TodoListUi;
