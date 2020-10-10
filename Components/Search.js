import React from 'react'
import { StyleSheet ,View, Button, TextInput, FlatList, Text } from 'react-native'
import films from '../Helpers/filmsData'
import FilmItem from './FilmItem'

class Search extends React.Component {
  render() {
    return (
      <View style={styles.view}>
        <TextInput style= {styles.textinput} placeholder="Quel film cherchez-vous ?"/>
        <Button title="Rechercher" onPress={() => {}}/>
        <FlatList
          data={films}
          keyExtractor={(item) => item.id.toString()}  // permet d'avoir une key pour identifier chaque item de manière unique
          renderItem={({item}) => <FilmItem film={item}/>} />
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
    paddingLeft: 5,
    borderRadius: 10
  }

  ,view: {
    marginTop: 70,
    flex: 1 // la view prend désormais toute la taille de l'écran grâce à flexbox
  }
})

export default Search