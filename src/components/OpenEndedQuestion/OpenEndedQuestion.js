import { Text, View, TextInput, Image } from "react-native";
import Button from "../Button";
import styles from "./styles";
import mascot from "../../../assets/images/mascot.png";

const OpenEndedQuestion = () => {
  const onButtonPress = () => {};

  return (
    <>
      <Text style={styles.title}>Translate this sentence</Text>
      <View style={styles.row}>
        <Image source={mascot} style={styles.mascot} resizeMode="contain" />

        {/* sentence container */}
        <View style={styles.sentenceContainer}>
          <Text style={styles.sentence}>Sentence</Text>
        </View>
      </View>

      <TextInput placeholder="Type in English" style={styles.textInput} />

      <Button text="Check" onPress={onButtonPress} disabled={true} />
    </>
  );
};

export default OpenEndedQuestion;
