import { View, Text, StyleSheet } from "react-native";
import Colors from "../../utils/colors";

function GuessLogItem({ roundNumber, guess }) {
   return (
      <View style={styles.listItem}>
         <Text style={styles.itemText}>#{roundNumber}</Text>
         <Text style={styles.itemText}>Opponent's Guess: {guess}</Text>
      </View>
   );
}

export default GuessLogItem;

const styles = StyleSheet.create({
   listItem: {
      borderColor: Colors.primary700,
      borderWidth: 1,
      borderRadius: 40,
      padding: 12,
      marginVertical: 8,
      backgroundColor: Colors.accent500,
      flexDirection: "row",
      justifyContent: "space-between",
      width: "100%",
      elevation: 4,
   },
   itemText: {
      fontFamily: "open-sans",
   },
});
