import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';


export default class App extends React.Component {
  render() {
    return (
     // <View style={styles.container}>
      //  <Text>What Up Bitch!</Text>
      //</View>
      <View style = {styles.container}>

      <Text> I sdfkh  </Text>
        <View style = {styles.button}>
        <Icon
            reverse //icon type
            name='check' //some name not sure what this means
            type='material-community' // type of button
            color='#517fa4'
            />
            </View>
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
  },
  button:{

    flexDirection:'column-reverse',
    position:'relative',
    marginLeft:'auto',
    // bottom:100,
    // right:-79,
    justifyContent:'flex-end'


  },
});
