import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CARDS } from "../../constants";
import { CircularProgressWrap, Wrapper } from "./cards.styles";
import { CircularProgress, Grid } from "@material-ui/core";
import { Card } from "../../components/card/card.component";

export const Cards = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { cards, loading } = useSelector((s) => s.cards);

  useEffect(() => {
    dispatch({
      type: CARDS.GET_CARDS,
    });
  }, [dispatch]);

  const goToCard = (id) => {
    history.push(`${history.location.pathname}/${id}/edit`);
  };

  const cardsContent = loading ? (
    <CircularProgressWrap>
      <CircularProgress color="primary" size={50}></CircularProgress>
    </CircularProgressWrap>
  ) : (
    <Grid container spacing={2}>
      {cards?.length > 0 ? (
        cards?.map((card, key) => {
          return (
            <Grid key={key} item xs={4} onClick={() => goToCard(card?.id)}>
              <Card key={key} card={card} />
            </Grid>
          );
        })
      ) : (
        <h1>No cards currently</h1>
      )}
    </Grid>
  );

  return (
    <>
      <Wrapper>{cardsContent}</Wrapper>
    </>
  );
};
