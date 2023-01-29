import {
  StyleSheet,
  View,
  SafeAreaView,
} from "react-native";
import { useState } from "react";
import Start from "./screen/Start";
import Comfirm from "./screen/Comfirm";
import Finish from "./screen/Finish";
import { LinearGradient } from "expo-linear-gradient";

export default App = () => {
  const [enteredEmail, setEnteredEmail] = useState();
  const [enteredPhoneNum, setEnteredPhoneNum] = useState();

  const [enteredSucess, setEnteredSucess] = useState(false);
  const [savePreviousInfo, setSavePreviousInfo] = useState(false);
  const [enteredFinish, setEnteredFinish] = useState(false);
  const [finishLater, setFinishLater] = useState(null);

  // add modalVisible state
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function onTextEntered(email, phoneNum) {
    setModalIsVisible(true);
    setEnteredEmail(email);
    setEnteredPhoneNum(phoneNum);
    setEnteredSucess(true);
    setSavePreviousInfo(false);
  }

  function goBackFunction(onEmailText, onPhoneNumText) {
    setEnteredEmail(onEmailText);
    setEnteredPhoneNum(onPhoneNumText);
    setSavePreviousInfo(true);
    setEnteredSucess(true);
    setModalIsVisible(false);
  }

  function goFinishFunction(onEmailText, onPhoneNumText, checkfinishLater) {
    setEnteredEmail(onEmailText);
    setEnteredPhoneNum(onPhoneNumText);
    setEnteredFinish(true);
    console.log(checkfinishLater);
    setFinishLater(checkfinishLater);
  }

  function resetFunction() {
    setEnteredEmail("");
    setEnteredPhoneNum("");
    setEnteredSucess(false);
    setSavePreviousInfo(false);
    setEnteredFinish(false);
  }

  let screen = <Start infoHandle={onTextEntered} />;

  if (enteredSucess) {
    screen = (
      <Comfirm
        modalIsVisible={modalIsVisible}
        onEmailText={enteredEmail}
        onPhoneNumText={enteredPhoneNum}
        onEnteredBack={goBackFunction}
        onEnterFinish={goFinishFunction}
      />
    );
  }

  if (savePreviousInfo) {
    screen = (
      <Start
        infoHandle={onTextEntered}
        onEmailText={enteredEmail}
        onPhoneNumText={enteredPhoneNum}
      />
    );
  }

  if (enteredFinish) {
    console.log(enteredPhoneNum);
    screen = (
      <Finish
        resetInfo={resetFunction}
        checkFinishLater={finishLater}
        onPhoneNumText={enteredPhoneNum}
      />
    );
  }

  return (
    <LinearGradient
      // Background Linear Gradient
      colors={["white", "lightblue"]}
      style={styles.container}
      start={{ x: 1, y: 1 }}
      end={{ x: 0, y: 0 }}
    >

      <SafeAreaView style={styles.container}>
        <View>{screen}</View>
      </SafeAreaView>

    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },

});
