export type QuestionType = {
  question: string;
  published_at: string;
  url: string;
  totalVotes: number;
  choices: {
    choice: string;
    url: string;
    votes: number;
  }[];
};

export type NewQuestionType = { question: string; choices: string[] };

export type NotificationType = {
  type: string | null;
  message: string | null;
  hide: boolean;
};

export type DefaultRootState = {
  appReducer: {
    loading: boolean;
    notification: {
      type: null | string;
      message: null | string;
      hide: boolean;
    };
  };
  questionReducer: {
    questions: QuestionType[];
    creating: boolean;
    voting: boolean;
  };
};

export type ReducerAction = {
  type: string;
  payload: any;
};
