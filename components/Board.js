import React, { useEffect, useState } from 'react'
import { TextInput, StyleSheet, View, Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../stores/actions'
import { setUserAnswer } from '../stores/actions'


function Board() {

  const dispatch = useDispatch()

  const level = useSelector(state => state.level)
  const userAnswer = useSelector(state => state.userAnswer)
  const board = useSelector(state => state.board)
  const isShowAnswers = useSelector(state => state.isShowAnswers)
  // const [ dataRender, setDataRender ] = useState([])
  const solutions = useSelector(state => state.solutions)
  const isLoading = useSelector(state => state.isLoading)


  function setChange(input, col, row) {
    let game = []
    for (let i = 0; i < userAnswer.length; i++) {
      let tmp = []
      for (let j = 0; j < userAnswer[ i ].length; j++) {
        if (i === row && j === col) {
          tmp.push(Number(input))
        }
        else {
          tmp.push(userAnswer[ i ][ j ])
        }
      }
      game.push(tmp)
    }
    dispatch(setUserAnswer(game))
  }


  useEffect(() => {
    dispatch(fetchData(level))
    // dispatch(showAnswer(board))
  }, [])


  if (isLoading) {
    return (
      <View>
        <Text style={ { fontSize: 30, margin: 120 } }>Loading...</Text>
      </View>
    )

  } else {


    return (
      <View style={ boardStyle.board }>
        {
          isShowAnswers ?
            solutions.map((rowNum, id) =>
              rowNum.map((colNum, index) =>
                <TextInput key={ index } style={ (index + 1) % 3 === 0 ? inputStyle.row2 : (id + 1) % 3 === 0 ? inputStyle.row3 : inputStyle.row } onChangeText={ (text) => setChange(text, index, id) } board={ board }
                >{ colNum === 0 ? colNum = '' : colNum = colNum }</TextInput>
              )
            ) :
            board.map((rowNum, id) =>
              rowNum.map((colNum, index) =>
                <TextInput key={ index } style={ (index + 1) % 3 === 0 ? inputStyle.row2 : (id + 1) % 3 === 0 ? inputStyle.row3 : inputStyle.row } onChangeText={ (text) => setChange(text, index, id) } board={ board }
                >{ colNum === 0 ? colNum = '' : colNum = colNum }</TextInput>
              )
            )
        }
      </View>
    )
  }
}


const boardStyle = StyleSheet.create({
  board: {
    marginTop: 5,
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 320,
    backgroundColor: '#2f3640'
  }

})

const inputStyle = StyleSheet.create({
  row: {
    borderWidth: 1,
    borderColor: '#636e72',
    width: 35,
    height: 35,
    textAlign: 'center',
    color: 'white'
  },
  row2: {
    borderWidth: 1,
    borderColor: '#636e72',
    width: 35,
    height: 35,
    textAlign: 'center',
    color: 'white',
    borderRightWidth: 3
  },
  row3: {
    borderWidth: 1,
    borderColor: '#636e72',
    width: 35,
    height: 35,
    textAlign: 'center',
    color: 'white',
    borderBottomWidth: 3
  }
})

export default Board