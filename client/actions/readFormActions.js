// we will call this big function from React 

import request from 'superagent'

export function getUser (id) {
    console.log(id);
    
    return (dispatch) => {
        //the function below this line will tell redux to change its state to loading
    
      return request
        .get(`/api/v1/user/${id}`)
        .send(id)
        .then(res => {
            console.log(res.body);
            
          dispatch(userGet(res.body))
        })
        .catch(err => {
          dispatch(showError(err.message))

        })
    }
  }

  export const showError = (errorMessage) => {
    return {
      type: 'SHOW_ERROR',
      errorMessage: errorMessage
    }
  }

  export const loading = () => {
    return {
      loading: true
    }
  }

  export const userGet = (res) => {
    return {
        type: 'RECEIVEDUSER',
      newuser: res
    }
  }