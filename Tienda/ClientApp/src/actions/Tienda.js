import {
  GET_ALL_FRUTAS,
  SAVE_FRUTAS,
  GET_ALL_VERDURAS,
  SAVE_VERDURAS,
  SAVE_PEDIDO,
  GET_ALL_CATEGORY_BY_ID,
  SAVE_ALL_CATEGORY
} from "../constants/ActionTypes";

export const get_all_frutas = () => {
  return {
    type: GET_ALL_FRUTAS,
    payload: null,
  };
};

export const save_frutas = (data) => {
  return {
    type: SAVE_FRUTAS,
    payload: data,
  };
};

export const get_all_verduras = () => {
  return {
    type: GET_ALL_VERDURAS,
    payload: null,
  };
};

export const save_verduras = (data) => {
  return {
    type: SAVE_VERDURAS,
    payload: data,
  };
};

export const save_pedido = (payload) => {
  return {
    type: SAVE_PEDIDO,
    payload: payload,
  };
};

export const get_all_category_by_id = (id) => {
  return {
    type: GET_ALL_CATEGORY_BY_ID,
    payload: id,
  };
};

export const save_all_category = (id) => {
  return {
    type: SAVE_ALL_CATEGORY,
    payload: id,
  };
};
