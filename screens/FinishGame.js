import React from 'react'
import { Text, SafeAreaView, TouchableOpacity, StyleSheet, View, Alert } from 'react-native'
import { useDispatch } from 'react-redux'
import { resetStore } from '../stores/actions'


function FinishGame({ navigation }) {
  const dispatch = useDispatch()


  function finish() {
    Alert.alert('See you again!')
    dispatch(resetStore())
    navigation.navigate('Home')
  }

  return (
    <SafeAreaView>
      <Text style={ style.paragraph }>You are doing great job. Challenge your self by leveling up with more difficult task.</Text>
      <View>
        <TouchableOpacity style={ style.navigate } onPress={ () => navigation.navigate('Game') }>
          <Text style={ { textAlign: 'center', color: 'white', padding: 6, fontSize: 17 } }>Try again</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ style.navigate2 } onPress={ () => finish() }>
          <Text style={ { textAlign: 'center', color: '#706fd3', fontSize: 17 } }>No, thanks</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  navigate: {
    backgroundColor: '#706fd3',
    width: 100,
    height: 30,
    marginLeft: 20
  },
  paragraph: {
    margin: 20,
    fontSize: 18
  },
  navigate2: {
    width: 100,
    height: 30,
    marginLeft: 20,
    marginTop: 20
  },
})

export default FinishGame;