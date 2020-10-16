import {
  SAVE_FRUTAS,
  SAVE_VERDURAS,
  SAVE_PEDIDO,
  SAVE_ALL_CATEGORY
} from "../constants/ActionTypes";

const inital_state = {
  frutas: null,
  verduras: null,
  pedidos: null,
  category: null,
};

export default (state = inital_state, action) => {
  switch (action.type) {
    case SAVE_FRUTAS: {
      return {
        ...state,
        frutas: action.payload,
      };
    }
    case SAVE_VERDURAS: {
      return {
        ...state,
        verduras: action.payload,
      };
    }
    case SAVE_PEDIDO: {
      return {
        ...state,
        pedidos: action.payload,
      };
    }

    case SAVE_ALL_CATEGORY: {
      return {
        ...state,
        category: action.payload,
      };
    }

    default:
      return state;
  }
};
