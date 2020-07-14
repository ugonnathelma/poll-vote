import {
  GET_QUESTIONS,
  CREATE_QUESTION,
  SET_CREATING_QUESTION,
  VOTE_CHOICE,
} from "../constants";
import { ReducerAction, QuestionType } from "../common/types";

const initialState = {
  questions: [],
  creating: false,
};

export default function appReducer(
  state = initialState,
  action: ReducerAction
) {
  switch (action.type) {
    case GET_QUESTIONS:
      return { ...state, questions: [...action.payload.questions] };
    case CREATE_QUESTION:
      return {
        ...state,
        questions: [action.payload, ...state.questions],
      };
    case VOTE_CHOICE:
      return {
        ...state,
        questions: state.questions.map((question: QuestionType) => {
          if (question.url === action.payload.questionUrl) {
            return {
              ...question,
              totalVotes: question.totalVotes + 1,
              choices: question.choices.map((choice) => {
                if (choice.url === action.payload.choiceUrl) {
                  return {
                    ...choice,
                    votes: choice.votes + 1,
                  };
                }

                return choice;
              }),
            };
          }

          return question;
        }),
      };
    case SET_CREATING_QUESTION:
      return { ...state, creating: action.payload };
    default:
      return state;
  }
}
