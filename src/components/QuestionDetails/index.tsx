import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { Container, Choice } from "./styles";
import Loader from "../atoms/Loader";
import actions from "../../actions";
import { Flex } from "../../styles";
import { DefaultRootState } from "../../common/types";
import Button from "../atoms/Button";

type QuestionDetailsType = {
  match?: {
    params: { id: string };
  };
};

const QuestionDetails = ({ match }: QuestionDetailsType) => {
  const { questions, voting } = useSelector(
    (state: DefaultRootState) => state.questionReducer
  );
  const { loading } = useSelector(
    (state: DefaultRootState) => state.appReducer
  );

  const [selectedChoice, setSelectedChoice] = useState("");

  const dispatch = useDispatch();

  const id = match?.params.id;

  const currentQuestion = id
    ? questions.find(({ url }) => url.split("/").pop() === id)
    : null;

  const voteForChoice = async (url: string) => {
    setSelectedChoice(url);
    currentQuestion && dispatch(actions.voteChoice(currentQuestion, url));
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Flex>
            <h1>
              Question:{" "}
              {currentQuestion ? currentQuestion?.question : "does not exist"}
            </h1>{" "}
            <Link to="/" data-testid="back-to-home-link">
              Back to home
            </Link>
          </Flex>

          {currentQuestion && (
            <Container>
              {currentQuestion.choices.map(({ choice, url, votes }, index) => {
                const totalVotes = currentQuestion.totalVotes;

                return (
                  <Choice key={index} data-testid="choice-item">
                    <span>{choice}</span>
                    <span>
                      <b>Votes:</b>{" "}
                      <span data-testid="vote-count">{votes}</span>
                    </span>
                    <span>
                      {totalVotes ? ((votes / totalVotes) * 100).toFixed(2) : 0}
                      %
                    </span>
                    <span>
                      <Button
                        data-testid="vote-button"
                        fontSize="14px"
                        width="80px"
                        height="40px"
                        onClick={() => voteForChoice(url)}
                      >
                        {voting && selectedChoice === url ? "Voting" : "Vote"}
                      </Button>
                    </span>
                  </Choice>
                );
              })}
            </Container>
          )}
        </>
      )}
    </>
  );
};

export default QuestionDetails;
