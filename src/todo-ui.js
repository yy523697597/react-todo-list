import React, { Fragment } from "react";

import { Input, Button, List } from "antd";
import "antd/dist/antd.css";

const TodoListUi = props => {
  return (
    <Fragment>
      <div>
        <Input
          value={props.inputValue}
          onChange={props.changeInputValue}
          placeholder="请输入您的服务"
          style={{ width: "250px", margin: "10px 10px" }}
        />
        <Button type="primary" onClick={props.addList}>
          添加日程
        </Button>
      </div>
      <List
        bordered
        dataSource={props.list}
        renderItem={(item, index) => (
          <List.Item onClick={() => props.deleteItem(index)}>{item}</List.Item>
        )}
        style={{ width: "250px", marginLeft: "10px" }}
      />
    </Fragment>
  );
};

export default TodoListUi;
