import React from "react";
import {
View,
SafeAreaView,
Text,
Button,
Alert

} from 'react-native'


function App(){
 return(


  <SafeAreaView>
  <View>

    <Text>      Helloo world!!!    </Text>
    <Text>      Helloo world!!!    </Text>
    <Text>      Helloo world!!!    </Text>
    <Text>      Helloo world!!!    </Text>

    <Button title="Geeks" onPress={()=>Alert.alert("oyeeee")}/>
  </View>

</SafeAreaView>
 )
}

export default App;
