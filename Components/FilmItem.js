import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

class FilmItem extends React.Component {
  render() {
    return (
      <View style={styles.main_container}>
        <Image 
          style={styles.image}
          source={{
            uri: 'https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80',
          }}
        />

        <View style={styles.content_container}>
          <View style={styles.header_container}>
            {/* <View style={styles.rate}> */}
            <Text style={styles.movie_name}>Titre du film:</Text>
            <Text style={styles.rates}>Note</Text>
          </View>
        {/* </View> */}

          <View style={styles.description_container}>
            <Text style={styles.description_txt} numberOfLines={6}>La description s'affiche ici</Text>
            {/* 'numberOfLines' délimite le nombre max de lignes pour la description, le nombre max est ici de 6 lignes */}
          </View>

          <View style={styles.date_container}>
            <Text style={styles.release_date}>Sorti le 00/00/0000</Text>
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
    margin: 5
  },

  content_container: {
    flex: 1,
    margin: 5
  },

  header_container: {
    flex: 1,
    flexDirection: 'row'
  },

  movie_name: {
    flex: 1,
    fontSize: 20,
    // fontWeight: 'bold'
    flexWrap: 'wrap',
    // paddingRight: 
  },

  rates: {
    flex: 1,
    fontSize: 20,
    color: 'grey'
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
    fontSize: 14,
    textAlign: 'center'
  }
})

export default FilmItem