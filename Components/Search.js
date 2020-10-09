import React from 'react'
import { StyleSheet ,View, Button, TextInput } from 'react-native'

class Search extends React.Component {
  render() {
    return (
      <View style={styles.view}>
        <TextInput style= {styles.textinput} placeholder="Quel film cherchez-vous ?"/>
        <Button title="Rechercher" onPress={() => {}}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5
  }

  ,view: {
    marginTop: 70
  }
})

export default Search