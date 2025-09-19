import { useState } from "react";
import { Text, TouchableHighlight, View } from "react-native";
import Bar from "./components/Bar";
export default function Index() {
  const incrementBar = (amt:number) =>{
    if(progress <1){
      setProgress(Math.min(progress+amt, 1));
    }
    else{
      setProgress(0)
    }
  }

  const[progress, setProgress] = useState<number>(0);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"green",
        gap:20
      }}
    >
    <Bar progress={progress}></Bar>

    <TouchableHighlight onPress={()=>incrementBar(0.1)}>
      <Text>Increment Bar Progress By 10%</Text>
    </TouchableHighlight>
    <TouchableHighlight onPress={()=>incrementBar(0.2)}>
      <Text>Increment Bar Progress By 20%</Text>
    </TouchableHighlight>
    <TouchableHighlight onPress={()=>incrementBar(0.4)}>
      <Text>Increment Bar Progress By 40%</Text>
    </TouchableHighlight>
      
    </View>
  );
}
