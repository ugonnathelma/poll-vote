import { Dispatch } from "react";
import {
  GET_QUESTIONS,
  VOTE_CHOICE,
  SET_LOADING,
  CREATE_QUESTION,
  SET_NOTIFICATION,
  SET_CREATING_QUESTION,
  ERROR_MESSAGE,
  SET_VOTING,
} from "../constants";
import {
  QuestionType,
  NotificationType,
  NewQuestionType,
} from "../common/types";
import createQuestion from "../lib/createQuestion";
import postChoice from "../lib/postChoice";
import getQuestions from "../lib/getQuestions";

const loadQuestions = () => {
  return async (dispatch: Dispatch<any>) => {
    dispatch(setLoading(true));
    const questions = await getQuestions();

    if (questions) {
      dispatch({ type: GET_QUESTIONS, payload: { questions } });
    } else {
      dispatch(
        setNotification({
          type: "error",
          message: ERROR_MESSAGE,
          hide: false,
        })
      );
    }
    dispatch(setLoading(false));
  };
};

const voteChoice = (question: QuestionType, url: string) => {
  return async (dispatch: Dispatch<any>) => {
    dispatch(setVoting(true));
    const response = await postChoice(url);

    if (response) {
      dispatch({
        type: VOTE_CHOICE,
        payload: { questionUrl: question.url, choiceUrl: url },
      });
    } else {
      dispatch(
        setNotification({
          type: "error",
          message: ERROR_MESSAGE,
          hide: false,
        })
      );
    }
    dispatch(setVoting(false));
  };
};

const setLoading = (value: boolean) => ({ type: SET_LOADING, payload: value });

const newQuestion = (question: NewQuestionType) => {
  return async (dispatch: Dispatch<any>) => {
    dispatch(setCreatingQuestion(true));
    const response = await createQuestion(question);

    if (response) {
      dispatch({ type: CREATE_QUESTION, payload: response });

      dispatch(
        setNotification({
          type: "success",
          message: "Question was created successfully",
          hide: false,
        })
      );
    } else {
      dispatch(
        setNotification({
          type: "error",
          message: ERROR_MESSAGE,
          hide: false,
        })
      );
    }

    dispatch(setCreatingQuestion(false));
  };
};

const setNotification = (notification: NotificationType) => {
  return {
    type: SET_NOTIFICATION,
    payload: notification,
  };
};

const setCreatingQuestion = (value: boolean) => {
  return {
    type: SET_CREATING_QUESTION,
    payload: value,
  };
};

const setVoting = (value: boolean) => {
  return {
    type: SET_VOTING,
    payload: value,
  };
};

export default {
  setCreatingQuestion,
  newQuestion,
  setNotification,
  voteChoice,
  setLoading,
  loadQuestions,
};
