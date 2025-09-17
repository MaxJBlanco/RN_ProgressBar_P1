import * as React from 'react';
import { StyleSheet } from 'react-native';
import { ProgressBar, MD3Colors } from 'react-native-paper';

const Bar = () => {
  
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