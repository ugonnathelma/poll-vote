import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { Container, Choice } from "./styles";
import Loader from "../atoms/Loader";
import postChoice from "../../lib/postChoice";
import actions from "../../actions";
import { Flex } from "../../styles";
import { DefaultRootState } from "../../common/types";
import { ERROR_MESSAGE } from "../../constants";

type QuestionDetailsType = {
  match?: {
    params: { id: string };
  };
};

const QuestionDetails = ({ match }: QuestionDetailsType) => {
  const { questions } = useSelector(
    (state: DefaultRootState) => state.questionReducer
  );
  const { loading } = useSelector(
    (state: DefaultRootState) => state.appReducer
  );
  const dispatch = useDispatch();

  const id = match?.params.id;

  const currentQuestion = id
    ? questions.find(({ url }) => url.split("/").pop() === id)
    : null;

  const voteForChoice = async (url: string) => {
    const response = await postChoice(url);
    response
      ? currentQuestion &&
        dispatch(actions.voteChoice(currentQuestion.url, url))
      : dispatch(
          actions.setNotification({
            type: "error",
            message: ERROR_MESSAGE,
            hide: false,
          })
        );
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
            <Link to="/">Back to home</Link>
          </Flex>

          {currentQuestion && (
            <Container>
              {currentQuestion.choices.map(({ choice, url, votes }, index) => {
                const totalVotes = currentQuestion.totalVotes;

                return (
                  <Choice key={index}>
                    <span>{choice}</span>
                    <span>
                      <b>Votes:</b> {votes}
                    </span>
                    <span>
                      {totalVotes ? ((votes / totalVotes) * 100).toFixed(2) : 0}
                      %
                    </span>
                    <span>
                      <button onClick={() => voteForChoice(url)}>Vote</button>
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
