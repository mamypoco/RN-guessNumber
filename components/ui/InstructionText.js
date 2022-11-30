import { Text, StyleSheet } from "react-native";
import Colors from "../../utils/colors";

function InstructionText(props) {
   return (
      <Text style={[styles.instructionText, props.style]}>
         {/* this is to overwrite default styles and pass to the parent component. If you put the props.style in the front, then you will have the new one then owerwrite with default.  */}
         {props.children}
      </Text>
   );
}
export default InstructionText;

const styles = StyleSheet.create({
   instructionText: {
      fontFamily: "open-sans",
      color: Colors.primary600,
      fontSize: 24,
   },
});
