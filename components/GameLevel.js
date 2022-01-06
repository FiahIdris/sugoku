import React, { useEffect } from 'react'
import { View, Button, StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { setLevel, fetchData, isShowAnswer, setStatus } from '../stores/actions'


function GameLevel() {
  const dispatch = useDispatch()
  // const board = useSelector(state => state.board)

  function fetchGameLevelBoard(level) {
    dispatch(isShowAnswer(false))
    dispatch(setLevel(level))
    dispatch(fetchData(level))
    dispatch(setStatus(''))
    // dispatch(showAnswer(board))
  }

  return (
    <View style={ style.level }>
      <Button title="easy" color="#3c40c6" onPress={ () => fetchGameLevelBoard('easy') }></Button>
      <Button title="medium" color="#3c40c6" onPress={ () => fetchGameLevelBoard('medium') }></Button>
      <Button title="hard" color="#3c40c6" onPress={ () => fetchGameLevelBoard('hard') }></Button>
      <Button title="random" color="#3c40c6" onPress={ () => fetchGameLevelBoard('random') }></Button>
    </View>
  )
}

const style = StyleSheet.create({
  level: {
    flexDirection: 'row'
  }
})

export default GameLevel;