import { QuestionType } from "../common/types";
import { API_URL } from "../constants";

export default async () => {
  const response = await fetch(`${API_URL}/questions`);

  if (response.status !== 200) return null;

  const questions = await response.json();

  let questionsWithTotalVotes = questions.map((props: QuestionType) => ({
    ...props,
    totalVotes: props.choices.reduce((prev, { votes }) => {
      return prev + votes;
    }, 0),
  }));

  return questionsWithTotalVotes;
};
