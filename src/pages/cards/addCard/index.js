import React, { useState } from "react";
import PureAddCard from "./addCard";
import { useDispatch } from "react-redux";
import { CARDS } from "../../../constants";

const AddCard = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [card, setCard] = useState({ number: "", holderName: "", validTo: "" });

  const dispatch = useDispatch();

  const handleDateChange = (date) => {
    setSelectedDate(date);
    var month = date.getUTCMonth() + 1; //months from 1-12
    var year = date.getUTCFullYear();
    setCard({ ...card, validTo: year + "/" + month });
  };

  const handleNumberChange = (e) => {
    let transform = e?.target?.value.match(/.{1,4}/g);
    setCard({ ...card, number: transform?.join("-") });
  };
  const handleHolderChange = (e) => {
    setCard({ ...card, holderName: e.target.value });
  };
  const handleSubmit = (e) => {
    if (selectedDate > new Date()) {
      dispatch({
        type: CARDS.ADD_CARD,
        payload: card,
      });
    } else {
      alert("Please insert valid date");
    }
  };
  const disabledSave =
    card?.holderName?.length === 0 || card?.number?.length !== 19;
  return (
    <PureAddCard
      handleDateChange={handleDateChange}
      handleNumberChange={handleNumberChange}
      handleHolderChange={handleHolderChange}
      selectedDate={selectedDate}
      card={card}
      handleSubmit={handleSubmit}
      disabledSave={disabledSave}
    />
  );
};

export default AddCard;
