import {combineReducers} from 'redux'

import errorMessage from './error-message'
import subreddits from './subreddits'
import waiting from './waiting'
import createdData from './createusers'

export default combineReducers({
  createdData,
  errorMessage,
  subreddits,
  waiting
})
