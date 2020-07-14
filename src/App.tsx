import React, { createContext, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Body } from "./styles";
import Questions from "./components/Questions";
import QuestionDetails from "./components/QuestionDetails";
import theme from "./theme";
import { QuestionType } from "./common/types";

import actions from "./actions";
import getQuestions from "./lib/getQuestions";
import CreateQuestion from "./components/CreateQuestion";
import Snackbar from "./components/Snackbar";
import { ERROR_MESSAGE } from "./constants";
import { useState } from "react";

export const DataContext = createContext<{
  questions: QuestionType[];
  loading: boolean;
}>({
  questions: [],
  loading: false,
});

const App = () => {
  const dispatch = useDispatch();
  const [isDisconnected, setDisconnected] = useState(false);

  const handleConnection = () => {
    setDisconnected(!navigator.onLine);
  };

  useEffect(() => {
    window.addEventListener("online", handleConnection);
    window.addEventListener("offline", handleConnection);
    return () => {
      window.removeEventListener("online", handleConnection);
      window.removeEventListener("offline", handleConnection);
    };
  }, []);

  useEffect(() => {
    const getData = async () => {
      dispatch(await actions.loadQuestions());
    };

    getData();
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <Body>
        {isDisconnected ? (
          <h1>Oops! You are currently disconnected</h1>
        ) : (
          <Router>
            <Switch>
              <Route path="/" exact component={Questions} />
              <Route path="/questions/:id" exact component={QuestionDetails} />
              <Route path="/create" exact component={CreateQuestion} />
            </Switch>
          </Router>
        )}
        {<Snackbar />}
      </Body>
    </ThemeProvider>
  );
};

export default App;
