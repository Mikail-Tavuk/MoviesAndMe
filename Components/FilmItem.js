import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { getImageFromApi } from '../API/TMDBApi'

class FilmItem extends React.Component {
  render() {
    const film = this.props.film
    // console.log(this.props )
    return (
      <View style={styles.main_container}>
        <Image 
          style={styles.image}
          source={{
            uri: getImageFromApi(film.poster_path)
          }}
        />

        <View style={styles.content_container}>
          <View style={styles.header_container}>
            {/* <View style={styles.rate}> */}
            <Text style={styles.movie_name}>{film.title}</Text>
            <Text style={styles.rates}>{film.vote_average}</Text>
          </View>
        {/* </View> */}

          <View style={styles.description_container}>
            <Text style={styles.description_txt} numberOfLines={6}>{film.overview}</Text>
            {/* 'numberOfLines' délimite le nombre max de lignes pour la description, le nombre max est ici de 6 lignes */}
          </View>

          <View style={styles.date_container}>
            <Text style={styles.release_date}>Sorti le: {film.release_date}</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    height: 190,
    flexDirection: 'row'
  },

  image: {
    // backgroundColor: 'grey'
    width: 120,
    height: 180,
    margin: 5,
    borderRadius: 10
  },

  content_container: {
    flex: 1,
    margin: 5,
    borderRadius: 10
    // bottom: -10
  },

  header_container: {
    flex: 1,
    flexDirection: 'row',
  },

  movie_name: {
    flex: 1,
    fontSize: 20,
    // fontWeight: 'bold'
    flexWrap: 'wrap',
    // paddingRight: 
  },

  rates: {
    // flex: 1, Empêche le titre du film de s'afficher correctemetn lorsque le flex est activé
    fontSize: 20,
    color: 'grey',
    textAlign: 'right'
  },

  description_container: {
    flex: 4
  },

  description_txt: {
    color: 'grey',
    fontStyle: 'italic'
  },

  date_container: {
    flex: 1
  },

  release_date: {
    fontStyle: 'italic',
    fontSize: 16,
    textAlign: 'center',
    textAlign: 'right'
  }
})

export default FilmItem