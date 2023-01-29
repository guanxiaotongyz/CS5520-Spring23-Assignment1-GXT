import {  Text ,StyleSheet } from 'react-native'
import React from 'react'
import colors from '../helpfolder/colors'

const TextShow = ({textcomment}) => {
  return (
    <Text style ={styles.text}>{textcomment}</Text>
  )
}

const styles = StyleSheet.create({
    text: {
      color: colors.rebecapurple,
      borderBottomColor: colors.rebecapurple,
      width: "90%",
      marginTop:   10,
      marginLeft: 10,
    },
  });

export default TextShow