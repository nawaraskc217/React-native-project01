

import React from "react";
import {
View,
SafeAreaView,
Text,
Button,
Alert,
StyleSheet,
useColorScheme

} from 'react-native'


function AppPro(): JSX.Element{

  const isDarkMode= useColorScheme()==="dark"
  return(

<View style={styles.container}>
  <Text style={isDarkMode? styles.whiteText:styles.darkText}>
  K hooo dami hain ata</Text>
</View>

  )


}

const styles=StyleSheet.create({
  container: {
    flex: 1,

    // alignItems: 'flex-start', ///moves element from left to right
      // alignItems: 'flex-end'
       alignItems: 'center',
       justifyContent: 'center' ///works from top to bottom
  },

  whiteText:{
    color:'rgb(255, 255, 255)'
  },
darkText: {
  color: '#000000' 
}


  })



export default AppPro;