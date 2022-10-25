import { useState, useEffect } from "react";
import { View, Alert } from "react-native";

import styles from "./App.styles";
import ImageMultipleChoiceQuestion from "./src/components/ImageMultipleChoiceQuestion/ImageMultipleChoiceQuestion";
import OpenEndedQuestion from "./src/components/OpenEndedQuestion/OpenEndedQuestion";

// import question from "./assets/data/oneQuestionWithOption";
// import questions from "./assets/data/imageMultipleChoiceQuestions";
// import questions from "./assets/data/openEndedQuestions";
import questions from "./assets/data/allQuestions";

export default function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(
    questions[currentQuestionIndex]
  );

  useEffect(() => {
    if (currentQuestionIndex >= questions.length) {
      Alert.alert("You Won!");
      setCurrentQuestionIndex(0);
    } else {
      setCurrentQuestion(questions[currentQuestionIndex]);
    }
  }, [currentQuestionIndex]);

  const onCorrectAnswer = () => {
    // advance to next question
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const onWrongAnswer = () => {
    Alert.alert("Wrong, try again");
  };

  return (
    <View style={styles.root}>
      {currentQuestion.type === "IMAGE_MULTIPLE_CHOICE" ? (
        <ImageMultipleChoiceQuestion
          question={currentQuestion}
          onCorrectAnswer={onCorrectAnswer}
          onWrongAnswer={onWrongAnswer}
        />
      ) : null}
      {currentQuestion.type === "OPEN_ENDED" ? (
        <OpenEndedQuestion
          question={currentQuestion}
          onCorrectAnswer={onCorrectAnswer}
          onWrongAnswer={onWrongAnswer}
        />
      ) : null}
    </View>
  );
}
