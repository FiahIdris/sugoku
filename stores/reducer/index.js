const initialState = {
  board: [],
  level: 'random',
  userAnswer: [],
  status: '',
  userName: null,
  gender: null,
  solutions: [],
  isShowAnswers: false,
  isLoading: true
}

function reducer(state = initialState, action) {
  if (action.type === 'SET_BOARD') {
    return {
      ...state, board: action.payload
    }
  }
  if (action.type === 'SET_USER_ANSWER') {
    return {
      ...state, userAnswer: action.payload
    }
  }
  if (action.type === "SET_LEVEL") {
    return {
      ...state, level: action.payload
    }
  }
  if (action.type === 'SET_STATUS') {
    return {
      ...state, status: action.payload
    }
  }
  if (action.type === 'SET_USER_NAME') {
    return {
      ...state, userName: action.payload
    }
  }
  if (action.type === 'SET_GENDER') {
    return {
      ...state, gender: action.payload
    }
  }
  if (action.type === 'SET_SOLUTION') {
    return {
      ...state, solutions: action.payload
    }
  }
  if (action.type === 'IS_SHOW_ANSWER') {
    return {
      ...state, isShowAnswers: action.payload
    }
  }
  if (action.type === 'RESET_STORE') {
    return initialState
  }
  if (action.type === 'IS_LOADING') {
    return {
      ...state, isLoading: action.payload
    }
  }


  return state
}

export default reducer;