import { Text, View } from "react-native";
import styles from "./App.styles";
import ImageOption from "./src/components/ImageOption";
import question from "./assets/data/oneQuestionWithOption";

export default function App() {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>{question.question}</Text>

      <View style={styles.optionsContainer}>
        {/* dynamically map values from dummy data array */}
        {question.options.map((option) => (
          <ImageOption image={option.image} text={option.text} />
        ))}
      </View>
    </View>
  );
}
