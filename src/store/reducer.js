import { DELETE_ITEM, CHANGE_INPUT_VALUE, ADD_LIST_ITEM } from "./action-types";
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
    case CHANGE_INPUT_VALUE:
      newState.inputValue = action.value;
      return newState;
    case ADD_LIST_ITEM:
      if (newState.inputValue && newState.inputValue.trim()) {
        newState.list.push(newState.inputValue);
        newState.inputValue = "";
        return newState;
      } else {
        alert("日程不能为空");
      }
      break;
    case DELETE_ITEM:
      // console.log(action.value);
      newState.list.splice(action.value, 1);
      return newState;
    default:
      return state;
  }
};
