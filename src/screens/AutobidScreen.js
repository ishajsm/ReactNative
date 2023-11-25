import React, { useState } from 'react';
import { View, Text, TextInput,Image,TouchableOpacity, StyleSheet } from 'react-native';
import AppImages from '../constants/AppImages';
import {useNavigation} from '@react-navigation/native';

const AutobidScreen = () => {
  const [currentBid, setCurrentBid] = useState(100);
  const [autoBidValue, setAutoBidValue] = useState('');
const navigation=useNavigation();
const handleBid = async () => {
    // Function to handle a manual bid submission
    const newBid = parseInt(autoBidValue, 10);
    if (!isNaN(newBid) && newBid > currentBid) {
      try {
        const response = await fetch('https://auction.riolabz.com/v1/bidding/make', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            // Add any necessary authentication headers
          },
          body: JSON.stringify({ bidAmount: newBid }),
        });

        if (response.ok) {
          setCurrentBid(newBid);
          setAutoBidValue('');
        } else {
        
          alert('Bid submission failed. Please try again.');
        }
      } catch (error) {
   
        alert('Network error. Please check your connection.');
      }
    } else {
      alert('Please enter a valid higher bid value.');
    }
  };

  const handleAutoBid = () => {
    // Function to handle auto-bidding
    const autoBidIncrement = 50;
    const newAutoBid = currentBid + autoBidIncrement;
    setCurrentBid(newAutoBid);
  };


  return (
    <View style={styles.container}>

      <View style={{backgroundColor:'yellow',borderTopRightRadius:25,borderBottomLeftRadius:25,marginBottom:100,width:'100%',justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontSize:25}}>
          Remaining Buying Limit is 
          Rs85,000000
        </Text>
        </View>
<Image source={AppImages.cooper}
style={{width:150,height:100}}
/>
      <Text style={styles.currentBid}>Current Bid: ${currentBid}</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter your bid"
          keyboardType="numeric"
          value={autoBidValue}

          onChangeText={(text) => setAutoBidValue(text)}
        />
        <TouchableOpacity style={styles.button} onPress={handleBid}>
          <Text style={styles.buttonText}>Bid</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.autoBidButton} onPress={handleAutoBid}>
        <Text style={styles.buttonText}>Auto Bid +$50</Text>
      </TouchableOpacity>
<TouchableOpacity onPress={() => navigation.goBack()}>
      <View style={{backgroundColor:'yellow',marginTop:80,padding:15}}>
        <Text style={{color:'darkgreen'}}>Go Back
          </Text>
        </View>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor:'white',
    justifyContent: 'center',
  },
  currentBid: {
    fontSize: 24,
    marginBottom: 20,
    
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
    width: 150,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  autoBidButton: {
    marginTop: 20,
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default AutobidScreen;
