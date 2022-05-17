
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AudioRec from "../screens/AudioRec";
import CameraX from "../screens/CameraX";
import Home from "../screens/Home";

import VideoRec from "../screens/VideoRec";




const Stack = createNativeStackNavigator();


export default function AppNavi() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
         name = "Home" 
          component={Home}
          options={{
            headerBackVisible: false,
           }}
          
        />
        <Stack.Screen 
          name="Audio Recorder"
          component={AudioRec}
        />
        <Stack.Screen 
          name="Camera"
          component={CameraX}
        />
        
        <Stack.Screen 
          name="Video Recorder"
          component={VideoRec}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}