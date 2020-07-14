import {
  GET_QUESTIONS,
  VOTE_CHOICE,
  SET_LOADING,
  CREATE_QUESTION,
  SET_NOTIFICATION,
  SET_CREATING_QUESTION,
} from "../constants";
import { QuestionType, NotificationType } from "../common/types";

export default {
  setQuestions: (questions: QuestionType[]) => {
    return {
      type: GET_QUESTIONS,
      payload: { questions },
    };
  },
  voteChoice: (questionUrl: string, choiceUrl: string) => {
    return {
      type: VOTE_CHOICE,
      payload: { questionUrl, choiceUrl },
    };
  },
  setLoading: (value: boolean) => ({ type: SET_LOADING, payload: value }),

  createQuestion: (question: QuestionType) => {
    return {
      type: CREATE_QUESTION,
      payload: question,
    };
  },
  setNotification: (notification: NotificationType) => {
    return {
      type: SET_NOTIFICATION,
      payload: notification,
    };
  },
  setCreatingQuestion: (value: boolean) => {
    return {
      type: SET_CREATING_QUESTION,
      payload: value,
    };
  },
};
