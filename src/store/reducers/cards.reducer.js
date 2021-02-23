import { CARDS } from "../../constants";

const initialState = {
  cards: [
    {
      id: "1",
      number: "4532-8091-9812-1211",
      holderName: "Vasko",
      validTo: "2021/01",
    },
    {
      id: "2",
      number: "4532-8091-9812-1211",
      holderName: "Vasko",
      validTo: "2022/01",
    },
    {
      id: "3",
      number: "4532-8091-9812-1211",
      holderName: "Vasko",
      validTo: "2021/01",
    },
    {
      id: "4",
      number: "4532-8091-9812-1211",
      holderName: "Vasko",
      validTo: "2021/01",
    },
  ],
  loading: false,
};

const cards = (state = initialState, { type, payload }) => {
  switch (type) {
    case CARDS.ADD_CARD_SUCCESSFULL:
      return {
        ...state,
        cards: [...state.cards, payload],
      };
    case CARDS.EDIT_CARD_SUCCESSFULL:
      return {
        ...state,
        cards: payload.cards,
      };
    default:
      return state;
  }
};

export default cards;
