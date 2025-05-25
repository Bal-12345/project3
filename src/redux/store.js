
import { createStore } from 'redux';

// Action Types
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';

// Action Creators
export const increment = (player) => ({ type: INCREMENT, payload: player });
export const decrement = (player) => ({ type: DECREMENT, payload: player });
export const reset = (player) => ({ type: RESET, payload: player });

// Initial State
const initialState = {
  bhav: { name: 'Bhavesh', score: 0 },
  mithu: { name: 'Mithuna', score: 0 }
};

// Reducer
const scoreReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case INCREMENT:
      return {
        ...state,
        [payload]: { ...state[payload], score: state[payload].score + 1 }
      };
    case DECREMENT:
      return {
        ...state,
        [payload]: { ...state[payload], score: state[payload].score - 1 }
      };
    case RESET:
      return {
        ...state,
        [payload]: { ...state[payload], score: 0 }
      };
    default:
      return state;
  }
};

// Store
export const store = createStore(scoreReducer);
