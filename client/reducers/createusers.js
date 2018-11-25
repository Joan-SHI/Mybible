import {CREATED_DATA} from '../actions/CreateData'

function createdData (state = '', action) {
  switch (action.type) {
    case CREATED_DATA:
      return action.createdMessage.message

    default:
      return state
  }
}

export default createdData
