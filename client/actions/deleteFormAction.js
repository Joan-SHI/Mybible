import request from 'superagent'

export const SHOW_ERROR = 'SHOW_ERROR'
export const DELETE_DATA = 'DELETE_DATA'
export const DELETED_DATA = 'DELETED_DATA'

export const deletingData = () => {
    return {
      type: DELETE_DATA
    }
  }
  
  export const deletedData = (data) => {
    return {
      type: DELETED_DATA,
      deletedMessage: data
    }
  }
  
  export const showError = (errorMessage) => {
    return {
      type: SHOW_ERROR,
      errorMessage: errorMessage
    }
  }


export function deleteUser (id) {

    return (dispatch) => {
        dispatch(deletingData())
        return request
        .get('/api/v1/user/${id}')
        .send(id)
        .then(res => {
            console.log(res.body);
            dispatch(deletedData(res.body))
        })
        .catch(err => {
            dispatch(showError(err.message))
        })
    }
}