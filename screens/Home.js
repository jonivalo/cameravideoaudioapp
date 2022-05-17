import {View, TouchableOpacity } from 'react-native';
import Styles from '../styles/Styles';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';


export default function Home({ navigation }) {
  return (
    <View style={Styles.containerBack} >
      <View style={Styles.containerA}>
      <TouchableOpacity
      title="Audio Recorder"
      onPress={() => navigation.navigate("Audio Recorder")}
      >
      <MaterialIcons
								name="keyboard-voice"
								size={50}
								color="black"

      /> 
      </TouchableOpacity>
      </View>
      <View style={Styles.containerC}>
      <TouchableOpacity
        title="Camera"
        onPress={() => navigation.navigate("Camera")}
      >
      <MaterialIcons
								name="photo-camera"
								size={50}
								color="black"

      /> 
      
      </TouchableOpacity>
      </View>
      <View style={Styles.containerV}>
      <TouchableOpacity
        title="Video Recorder"
        onPress={() => navigation.navigate("Video Recorder")}
      >
      <MaterialIcons
								name="videocam"
								size={50}
								color="black"

      /> 

      </TouchableOpacity>
      </View>
      
      
    </View>
  );
}
