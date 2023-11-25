import React, { useState,useEffect } from 'react';
import { View,Text, TextInput, Button,Image, StyleSheet, Alert } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppImages from '../constants/AppImages';


const   Intialscreen1 = () => {
     const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [contact, setContact] = useState('');
  const [username, setUsername] = useState('');
  const [authinfo, setAuthinfo] = useState('');
    const [inventory, setInventory] = useState([]);
    const [accessToken, setAccessToken] = useState('');


  const handleLogin = async () => {
    try {
      // Make an API call to authenticate the user
      const response = await fetch('https://auction.riolabz.com/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          contact:contact,
          username:username,
          authinfo:authinfo,
          password: password,
        }),
      });

      const data = await response.json();
const token = data.sessionToken;
setAccessToken(token);

//  await AsyncStorage.setItem('accessToken', token);
  
      if (response.ok) {
        navigation.navigate('AutobidScreen')
        // await AsyncStorage.setItem('authToken', data.sessionToken); // Assuming the token is returned in the 'token' field of the response

      } else {
       
        Alert.alert('Login Failed', data.message || 'Something went wrong');
      }
    } catch (error) {
      console.error('Error:', error);
      Alert.alert('Login Error', 'An error occurred while trying to login');
    }
  };

 
  const getInventoryList = async () => {
    setLoading(true);
    try {
      const storedToken = await AsyncStorage.getItem('accessToken');
      if (!storedToken) {
        await login(); // Perform login if token is not available
        return;
      }

      const response = await fetch(`https://auction.riolabz.com/v1/auction_inventory/get/all/participant`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${storedToken}`,
          'Content-Type': 'application/json',
        },
      });

      const inventoryData = await response.json();
      setInventory(inventoryData);
      setLoading(false);
    } catch (error) {
      console.error('Failed to fetch inventory:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getInventoryList(); // Fetch inventory list on component mount
  }, []);


  return (
    <View style={styles.container}>
      <Image source={AppImages.clapping}
      stytle={{height:50,width:50}}
      />
         <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={(text) => setUsername(text)}
        value={username}
        keyboardType="email-address"
        autoCapitalize="none"
      />
       <TextInput
        style={styles.input}
        placeholder="Enter email"
        onChangeText={(text) => setEmail(text)}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
      />
          <TextInput
        style={styles.input}
        placeholder="Authinfo"
        onChangeText={(text) => setAuthinfo(text)}
        value={authinfo}
    
        autoCapitalize="none"
      />
        
      <TextInput 
   style={styles.input}
   placeholder="Contact"
   keyboardType='numeric'
   onChangeText={(text)=> setContact(text)}
   value={contact}
   maxLength={13}  
/>
    
      <TextInput
        style={styles.input}
        placeholder="Enter password"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry
      />

     
      <Button
      style={{backgroundColor:'red'}}
      title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    backgroundColor:'lightgreen',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
});

export default Intialscreen1;
