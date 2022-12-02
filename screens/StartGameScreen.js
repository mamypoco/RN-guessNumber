import { useState } from "react";
import {
   TextInput,
   View,
   StyleSheet,
   Alert,
   useWindowDimensions,
   KeyboardAvoidingView,
   ScrollView,
} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Colors from "../utils/colors";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

function StartGameScreen({ onPickNumber }) {
   const [enteredNumber, setEnteredNumber] = useState("");

   const { width, height } = useWindowDimensions();

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

   const marginTopDistance = height < 380 ? 30 : 100;
   //set this right before JSX code.

   return (
      <ScrollView style={styles.screen}>
         <KeyboardAvoidingView style={styles.screen} behavior="position">
            <View
               style={[styles.rootContainer, { marginTop: marginTopDistance }]}
            >
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
         </KeyboardAvoidingView>
      </ScrollView>
   );
}

export default StartGameScreen;

// const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
   screen: {
      flex: 1,
   },
   rootContainer: {
      flex: 1,
      // marginTop: deviceHeight < 380 ? 30 : 100,
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
