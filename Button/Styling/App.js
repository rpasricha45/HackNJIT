import React from 'react';
import { StyleSheet, Text, View,Box } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>


        <Text style = {styles.text}>
        Open up App.js to start working on your app!

        </Text>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection:'column'
  },

  text:{
    fontSize:34,
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'column',
    


  },

  footer: {
      position: 'absolute',
      height: 40,
      left: 0,

   },

});
