import React from "react";
import { Card, Info } from "./styles";

type QuestionType = {
  question: string;
  publishedAt: string;
  choiceLength: number;
  onClick?: () => void;
};

const Question = ({
  question,
  publishedAt,
  choiceLength,
  onClick,
}: QuestionType) => {
  const date = new Date(publishedAt);

  return (
    <Card onClick={onClick}>
      <h4>{question}</h4>
      <Info>
        <div>
          <b>Posted:</b> {date.toDateString()}
        </div>
        <div>
          {choiceLength}{" "}
          <span>
            <b>choices</b>
          </span>
        </div>
      </Info>
    </Card>
  );
};

export default Question;
