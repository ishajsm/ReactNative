import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Intialscreen1 from '../screens/Intialscreen1';

import AutobidScreen from '../screens/AutobidScreen';


const Stack = createNativeStackNavigator();


// import HealthAppscreen from '../../screens/Intialscreen';

function AuthStack() {
  return (
    <Stack.Navigator headerMode={"none"} initialRouteName="Intialscreen1">
      <Stack.Screen 
      name="AutobidScreen"
      component={AutobidScreen}
      header={null}
      options={{headerShown:false}}/>
    
  
  

  

 
    </Stack.Navigator>
  );
}

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Auth"
          component={AuthStack}
          header={null}
          options={{ headerShown: false }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
