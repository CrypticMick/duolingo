import { Image, StyleSheet, Text, View } from "react-native";
import styles from "./App.styles";

export default function App() {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>Which of these is the "glass"?</Text>

      <View style={styles.optionsContainer}>
        <View style={styles.optionContainer}>
          <Image
            source={{
              uri: "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
            }}
            resizeMode="contain"
            style={styles.optionImage}
          />
          <Text styles={styles.optionText}>Glass</Text>
        </View>
      </View>
    </View>
  );
}
