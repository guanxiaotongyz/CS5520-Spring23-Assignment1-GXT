import { View } from 'react-native'
import colors from '../helpfolder/colors';


import React from 'react'

const Card = (props) => {
   
   const style ={
    marginTop: 20,
      alignItems: "flex-start",
      justifyContent: "flex-start",
      height: props.heightValue || 250,
      width: props.widthValue || 250,
      borderRadius: 10,
      backgroundColor: colors.grey,
      shadowRadius: 10,
      shadowOpacity: 0.1,
      elevation: 10,
      shadowColor: colors.grey,
      shadowOffset: { width: 0, height: 0 },

   };

  return (
    <View style={style}>
        {props.children}
    </View>
  )
}



export default Card