const INCREMENT = "incrementVoter";
const DECREMENT = "decrementVoter";

export const incrementVoter = () => ({
  type: INCREMENT,
});

export const decrementVoter = () => ({
  type: DECREMENT,
});

const initialState = {
  count: 0,
};

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
