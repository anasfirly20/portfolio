const INCREMENT = "incrementVoter";
const DECREMENT = "decrementVoter";

// Actions
export const increment = () => ({
  type: INCREMENT,
});

export const decrement = () => ({
  type: DECREMENT,
});

// Initial state
const initialState = {
  count: 0,
};

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};
