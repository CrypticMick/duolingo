import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#58CC02",
    height: 50,
    marginVertical: 10,

    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",

    // borders
    borderRadius: 5,
    borderBottomWidth: 5,
    borderColor: "#57A600",
  },
  disabledContainer: {
    backgroundColor: "lightgrey",
    borderColor: "grey",
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,

    // textDecorationLine: "underline",
    borderColor: "white",
    borderBottomWidth: 1.5,
  },
});

export default styles;
