import { Text, View, StyleSheet } from "react-native";

const ProgressBar = ({ progress }) => {
  return (
    <View style={styles.bg}>
      <View style={[styles.fg, { width: `${progress * 100}%` }]}>
        <View style={styles.highlight} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bg: {
    backgroundColor: "lightgrey",
    borderRadius: 15,
    height: 30,
    flex: 1,
  },
  fg: {
    backgroundColor: "#FAC800",
    borderRadius: 15,
    flex: 1,
  },
  highlight: {
    backgroundColor: "#FAD131",
    width: "85%",
    height: 5,
    borderRadius: 5,
    marginTop: 5,
    alignSelf: "center",
  },
});

export default ProgressBar;
