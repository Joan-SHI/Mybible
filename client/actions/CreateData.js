
import request from 'superagent'

export const SHOW_ERROR = 'SHOW_ERROR'
export const CREATE_DATA = 'CREATE_DATA'
export const CREATED_DATA = 'CREATED_DATA'

export const creatingData = () => {
    return {
      type: CREATE_DATA
    }
  }
  
  export const createdData = (data) => {
    return {
      type: CREATED_DATA,
      createdMessage: data
    }
  }
  
  export const showError = (errorMessage) => {
    return {
      type: SHOW_ERROR,
      errorMessage: errorMessage
    }
  }
  
  export function CreateData (data) {
    return (dispatch) => {
      dispatch(creatingData())
      return request
        .post(`/api/v1/user/create`)
        .send(data)
        .then(res => {
            console.log(res.body);
            
          dispatch(createdData(res.body))
        })
        .catch(err => {
          dispatch(showError(err.message))
        })
    }
  }
  