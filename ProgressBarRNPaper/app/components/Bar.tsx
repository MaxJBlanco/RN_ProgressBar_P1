import * as React from 'react';
import { StyleSheet } from 'react-native';
import { ProgressBar } from 'react-native-paper';

type propsType = {
  progress:number
}
const Bar:React.FC<propsType> = (
  {
    progress
  }
) => {
  
  
  return (
    <ProgressBar visible={true} style= {styles.progressBarStyle} progress={progress}  theme={{colors:{primary:'red'}}}/>
  )
}


export default Bar

const styles = StyleSheet.create({
  progressBarStyle:{
    height:30,
    width:200,

  }
})