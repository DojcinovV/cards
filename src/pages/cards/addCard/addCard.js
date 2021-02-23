import React from "react";
import {
  CardContainer,
  FormContainer,
  Wrapper,
  Form,
  TextFieldItem,
} from "./addCard.styles";
import { Card } from "../../../components/card/card.component";
import DateFnsUtils from "@date-io/date-fns";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import Button from "@material-ui/core/Button";

const PureAddCard = ({
  handleDateChange,
  handleNumberChange,
  handleHolderChange,
  selectedDate,
  card,
  handleSubmit,
  disabledSave,
}) => {
  console.log("card", card);
  return (
    <>
      <h1>Add card</h1>
      <Wrapper>
        <CardContainer>
          <Card card={card} />
        </CardContainer>
        <FormContainer>
          <h1>User Details</h1>
          <Form autoComplete="off">
            <TextFieldItem
              id="outlined-basic"
              label="Card Number"
              variant="outlined"
              onInput={(e) => {
                e.target.value = Math.max(0, parseInt(e.target.value))
                  .toString()
                  .slice(0, 16);
              }}
              type="number"
              onChange={handleNumberChange}
            />
            <TextFieldItem
              id="outlined-basic"
              label="Card Holder"
              variant="outlined"
              type="text"
              onChange={handleHolderChange}
            />
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                margin="normal"
                id="date-picker-dialog"
                label="Date picker dialog"
                format="MM/dd/yyyy"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
            </MuiPickersUtilsProvider>
          </Form>
        </FormContainer>
      </Wrapper>
      <div style={{ textAlign: "center" }}>
        <Button
          variant="contained"
          color="primary"
          disabled={disabledSave}
          onClick={handleSubmit}
        >
          Add Card
        </Button>
      </div>
    </>
  );
};

export default PureAddCard;
