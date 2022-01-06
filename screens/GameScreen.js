import React from 'react'
import { Text, View, SafeAreaView, StyleSheet, TouchableOpacity, Image } from 'react-native'
import Board from '../components/Board'
import { useDispatch, useSelector } from 'react-redux'
import GameLevel from '../components/GameLevel'
import { submitAnswer, isShowAnswer } from '../stores/actions'


function GameScreen({ navigation }) {
  const dispatch = useDispatch()
  const status = useSelector(state => state.status)
  const userAnswer = useSelector(state => state.userAnswer)
  const level = useSelector(state => state.level)
  const gender = useSelector(state => state.gender)
  const userName = useSelector(state => state.userName)
  const solutions = useSelector(state => state.solutions)
  const isShowAnswers = useSelector(state => state.isShowAnswers)

  function submitUserAnswer() {
    if (isShowAnswers) {
      dispatch(submitAnswer(solutions))
    } else {
      dispatch(submitAnswer(userAnswer))
    }
  }

  function showTheAnswer() {
    // dispatch(showAnswer(board))
    dispatch(isShowAnswer(true))
  }



  return (
    <SafeAreaView>
      <View style={ { flexDirection: 'row', marginLeft: 10, marginTop: 15 } }>
        <Image
          style={ { width: 50, height: 50, borderRadius: 999 } }
          source={ {
            uri: gender === 'female' ? "https://paautism.org/wp-content/uploads/2020/04/Mask1.png" : "https://previews.123rf.com/images/matsurinui/matsurinui2003/matsurinui200300025/141696064-illustration-of-a-person-wearing-a-mask.jpg"
          } }
        >
        </Image>
        <Text style={ style.text }>SUGOKU</Text>
      </View>
      <Text style={ { marginLeft: 10, fontSize: 12 } }>Hello { userName.toUpperCase() } !</Text>
      <View style={ style.container }>
        <GameLevel />
        <Board />
      </View>
      <View style={ { flexDirection: 'row', flex: 1, marginTop: 10 } }>
        <Text style={ inputStyle.status }>Status: { status }</Text>
        <Text style={ inputStyle.status }>Level: { level } </Text>
      </View>
      <View style={ { flexDirection: 'column' } }>
        <View style={ { flexDirection: 'row', flex: 1 } }>
          <TouchableOpacity style={ style.navigate } onPress={ () => submitUserAnswer() }>
            <Text style={ { textAlign: 'center', color: '#ff4757', fontSize: 17 } }>Submit Answer</Text>
          </TouchableOpacity>
          <TouchableOpacity style={ style.navigate } onPress={ () => showTheAnswer() }>
            <Text style={ { textAlign: 'center', color: '#ff4757', fontSize: 17 } }>Show Answer</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={ { height: 25, marginLeft: 10, marginRight: 10, marginTop: 80 } } onPress={ () => navigation.navigate('Finish') }>
          <Text style={ { textAlign: 'center', fontSize: 17, backgroundColor: '#a4b0be', marginTop: 10, height: 25 } }>Leave Game</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default GameScreen;


const style = StyleSheet.create({
  text: {
    color: '#ff4757',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 60,
    marginTop: 10
  },
  container: {
    marginTop: 10,
    borderColor: 'blue',
    alignItems: 'center'
  },
  user: {
    margin: 10
  },
  navigate: {
    height: 25,
    marginRight: 10,
    marginLeft: 10,
    borderWidth: 2,
    borderColor: '#706fd3',
    marginTop: 50,
    flex: 0.5
  }
})


const inputStyle = StyleSheet.create({
  status: {
    fontSize: 18,
    margin: 10,
    borderWidth: 1,
    borderColor: 'red',
    height: 25,
    flex: 1,
    paddingLeft: 10
  }
})