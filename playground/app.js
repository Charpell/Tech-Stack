// const reducer = () => [];

// Reducer
const reducer = () => (state = [], action) => {
  if (action.type === 'split_string') {
    return action.payload.split('');
  } else if (action.type === 'add_character') {
    return [ ...state, action.payload ]
  }
  return state
}

// Store
const store = Redux.createStore(reducer);

store.getState();

// Action
const action = {
  type: 'split_string',
  payload: 'asdf'
}

const action2 = {
  type: 'add_character',
  payload: 'a'
}

// Dispatch Action
store.dispatch(action)
store.dispatch(action2)

store.getState();