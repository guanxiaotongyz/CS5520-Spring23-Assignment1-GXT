import { View, Text, Button, Modal, StyleSheet } from "react-native";
import React from "react";
import Card from "../components/Card";

import { LinearGradient } from "expo-linear-gradient";
import colors from "../helpfolder/colors";

const Comfirm = ({
  onEmailText,
  onPhoneNumText,
  onEnteredBack,
  onEnterFinish,
  modalIsVisible,
}) => {
  function goBacktoStart() {
    onEnteredBack(onEmailText, onPhoneNumText);
  }

  function goToFinish() {
    let finishLater = "completed";
    onEnterFinish(onEmailText, onPhoneNumText, finishLater);
  }

  function goFinishLater() {
    let finishLater = "notcompleted";
    onEnterFinish(onEmailText, onPhoneNumText, finishLater);
  }

  return (
    <Modal visible={modalIsVisible} animationType="slide">
      <LinearGradient
        // Background Linear Gradient
        colors={[colors.white, colors.lightblue]}
        style={styles.container}
        start={{ x: 1, y: 1 }}
        end={{ x: 0, y: 0 }}
      >
        <View style={styles.container}>
          <Card>
            <Text style={styles.text}>You have entered:</Text> 
            <Text style={styles.text}>{onEmailText}</Text>
            <Text style={styles.text}>{onPhoneNumText}</Text>
            <Text style={styles.text}>Please confirm they are correct ! </Text>
            {/* build button go to start screen */}
            <View style={styles.button}>
              <Button
                color={colors.darkred}
                title="Go Back"
                onPress={goBacktoStart}
              />
              <Button title="Confirm" onPress={goToFinish} />
              <Button title="Finish Later" onPress={goFinishLater} />
            </View>
          </Card>
        </View>
      </LinearGradient>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "rebeccapurple",
    borderBottomColor: "rebeccapurple",
    width: "90%",
    margin: 2,
    marginLeft: 10,
  },
  button: {
    marginTop: 10,
    marginLeft: 60,
    justifyContent: "space-between",
    flexDirection: "column",
  },
});

export default Comfirm;
