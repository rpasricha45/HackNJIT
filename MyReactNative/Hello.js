import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class Hello extends React.Component {
  render() {
    return (
        // <View style = {styles.container}>

      <Text style = {styles.text}> hello from another Component </Text>

// </View>

    );

  }
}

const styles = StyleSheet.create({
      container:{
        flexDirection:'column',


      },
      text:{
        fontSize:20,
        // flexDirection:'rows',
      }


})
