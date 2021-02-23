import { put, takeEvery, select } from "redux-saga/effects";
import { CARDS } from "../../constants";
import { v4 as uuidv4 } from "uuid";

export const getCards = (state) => state.cards.cards;

export function* handleAddCard(data) {
  const { number, holderName, validTo } = data.payload;
  try {
    yield put({
      type: CARDS.ADD_CARD_SUCCESSFULL,
      payload: {
        id: uuidv4(),
        number: number,
        holderName: holderName,
        validTo: validTo,
      },
    });
  } catch (e) {
    yield put({
      type: CARDS.GET_CARDS_FAILED,
      message: "Error adding Card",
    });
  }
}

export function* handleGetCard(data) {
  const { cardId } = data.payload;
  let cards = yield select(getCards);
  let card = cards?.find((c) => c.id === cardId);
  try {
    yield put({
      type: CARDS.GET_SINGLE_SUCCESSFULL,
      payload: card,
    });
  } catch (e) {
    yield put({
      type: CARDS.GET_SINGLE_FAILED,
      message: "Error getting card",
    });
  }
}

export function* handleUpdateCard(data) {
  const { id, number, holderName, validTo } = data.payload;
  try {
    let cards = yield select(getCards);
    for (var i = 0; i < cards.length; i++) {
      var obj = cards[i];

      if (id === obj.id) {
        let transform = number?.match(/.{1,4}/g);
        cards.splice(i, 1);
        cards.splice(i, 0, {
          id: id,
          number: transform?.join("-"),
          holderName: holderName,
          validTo: validTo,
        });
      }
    }
    yield put({
      type: CARDS.EDIT_CARD_SUCCESSFULL,
      payload: {
        cards,
      },
    });
  } catch (e) {
    yield put({
      type: CARDS.EDIT_CARD_FAILED,
      message: "Error adding Card",
    });
  }
  yield handleGetCard({ payload: { cardId: id } });
}

export default function* watchCards() {
  yield takeEvery(CARDS.ADD_CARD, handleAddCard);
  yield takeEvery(CARDS.GET_SINGLE, handleGetCard);
  yield takeEvery(CARDS.EDIT_CARD, handleUpdateCard);
}
