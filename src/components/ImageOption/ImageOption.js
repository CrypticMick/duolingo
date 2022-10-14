import { View, Image, Text } from "react-native";
import styles from "./styles";

const ImageOption = ({ image, text }) => (
  <View style={styles.optionContainer}>
    <Image
      source={{
        uri: image,
      }}
      resizeMode="contain"
      style={styles.optionImage}
    />
    <Text styles={styles.optionText}>{text}</Text>
  </View>
);

export default ImageOption;
