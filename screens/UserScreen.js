import React, { useState, useEffect } from 'react'
import { TouchableOpacity, StyleSheet, TextInput, Text, View, Image } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { setUserName, setGender } from '../stores/actions'



function UserScreen({ navigation }) {
  const dispatch = useDispatch()
  const userName = useSelector(state => state.userName)
  const [ isUserName, setIsUserName ] = useState(true)
  const [ isValidGender, setIsValidGender ] = useState(true)
  const gender = useSelector(state => state.gender)

  function navigateToGamePage() {
    if (userName) {
      navigation.navigate('Game')
    } else {
      setIsUserName(false)
    }
  }

  function inputGender(text) {
    if (text !== 'male' || text !== 'female') {
      setIsValidGender(false)
    } else {
      dispatch(setGender(text))
    }
  }

  useEffect(() => {
    dispatch(setGender(null))
    dispatch(setUserName(null))
  }, [])

  return (
    <View style={ style.container }>
      { !isUserName && <Text style={ { paddingBottom: 30, color: 'red' } }>Input your name to continue !</Text> }
      { !isValidGender && <Text style={ { paddingBottom: 30, color: 'red' } }>Fill either 'male' or 'female'!</Text> }
      <Image
        style={ { width: 100, height: 100, borderRadius: 999, marginBottom: 20 } }
        source={ {
          uri: 'https://n7.nextpng.com/sticker-png/710/195/sticker-png-child-child-child-face-people-computer-thumbnail.png'
        } }
      />
      <TextInput style={ style.input } placeholder="Input your name..." onChangeText={ (text) => dispatch(setUserName(text)) }>{ userName }</TextInput>
      <TextInput style={ style.input } placeholder="male/female" onChangeText={ (text) => inputGender(text) }>{ gender }</TextInput>
      <TouchableOpacity onPress={ () => navigateToGamePage() }>
        <Text style={ style.buttonStart }>Start</Text>
      </TouchableOpacity>
    </View>
  )
}

export default UserScreen;

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    alignItems: 'center',
    backgroundColor: '#dcd6f7'
  },
  input: {
    width: 200,
    height: 30,
    borderWidth: 2,
    borderColor: '#576574',
    paddingLeft: 10
  },
  buttonStart: {
    paddingTop: 5,
    backgroundColor: '#30336b',
    color: 'white',
    width: 200,
    height: 30,
    textAlign: 'center'
  }
})