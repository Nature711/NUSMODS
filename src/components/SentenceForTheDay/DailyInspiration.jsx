import React, { useState } from "react";
import styled from "styled-components/macro";
import { Button, Input } from "../../globalStyles";
import { quoteList } from "./Quotes";

const QuoteWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: space-between;
  margin-right: 10px;
  margin-left: 10px;
`;

const QuoteBlock = styled.div`
  width: 85%;
  height: 90px;
  text-align: right;
  font-size: 1.5em;
  padding-left: 55px;
  padding-right: 20px;
  padding-top: 10px;
  color: #555555;
  border-bottom: 8px solid #78c0a8;
  border-radius: 0.2em;
  line-height: 1.6;
  background-color: #ededed;
  position: relative;
  &:before {
    content: open-quote;
    font-size: 130px;
    position: absolute;
    left: 0px;
    top: -50px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

function DailyInspiration() {
  const [customClick, setCustomClick] = useState(false);
  const [confirmClick, setConfirmClick] = useState(false);
  const [number, setNumber] = useState(0); //a number indicating which quote to pick from the quotoList
  const [quote, setQuote] = useState(quoteList[number]);

  const OnShuffleQuoteClick = () => {
    const num = number + 1;
    setNumber(num % 9); //looping through a list of 10 Quotes
    setQuote(quoteList[num]);
  };

  const OnCustomClick = () => {
    setQuote("");
    setCustomClick(!customClick);
  };

  const OnConfirmClick = () => {
    setConfirmClick(!confirmClick);
    setCustomClick(!customClick);
    if (quote === "") {
      setQuote(quoteList[number]); //set to default if nothing is entered
    } else {
      setQuote(quote); //display the input quote
    }
  };

  const handleInput = (e) => setQuote(e.target.value);

  return (
    <QuoteWrapper>
      <QuoteBlock>
        {customClick ? (
          <Input
            placeholder="enter your favorite quote"
            onChange={handleInput}
            inputwidth="95%"
          />
        ) : (
          quote
        )}
      </QuoteBlock>
      <ButtonWrapper>
        <Button buttonmargin="5px" onClick={OnShuffleQuoteClick}>
          Shuffle
        </Button>
        {customClick ? (
          <Button buttonmargin="5px" onClick={OnConfirmClick}>
            Confirm
          </Button>
        ) : (
          <Button buttonmargin="5px" onClick={OnCustomClick}>
            Customize
          </Button>
        )}
      </ButtonWrapper>
    </QuoteWrapper>
  );
}

export default DailyInspiration;
