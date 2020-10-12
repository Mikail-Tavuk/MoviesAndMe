import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, View } from 'react-native';
import Search from './Components/Search'
// import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      // <View>
      //   <ImageBackground 
      //     source={{
      //       uri: 'https://images.unsplash.com/photo-1479064312651-24524fb55c0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634& q=80',
      //       }}
      //       />
          <Search/>
        //{/* <ImageBackground />
      // </View> */}
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
