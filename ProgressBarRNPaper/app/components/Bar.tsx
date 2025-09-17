import * as React from 'react';
import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { ProgressBar, MD3Colors } from 'react-native-paper';

const Bar = () => {
  const [progress, setProgress] = useState<number>(0) ;
  const callBack = () =>{
    if(progress!= 1){
      
    }
  
  }
  
  return (
    <ProgressBar visible={true} style= {styles.progressBarStyle} progress={0.5}  theme={{colors:{primary:'red'}}}/>
  )
}

export default Bar

const styles = StyleSheet.create({
  progressBarStyle:{
    height:10,
    width:100,

  }
})