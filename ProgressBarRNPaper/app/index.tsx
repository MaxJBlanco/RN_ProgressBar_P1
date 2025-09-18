import { Text, TouchableHighlight, View } from "react-native";
import Bar from "./components/Bar";
import { useState } from "react";
export default function Index() {
  const [trigger, setTrigger] = useState<boolean>(false);
  
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"green"
      }}
    >
    
      <Bar ></Bar>
    
      <TouchableHighlight onPress={()=> setTrigger(!trigger)}>
        <Text>Load</Text>
      </TouchableHighlight>
    </View>
  );
}
