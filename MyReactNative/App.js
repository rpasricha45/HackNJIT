import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Hello from './Hello';
export default class App extends React.Component {
  // todo : create a state
  state = {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
}
  render() {


    // put the constants

    const {flexDirection, alignItems, justifyContent} = this.state
  const layoutStyle = {flexDirection, justifyContent, alignItems}

  const primaryAxis = flexDirection === 'row' ? 'Horizontal' : 'Vertical'
  const secondaryAxis = flexDirection === 'row' ? 'Vertical' : 'Horizontal'

    return (
      // <View style={styles.container}>

// todo try to move this text
<View style = {styles.container}>

        <Hello/>

       <Hello/>
       <Hello/>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFA07A',
    alignItems: 'center',
    justifyContent: 'center',
  
  },
});
