import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  title: {
    fontSize: "18",
    fontWeight: "bold",
    alignSelf: "flex-start",
  },
  row: {
    flexDirection: "row",
    alignSelf: "flex-start",
    marginVertical: 10,
  },
  text: {
    alignSelf: "flex-end",
    fontSize: 18,
  },
  blank: {
    borderBottomWidth: 2,
    borderBottomColor: "lightgrey",
    width: 100,
  },
  optionsContainer: {
    flex: 1,
    alignItems: "center",
    alignContent: "center", // vertically centers text when flexWrap is used
    flexDirection: "row",
    flexWrap: "wrap", // words will overflow to next line
  },
});

export default styles;
