import { useState } from "react";
import { TextInput, View, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Colors from "../utils/colors";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

function StartGameScreen({ onPickNumber }) {
   const [enteredNumber, setEnteredNumber] = useState("");

   function numberInputHandler(enteredText) {
      setEnteredNumber(enteredText);
   }

   function resetInputHandler() {
      setEnteredNumber("");
   }

   function confirmInputHandler() {
      const chosenNumber = parseInt(enteredNumber);
      //文字列を整数に変換

      if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
         //show alert ...
         Alert.alert(
            "Invalid number",
            "Number has to be a number between 1 and 99",
            [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
         );
         return;
         //the execution for if statement stops here.
      }
      onPickNumber(chosenNumber);
      //ここで正しい数が入力されたら、app.jsのonPickNumberにパスされる＊1
   }

   return (
      <View style={styles.rootContainer}>
         <Title>Guess My Number</Title>
         <Card>
            <InstructionText>Enter a number</InstructionText>
            <TextInput
               style={styles.numberInput}
               maxLength={2}
               keyboardType="number-pad"
               autoCapitalize="none"
               autoCorrect={false}
               onChangeText={numberInputHandler}
               value={enteredNumber}
            />
            <View style={styles.buttonsContainer}>
               <View style={styles.buttonContainer}>
                  <PrimaryButton onPress={resetInputHandler}>
                     Reset
                  </PrimaryButton>
               </View>
               <View style={styles.buttonContainer}>
                  <PrimaryButton onPress={confirmInputHandler}>
                     Confirm
                  </PrimaryButton>
                  {/* onPress value was passed from the PrimaryButton to confirmInputHandler */}
               </View>
            </View>
         </Card>
      </View>
   );
}

export default StartGameScreen;

const styles = StyleSheet.create({
   rootContainer: {
      flex: 1,
      marginTop: 100,
      alignItems: "center",
   },

   numberInput: {
      height: 50,
      width: 50,
      textAlign: "center",
      fontSize: 32,
      borderBottomColor: Colors.accent500,
      borderBottomWidth: 2,
      color: Colors.accent500,
      marginVertical: 8,
      fontWeight: "bold",
   },
   buttonsContainer: {
      flexDirection: "row",
   },
   buttonContainer: {
      flex: 1,
   },
});