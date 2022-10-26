import { useState } from "react";
import { Text, View, TextInput, Image } from "react-native";
import Button from "../Button";
import styles from "./styles";
import mascot from "../../../assets/images/mascot.png";

const OpenEndedQuestion = ({ question, onCorrectAnswer, onWrongAnswer }) => {
  const [input, setInput] = useState("");

  const onButtonPress = () => {
    if (question.answer.toLowerCase().trim() === input.toLowerCase().trim()) {
      onCorrectAnswer();
    } else {
      onWrongAnswer();
    }
    setInput("");
  };

  return (
    <>
      <Text style={styles.title}>Translate this sentence</Text>
      <View style={styles.row}>
        <Image source={mascot} style={styles.mascot} resizeMode="contain" />

        {/* sentence container */}
        <View style={styles.sentenceContainer}>
          <Text style={styles.sentence}>{question.text}</Text>
        </View>
      </View>

      <TextInput
        value={input}
        onChangeText={setInput}
        // onChangeText={(text) => setInput(text)}
        placeholder="Type in English"
        style={styles.textInput}
        multiline={true} // brings text input field to the top on iOS
        textAlignVertical="top" // brings text input field to the top on Android
      />

      <Button text="Check" onPress={onButtonPress} disabled={!input} />
    </>
  );
};

export default OpenEndedQuestion;
