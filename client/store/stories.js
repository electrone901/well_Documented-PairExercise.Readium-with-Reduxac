import axios from 'axios'

// action type
const SET_STORIES = 'SET_STORIES'

// action creator
export const setStories = (stories) => {
  return {
    type: SET_STORIES,
    stories
  }
}

// fetchStories thunk
export const fetchStories = () => {
  return async (dispatch) => {
    try {
      const {data} = await axios.get('/api/stories')
      dispatch(setStories(data))
    } catch(err) {
      console.log(err)
    }
  }
}

// initial state
const initialState = []

// reducer, function that returns the next state it takes the current state  and the action
export default (state = initialState, action) => {
  switch(action.type) {
    case SET_STORIES:
      return action.stories
    default:
      return state
  }
}
