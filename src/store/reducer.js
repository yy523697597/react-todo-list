import {
  DELETE_ITEM,
  CHANGE_INPUT_VALUE,
  ADD_LIST_ITEM,
  GET_LIST
} from "./action-types";
const defaultStore = {
  inputValue: "",
  list: []
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

    case GET_LIST:
      newState.list = action.value;
      return newState;
    default:
      return state;
  }
};
