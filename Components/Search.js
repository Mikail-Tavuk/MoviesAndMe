import React from 'react'
import { StyleSheet ,View, Button, TextInput, FlatList, Text } from 'react-native'
import films from '../Helpers/filmsData'
import FilmItem from './FilmItem'
import { getFilmsWithApi } from '../API/TMDBApi'

class Search extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = { films: [], // film est une liste (un array) (pour l'instant) vide
    //searchedText: "" // searchedText est la propriété permettant de stocker ce que l'utilisateur a stocker dans la bar de recherche
    }
    this.searchedText = ""
  }

  _loadFilms() { // cette fonction est appelée dès que l'user clique sur le bouton "rechercher"
    // getFilmsWithApi(this.state.searchedText).then(data => this.setState({ films: data.results })) // la fonction 'getFilmsWithApi' est elle-même appelée dans la fonction _loadFilms (raison pour laquelle elle est importée depuis API/TMDB.js)
    if (this.searchedText.length > 0) {getFilmsWithApi(this.searchedText).then(data => this.setState({ films: data.results })) // la fonction 'getFilmsWithApi' est elle-même appelée dans la fonction _loadFilms (raison pour laquelle elle est importée depuis API/TMDB.js)
    }
  }

  _searchChangedText(text) {
    // this.setState({ searchedText: text })
    this.searchedText = text
  }

  render() {
    console.log("RESULTS RENDER");  // prouve que le setState est appelé est rechargé avec les donnés du film
    return (
      <View style={styles.view}>
        <TextInput onChangeText={(text) => this._searchChangedText(text)} style={styles.textinput} placeholder="Quel film cherchez-vous ?"/>
        <Button title="Rechercher" onPress={() => this._loadFilms()}/>
        <FlatList
          data={this.state.films} // utilisation du tableau dans la liste de films
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