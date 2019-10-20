const defaultStore = {
  inputValue: "",
  list: [
    "早8点开晨会，分配今天的开发工作",
    "早9点和项目经理作开发需求讨论会",
    "晚5:30对今日代码进行review"
  ]
};
export default (state = defaultStore, action) => {
  const newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case "change_input_value":
      newState.inputValue = action.value;
      return newState;
    case "add_list_item":
      if (newState.inputValue && newState.inputValue.trim()) {
        newState.list.push(newState.inputValue);
        newState.inputValue = "";
        return newState;
      } else {
        alert("日程不能为空");
      }
      break;
    case "delete-item":
      // console.log(action.value);
      newState.list.splice(action.value, 1);
      return newState;
    default:
      return state;
  }
};
