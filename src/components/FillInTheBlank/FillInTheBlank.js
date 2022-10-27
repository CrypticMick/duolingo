import { useState } from "react";
import { Alert, Text, View } from "react-native";
import Button from "../Button";
import WordOption from "../WordOption";
import styles from "./styles";

const FillInTheBlank = ({ question, onCorrectAnswer, onWrongAnswer }) => {
  const [selected, setSelected] = useState(null);

  const onButtonPress = () => {
    if (selected === question.correct) {
      onCorrectAnswer();
    } else {
      onWrongAnswer();
    }

    setSelected(null);
  };

  return (
    <>
      <Text style={styles.title}>Complete the sentence</Text>
      <View style={styles.row}>
        <Text style={styles.text}>{question.textPre}</Text>
        <View style={styles.blank}>
          {selected && (
            <WordOption text={selected} onPress={() => setSelected(null)} />
          )}
        </View>
        <Text style={styles.text}>{question.textPost}</Text>
      </View>

      <View style={styles.optionsContainer}>
        {question.options.map((option) => (
          <WordOption
            text={option}
            isSelected={selected === option}
            onPress={() => setSelected(option)}
          />
        ))}
      </View>

      <Button text="Check" onPress={onButtonPress} disabled={!selected} />
    </>
  );
};

export default FillInTheBlank;
