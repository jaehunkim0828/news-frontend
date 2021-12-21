import {
  INCREMENT_SUCCESS,
  DECREMENT_SUCCESS,
  CONNECTION,
} from '../action/connectAct';

export type Keys = 'top' | 'finance' | 'indu' | 'real' | 'securities' | 'venture';

export type InitialState = {
  [k in Keys]: number
};

const initialState = {
  "top": 0,
  "finance": 0,
  "indu": 0,
  "real": 0,
  "securities": 0,
  "venture": 0,
};

export function connectReducer(state = initialState, action: CONNECTION): InitialState {
  switch (action.type) {
    case INCREMENT_SUCCESS : {
      const cagegroy: Keys = action.categories;
      return { ...state, [cagegroy]: state[cagegroy] + action.payload };
    }
    case DECREMENT_SUCCESS : {
      const cagegroy: Keys = action.categories;
      return { ...state, [cagegroy]: state[cagegroy] - action.payload };
    }
    default:
      return state;
  }
}