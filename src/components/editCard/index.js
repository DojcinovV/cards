import React, { useState } from "react";
import PureEditCardComponent from "./PureEditCard";
import { useDispatch } from "react-redux";
import { CARDS } from "../../constants";
import { useEffect } from "react";

const EditCardComponent = ({ card }) => {
  const dispatch = useDispatch();

  const [number, setnumber] = useState(card?.number?.replaceAll("-", ""));
  const [holderName, setholderName] = useState(card?.holderName);
  const [validTo, setvalidto] = useState(card?.validTo);

  useEffect(() => {
    setnumber(card?.number?.replaceAll("-", ""));
    setholderName(card?.holderName);
    setvalidto(card?.validTo);
  }, [setnumber, setholderName, setvalidto, card]);

  const handleDateChange = (date) => {
    var month = date.getUTCMonth() + 1; //months from 1-12
    var year = date.getUTCFullYear();
    setvalidto(year + "/" + month);
  };

  const handleNumberChange = (e) => {
    setnumber(e.target.value);
  };

  const handleHolderChange = (e) => {
    setholderName(e.target.value);
  };

  const handleSubmit = (e) => {
    var dateParts = validTo.split("/");
    var checkDate = new Date(dateParts[0], dateParts[1], 1);
    if (checkDate > new Date()) {
      dispatch({
        type: CARDS.EDIT_CARD,
        payload: {
          id: card.id,
          number: number,
          holderName: holderName,
          validTo: validTo,
        },
      });
    } else {
      alert("Please insert valid date");
    }
  };
  const disabledSave = holderName?.length === 0 || number?.length !== 16;
  return (
    <PureEditCardComponent
      handleDateChange={handleDateChange}
      handleNumberChange={handleNumberChange}
      handleHolderChange={handleHolderChange}
      validTo={validTo}
      number={number}
      holderName={holderName}
      card={card}
      handleSubmit={handleSubmit}
      disabledSave={disabledSave}
    />
  );
};

export default EditCardComponent;
