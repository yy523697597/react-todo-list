import axios from "axios";
import {
  DELETE_ITEM,
  CHANGE_INPUT_VALUE,
  ADD_LIST_ITEM,
  GET_LIST
} from "./action-types";

export const getListAction = data => ({
  type: GET_LIST,
  value: data
});
export const changeInputAction = value => ({ type: CHANGE_INPUT_VALUE, value });

export const addListItemAction = () => ({
  type: ADD_LIST_ITEM
});

export const deleteItemAction = index => ({
  type: DELETE_ITEM,
  value: index
});

export const getTodoList = () => {
  return async dispatch => {
    const res = await axios.get("/mock/getYuiTodoList");
    console.log(res);
    const action = getListAction(res.data);
    dispatch(action);
  };
};
