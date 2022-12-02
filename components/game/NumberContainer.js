import { Text, View, StyleSheet, Dimensions } from "react-native";
import Colors from "../../utils/colors";

function NumberContainer({ children }) {
   return (
      <View style={styles.container}>
         <Text style={styles.numberText}>{children}</Text>
      </View>
   );
}

export default NumberContainer;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
   container: {
      borderWidth: 4,
      borderColor: Colors.accent600,
      padding: deviceWidth < 380 ? 12 : 24,
      //if device width is smaller than 380 pixels, use 12 otherwise 24
      margin: deviceWidth < 380 ? 12 : 24,
      borderRadius: 8,
      alignItems: "center",
      justifyContent: "center",
   },
   numberText: {
      fontFamily: "open-sans-bold",
      color: Colors.accent600,
      fontSize: deviceWidth < 380 ? 28 : 36,
      // fontWeight: "bold",
   },
});
