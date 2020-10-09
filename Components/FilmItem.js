import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

class FilmItem extends React.Component {
  render() {
    return (
      <View style={styles.main_container}>
        <Image 
          style={styles.image}
          source={{
            uri: 'data:image/png;base64,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',
          }}
        />

        <View style={styles.content_container}>
          <View style={styles.header_container}>
            <View style={styles.rate}>
              <Text>Titre du film:</Text>
              <Text>Note</Text>
            </View>
          </View>

        <View style={styles.description_container}>
          <Text style={styles.description_txt} numberOfLines={6}>La description s'affiche ici</Text>
          {/* 'numberOfLines' délimite le nombre max de lignes pour la description, le nombre max est ici de 6 lignes */}
        </View>

        <View style={styles.date_container}>
          <Text>Sorti le 00/00/0000</Text>
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
    width: 100,
    height: 150,
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

  description_container: {
    flex: 1,

  }
})

export default FilmItem