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
        {/* {question.options.map(option => <ImageOption image={option.image} text={option.text}/> )} */}

        <ImageOption
          image={question.options[0].image}
          text={question.options[0].text}
        />
        <ImageOption
          image={question.options[1].image}
          text={question.options[1].text}
        />
        <ImageOption
          image={question.options[2].image}
          text={question.options[2].text}
        />
        <ImageOption
          image={question.options[3].image}
          text={question.options[3].text}
        />
      </View>
    </View>
  );
}
