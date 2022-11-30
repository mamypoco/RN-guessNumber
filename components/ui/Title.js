//to set configurable title
import { Text, StyleSheet } from "react-native";

function Title(props) {
   return <Text style={styles.title}>{props.children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
   title: {
      fontFamily: "open-sans-bold",
      fontSize: 24,
      // fontWeight: "bold",
      color: "white",
      textAlign: "center",
      borderWidth: 2,
      borderColor: "white",
      padding: 12,
   },
});
