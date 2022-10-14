import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    paddingTop: 35,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "stretch",
  },
  optionsContainer: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignContent: "space-between",
  },
  optionContainer: {
    // border
    borderWidth: 2,
    borderBottomWidth: 4,
    borderColor: "lightgray",
    borderRadius: 10,

    alignItems: "center",

    //size
    width: "48%",
    height: "48%",

    //spacing
    padding: 10,
  },
  optionImage: {
    width: "100%",
    flex: 1,
  },
  optionText: {},
});

export default styles;
