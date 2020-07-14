import { NewQuestionType } from "../common/types";

export default async ({ question, choices }: NewQuestionType) => {
  const response = await fetch(`https://polls.apiblueprint.org/questions?`, {
    method: "post",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
    body: JSON.stringify({
      question,
      choices: choices,
    }),
  });

  return response.status !== 201 ? null : await response.json();
};
