import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Pushwoosh from 'pushwoosh-react-native-plugin';
import { DeviceEventEmitter, LogBox, Platform, Alert} from 'react-native';

export default function App() {

  Pushwoosh.init({ 
      "pw_appid" : "add here"
  });
  Pushwoosh.register();

  // this event is fired when the push is received in the app
  DeviceEventEmitter.addListener('pushReceived', (e) => {
    console.warn("pushReceived: " + JSON.stringify(e));
    // shows a push is received. Implement passive reaction to a push, such as UI update or data download.
  });

  // this event is fired when user clicks on notification
  DeviceEventEmitter.addListener('pushOpened', (e) => {
    console.warn("pushOpened: " + JSON.stringify(e));
    // shows a user tapped the notification. Implement user interaction, such as showing push details
  });
    
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
