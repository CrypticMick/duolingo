import { useState, useEffect } from "react";
import { Text, View, Alert } from "react-native";
import ImageOption from "./src/components/ImageOption";
import Button from "./src/components/Button";

import styles from "./App.styles";
import questions from "./assets/data/imageMultipleChoiceQuestions";
// import question from "./assets/data/oneQuestionWithOption";

export default function App() {
  const [selected, setSelected] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(
    questions[currentQuestionIndex]
  );

  useEffect(() => {
    console.log("useEffect called");
    setCurrentQuestion(questions[currentQuestionIndex]);
  }, [currentQuestionIndex]);

  // check if selected choice is correct
  const onButtonPress = () => {
    if (selected.correct) {
      Alert.alert("Correct!");
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      Alert.alert("Wrong");
    }
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>{currentQuestion.question}</Text>

      <View style={styles.optionsContainer}>
        {/* dynamically map values from dummy data array */}
        {currentQuestion.options.map((option) => (
          <ImageOption
            key={option.id}
            image={option.image}
            text={option.text}
            isSelected={selected?.id === option.id}
            onPress={() => setSelected(option)}
          />
        ))}
      </View>
      <Button text="Check" onPress={onButtonPress} disabled={!selected} />
    </View>
  );
}
