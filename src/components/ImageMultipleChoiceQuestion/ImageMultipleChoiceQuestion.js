import { useState } from "react";
import { Text, View } from "react-native";
import PropTypes from "prop-types";
import ImageOption from "../ImageOption";
import Button from "../Button";

import styles from "./styles";

const ImageMultipleChoiceQuestion = ({
  question,
  onCorrectAnswer,
  onWrongAnswer,
}) => {
  const [selected, setSelected] = useState(null);

  // check if selected choice is correct
  const onButtonPress = () => {
    if (selected.correct) {
      // Alert.alert("Correct!");

      onCorrectAnswer();
      // resets selected styling for a correct answer
      setSelected(null);
    } else {
      onWrongAnswer();
    }
  };

  return (
    <>
      <Text style={styles.title}>{question.question}</Text>

      <View style={styles.optionsContainer}>
        {/* dynamically map values from dummy data array */}
        {question.options.map((option) => (
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
    </>
  );
};

ImageMultipleChoiceQuestion.propTypes = {
  question: PropTypes.shape({
    question: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        image: PropTypes.string,
        text: PropTypes.string,
        correct: PropTypes.bool,
      })
    ).isRequired,
  }).isRequired,
};

export default ImageMultipleChoiceQuestion;
