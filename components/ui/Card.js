import { StyleSheet, View } from "react-native";
import Colors from "../../utils/colors";

function Card(props) {
   return <View style={styles.card}>{props.children}</View>;
}
export default Card;

const styles = StyleSheet.create({
   card: {
      alignItems: "center",
      marginTop: 36,
      marginHorizontal: 24,
      padding: 16,
      backgroundColor: Colors.primary700,
      borderRadius: 8,
      elevation: 10,
   },
});
