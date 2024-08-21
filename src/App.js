import React, {useEffect, useState} from "react";
import {View, Text, SafeAreaView, Button} from "react-native";
import auth from "@react-native-firebase/auth";
import { example } from "yargs";
import database from "@react-native-firebase/database";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import FlashMessage from "react-native-flash-message";
import Login from "./pages/auth/Login/Login";
import Sign from "./pages/auth/Sign/Sign";
import Messages from "./pages/auth/Messages/Messages";
import colors from "./styles/colors";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Stack = createStackNavigator();

function App(){

  const [userSession, setUserSession] = useState();

  useEffect(() => {
    auth().onAuthStateChanged((user) => {
      setUserSession(!!user);
    })
  }, [])

  const AuthStack = () => {
    return(
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Sign" component={Sign}/>
      </Stack.Navigator>
    )
  }

  return(
    <NavigationContainer>
      
      <Stack.Navigator screenOptions={{headerShown: false}}>
      {
        !userSession ?
        <Stack.Screen name="AuthStack" component={AuthStack}/>
        :
        <Stack.Screen 
          options={{
          headerShown: true, // change this to `false`
          title: 'Messages',
          headerTintColor: colors.darkgreen,
          headerRight: () => <Icon 
          name="logout" 
          size = {20}
          color= {colors.darkgreen}
          onPress = {() => auth().signOut()}
          />
        }} name="Message" component={Messages}/>
      }
        
      </Stack.Navigator>
      <FlashMessage position="top"/>
    </NavigationContainer>
      
  )
};

export default App;