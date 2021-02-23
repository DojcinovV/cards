import React from "react";
import {
  CardContainer,
  FormContainer,
  Wrapper,
  Form,
  TextFieldItem,
} from "./editCard.styles";
import { Card } from "../../components/card/card.component";
import DateFnsUtils from "@date-io/date-fns";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import Button from "@material-ui/core/Button";

const PureEditCardComponent = ({
  card,
  handleNumberChange,
  handleHolderChange,
  handleSubmit,
  handleDateChange,
  selectedDate,
  disabledSave,
  number,
  holderName,
  validTo,
}) => {
  return (
    <>
      <h1>Edit card</h1>
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
              value={number ?? 0}
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
              value={holderName ?? ""}
              onChange={handleHolderChange}
            />
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                margin="normal"
                id="date-picker-dialog"
                label="Date picker dialog"
                format="MM/dd/yyyy"
                value={validTo ?? selectedDate}
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
          Save Card
        </Button>
      </div>
    </>
  );
};

export default PureEditCardComponent;
