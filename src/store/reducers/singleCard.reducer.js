import { CARDS } from "../../constants";

const initalState = {
  card: [],
};

const singleCard = (state = initalState, { type, payload }) => {
  switch (type) {
    case CARDS.GET_SINGLE_SUCCESSFULL:
      return {
        ...state,
        card: payload,
      };
    default:
      return state;
  }
};

export default singleCard;
