const INCREMENT = "incrementZikr";
const RESET = "resetZikr";

export const incrementZikr = () => ({
  type: INCREMENT,
});

export const resetZikr = () => ({
  type: RESET,
});

const initialStateZikr = {
  countZikr: 0,
};

export default (state = initialStateZikr, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, countZikr: state.countZikr + 1 };
    case RESET:
      return { ...state, countZikr: 1 };
    default:
      return state;
  }
};
