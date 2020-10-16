import { SIGNIN_USER } from "constants/ActionTypes";

export const userSignIn = (user) => {
  return {
    type: SIGNIN_USER,
    payload: user,
  };
};
