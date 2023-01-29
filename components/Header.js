import { StyleSheet, Text, View } from 'react-native';
import React from 'react'
import colors from '../helpfolder/colors'

const Header = () => {
  return (
    <View style={styles.container}>
       <Text style={styles.border}>Sign up</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 0,
  },
  border: {
    textAlign: "center",
    color: colors.rebecapurple,
    fontSize: 21,
    fontWeight: "bold",
    width: 110,
    height: 60,
    margin: 12,
    borderWidth: 3,
    padding: 15,
    borderColor: colors.rebecapurple,
  },
  
});

export default Header 