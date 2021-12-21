export const INCREMENT_SUCCESS = 'INCREMENT_SUCCESS';

export const DECREMENT_SUCCESS = 'DECREMENT_SUCCESS';

type Keys = 'top' | 'finance' | 'indu' | 'real' | 'securities' | 'venture';

export type CONNECTION = { 
  type: 'INCREMENT_SUCCESS' | 'DECREMENT_SUCCESS',
  payload: 1,
  categories: Keys,
};

export function increaseConnecting(categories: Keys): CONNECTION {
  return { type: INCREMENT_SUCCESS, payload: 1, categories}
};

export function decreaseConnecting(categories: Keys): CONNECTION {
  return { type: DECREMENT_SUCCESS, payload: 1, categories }
};
