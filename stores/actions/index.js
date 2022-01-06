import axios from 'axios'

export const setBoard = (data) => {
  return {
    type: 'SET_BOARD',
    payload: data
  }
}

export const setUserAnswer = (data) => {
  return {
    type: 'SET_USER_ANSWER',
    payload: data
  }
}

export const setLevel = (data) => {
  return {
    type: 'SET_LEVEL',
    payload: data
  }
}

export const isLoading = (data) => {
  return {
    type: 'IS_LOADING',
    payload: data
  }
}

export const fetchData = (level) => {
  return async function (dispatch) {
    try {
      // dispatch(isLoading(true))
      const response = await fetch(`https://sugoku.herokuapp.com/board?difficulty=${ level }`)

      const { board } = await response.json()
      dispatch(isLoading(false))
      dispatch(setBoard(board))
      dispatch(setUserAnswer(board))
      dispatch(showAnswer(board))
    } catch (err) {

    }
  }
}

export const setStatus = (data) => {
  return {
    type: 'SET_STATUS',
    payload: data
  }
}

export const submitAnswer = (data) => {

  return async function (dispatch) {
    try {
      const params = new URLSearchParams();
      params.append('board', JSON.stringify(data));
      const response = await axios.post('https://sugoku.herokuapp.com/validate', params);

      if (response.data.status === 'solved') {
        dispatch(setStatus('solved'))
      } else {
        dispatch(setStatus('unsolved'))
      }
    } catch (err) { }
  }
}

export const setUserName = (name) => {
  return {
    type: 'SET_USER_NAME',
    payload: name
  }
}

export const setGender = (gender) => {
  return {
    type: 'SET_GENDER',
    payload: gender
  }
}

function setSolution(data) {
  return {
    type: 'SET_SOLUTION',
    payload: data
  }
}

export const showAnswer = (dataUser) => {
  // console.log('masuk sini', dataUser)
  return async function (dispatch) {
    try {
      const params = new URLSearchParams();
      params.append('board', JSON.stringify(dataUser));
      const { data } = await axios.post('https://sugoku.herokuapp.com/solve', params);

      // console.log('=====', data)
      dispatch(setSolution(data.solution))
    } catch (err) { }
  }
}

export const isShowAnswer = (data) => {
  return {
    type: 'IS_SHOW_ANSWER',
    payload: data
  }
}

export const resetStore = () => {
  return {
    type: 'RESET_STORE'
  }
}