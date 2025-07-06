/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View, Text, Image, TouchableOpacity, } from 'react-native';
import { WINDOW_HEIGHT, WINDOW_WIDTH, FONTSCALE } from './src/utils/dimensions';
function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={{flex:1}}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {/* <NewAppScreen templateFileName="App.tsx" /> */}

    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

export default App;
