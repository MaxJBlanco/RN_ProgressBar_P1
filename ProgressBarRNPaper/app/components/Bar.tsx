import * as React from 'react';
import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { ProgressBar, MD3Colors } from 'react-native-paper';

type propsType = {
}
const Bar:React.FC<propsType> = (
  {
  }
) => {
  const [progress, setProgress] = useState<number>(0) ;
  React.useEffect( () =>{


    const interval = setInterval(()=>{
      if(progress!= 1){
        setProgress(progress+0.1);
      }
      else{
        setProgress(0);
      }
    }, 50)

    return ()=> clearInterval(interval);


  
  },[])
  
  return (
    <ProgressBar visible={true} style= {styles.progressBarStyle} progress={progress}  theme={{colors:{primary:'red'}}}/>
  )
}


export default Bar

const styles = StyleSheet.create({
  progressBarStyle:{
    height:10,
    width:100,

  }
})