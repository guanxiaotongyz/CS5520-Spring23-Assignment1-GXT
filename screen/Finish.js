import {
  View,
  Button,
  StyleSheet,
  Image,
} from "react-native";
import React from "react";
import Card from "../components/Card";
import TextShow from "../components/TextShow";

const Finish = ({ resetInfo, checkFinishLater, onPhoneNumText }) => {
  function goStart() {
    resetInfo();
  }

  const lastDigit = String(onPhoneNumText).slice(-1);
  console.log("lastDigit2Str " + lastDigit);

  if (checkFinishLater == "notcompleted") {
    return (
      <View>
        <Card heightValue={160} widthValue={190}>
          <TextShow textcomment="Sorry to see you" />
          <View style={styles.imageuncompleted}>
            <Image
              style={styles.image}
              source={require("../assets/sad-emoji.png")}
            />
          </View>
        </Card>
        <View style={styles.buttonstart}>
          <Button title="Start Again" onPress={goStart} />
        </View>
      </View>
    );
  } else if (checkFinishLater == "completed") {
    return (
      <View>
        <Card heightValue={200}>
          <TextShow
            textcomment="Thanks you for signing up. Here is 
                                 a picture for you(base on the last digit of 
                                 your phone number )"
          />
          <View style={styles.imagecompleted}>
            <Image
              style={styles.image}
              source={{
                uri: "https://picsum.photos/id/" + lastDigit + "/100/100",
              }}
            />
          </View>
        </Card>
        <View style={styles.buttonstart}>
          <Button title="Start Again" onPress={goStart} />
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  },
  imagecompleted: {
    marginTop: 20,
    marginHorizontal: 69,
  },
  imageuncompleted: {
    marginTop: 20,
    marginHorizontal: 39,
  },
  buttonstart: {
    marginTop: 20,
  },
});

export default Finish;
