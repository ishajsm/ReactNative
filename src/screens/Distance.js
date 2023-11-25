import React,{useEffect,useState} from 'react';
import { View,Image,TouchableOpacity, StyleSheet,Text } from 'react-native';
import ProgressCircle from 'react-native-progress-circle';
import Appfonts from '../constants/AppFonts';
import {useNavigation} from '@react-navigation/native';

const Distance = () => {
  const progress = 60; // Change this value to set the progress percentage (0-100).
const navigation = useNavigation();

const [distance, setDistance] = useState(0);

  const storeUser = async () => {
    try {
      await AsyncStorage.setItem("progress",progress);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    
    <View style={styles.container}>
      
      <View>
        <Text style={{fontFamily:Appfonts.BoldFont}}> Total Distance Travelled by you</Text>
      </View>
      <ProgressCircle
        percent={progress}
        radius={50}
        borderWidth={20}
        color="orange"
        
        shadowColor="#999"
        bgColor="#fff"
      >
        {/* Content to be displayed inside the progress circle (optional) */}
        <Text style={styles.text}>{`${progress}km`}</Text>
      </ProgressCircle>
<TouchableOpacity onPress={() =>navigation.goBack()}>
      <View style={{backgroundColor:'white',padding:7}}>
        <Text style={{fontFamily:Appfonts.BoldFont}}>Go Back</Text>
      </View>
      </TouchableOpacity>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    flexDirection:'coloumn',
    backgroundColor:'pink',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Distance;
