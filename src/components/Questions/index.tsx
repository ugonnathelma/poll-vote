import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Question from "../molecules/Question";
import { Container } from "./styles";
import Loader from "../atoms/Loader";
import { Flex } from "../../styles";
import { DefaultRootState } from "../../common/types";

const Questions = () => {
  const { questions } = useSelector(
    (state: DefaultRootState) => state.questionReducer
  );
  const { loading } = useSelector(
    (state: DefaultRootState) => state.appReducer
  );
  return (
    <>
      <Flex>
        <h1>Questions</h1> <Link to="/create">Create New Question</Link>
      </Flex>
      <Container>
        {loading ? (
          <Loader />
        ) : (
          questions.map(({ question, published_at, choices, url }, index) => {
            return (
              <Link to={url} key={`${index}`}>
                <Question
                  question={question}
                  publishedAt={published_at}
                  choiceLength={choices?.length}
                />
              </Link>
            );
          })
        )}
      </Container>
    </>
  );
};

export default Questions;
