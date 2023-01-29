import { TextInput, View, Text, Button, StyleSheet } from "react-native";
import React from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import TextShow from "../components/TextShow";
import colors from "../helpfolder/colors";

const Start = ({ infoHandle, onEmailText, onPhoneNumText }) => {
  const [email, setEmail] = React.useState(onEmailText);
  const [phoneNum, setPhoneNum] = React.useState(onPhoneNumText);
  const [openMailError, setOpenMailError] = React.useState(false);
  const [openPhoneError, setOpenPhoneError] = React.useState(false);

  function sendChangeInfo() {
    if (ValidateEmail(email) && ValidatePhone(phoneNum)) {
      infoHandle(email, phoneNum);
    } else if (!ValidatePhone(phoneNum)) {
      setOpenPhoneError(true);
    }
    return;
  }

  // inputText.value.match(mailformat)
  // https://www.w3resource.com/javascript/form/email-validation.php
  // https://stackoverflow.com/questions/42965541/email-validation-javascript
  function ValidateEmail(inputText) {
    var re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(inputText)) {
      return true;
    }
    setOpenMailError(true);
    return false;
  }

  function ValidatePhone(inputText) {
    var num = /^\d{10}$/;
    if (num.test(inputText)) {
      return true;
    } else {
      setOpenPhoneError(true);
      return false;
    }
  }

  return (
    <View>
      <Header />
      <Card>
    
        <TextShow textcomment = "Email Address" /> 
        <TextInput
          style={styles.input}
          value={email}
          keyboardType="phone-pad"
          onChangeText={(newText) => {
            setOpenMailError(false);
            setOpenPhoneError(false);
            setEmail(newText);
          }}
        />

        {openMailError == true ? (
          <Text style={styles.text}>Please enter valid email</Text>
        ) : (
          <Text></Text>
        )}

        <TextShow textcomment = "Phone Number" /> 
        <TextInput
          style={styles.input}
          value={phoneNum}
          keyboardType="phone-pad"
          onChangeText={(newText) => {
            setOpenMailError(false);
            setOpenPhoneError(false);
            setPhoneNum(newText);
          }}
        />

        {openPhoneError == true ? (
          <Text style={styles.text}>Please enter valid phone number</Text>
        ) : (
          <Text></Text>
        )}

        <View style={styles.buttonContainer}>
          <Button
            color={colors.darkred}
            title="Reset"
            onPress={() => {
              setEmail("");
              setPhoneNum("");
            }}
          />

          <Button title="Sign Up" onPress={sendChangeInfo} />
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  input: {
    borderBottomColor: colors.rebecapurple,
    borderBottomWidth: 2,
    width: "80%",
    margin: 10,
    marginVertical: 10,
  },
  text: {
    color: colors.black,
    width: "100%",
    marginLeft: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 40,
    width: "60%",
  },
});

export default Start;
