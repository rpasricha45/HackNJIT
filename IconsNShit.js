import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import Hello from './Hello';

export default class App extends React.Component {
  render() {
    return (
     // <View style={styles.container}>
      //  <Text>What Up Bitch!</Text>
      //</View>
        <Icon
            reverse //icon type
            name='check' //some name not sure what this means
            type='material-community' // type of button
            color='#517fa4'
            />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});