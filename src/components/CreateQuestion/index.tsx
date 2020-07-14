import React, { useState, ChangeEvent } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { Container } from "./styles";
import actions from "../../actions";
import { Flex } from "../../styles";
import TextField from "../atoms/TextField";
import Button from "../atoms/Button";
import Loader from "../atoms/Loader";
import { DefaultRootState } from "../../common/types";

const CreateQuestion = () => {
  const { creating } = useSelector(
    (state: DefaultRootState) => state.questionReducer
  );
  const { loading } = useSelector(
    (state: DefaultRootState) => state.appReducer
  );

  const dispatch = useDispatch();
  const [questionValue, setQuestionValue] = useState("");
  const [choicesValue, setchoicesValue] = useState("");

  const handleTextChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setQuestionValue(target.value);
  };

  const handleChoicesChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setchoicesValue(target.value);
  };

  const submitQuestion = async () => {
    dispatch(
      actions.newQuestion({
        question: questionValue,
        choices: choicesValue.split(","),
      })
    );
  };

  const canSubmit =
    questionValue.length && choicesValue.split(",").length >= 2 && !creating;

  return (
    <>
      <Flex>
        <h1>Create Question</h1>
        <Link to="/">Back to home</Link>
      </Flex>
      <Container>
        {loading ? (
          <Loader />
        ) : (
          <>
            <label htmlFor="question-field">Question:</label>
            <TextField
              placeholder="Your Question"
              autoFocus
              data-testid="question-field"
              name="question-field"
              tabIndex={0}
              value={questionValue}
              height={"50px"}
              fontSize="20px"
              onChange={handleTextChange}
            />

            <label htmlFor="question-field">Choices:</label>
            <TextField
              placeholder="Your choices separated by commas"
              autoFocus
              data-testid="question-field"
              name="question-field"
              tabIndex={0}
              value={choicesValue}
              height={"50px"}
              fontSize="20px"
              onChange={handleChoicesChange}
            />

            <Button
              fontSize="20px"
              height="50px"
              onClick={submitQuestion}
              disabled={!canSubmit}
            >
              {creating ? "Creating..." : "Create"}
            </Button>
          </>
        )}
      </Container>
    </>
  );
};

export default CreateQuestion;
