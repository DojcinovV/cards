import React, { useEffect } from "react";
import EditCardComponent from "../../../components/editCard";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { CARDS } from "../../../constants";

const EditCard = () => {
  const dispatch = useDispatch();
  const { cardId } = useParams();
  const { card } = useSelector((state) => state.singleCard);
  useEffect(() => {
    dispatch({
      type: CARDS.GET_SINGLE,
      payload: { cardId },
    });
    return () => {
      //cleanup
    };
  }, [dispatch, cardId]);

  return <EditCardComponent card={card} />;
};

export default EditCard;
