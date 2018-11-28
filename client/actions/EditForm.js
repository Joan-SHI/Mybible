import request from 'superagent'

export const SHOW_ERROR = 'SHOW_ERROR'
export const EDIT_DATA = 'EDIT_DATA'
export const EDITED_DATA = 'EDITED_DATA'

export const editingData = () => {
    return {
        type: EDIT_DATA
    }
}

export const editedData = (data) => {
    return {
        type: EDITED_DATA,
        editedMessage: data
    }
}

export const showError = (errorMessage) => {
    return {
        type: SHOW_ERROR,
        errorMessage: errorMessage
    }
}

export function EditForm(data) {
    return (dispatch) => {
        dispatch(editingData())
        return request
            .patch('/api/v1/user/edit')
            .send(data)
            .then(res => {
                console.log(res.body);
                dispatch(editedData(res.body))
            })
            .catch(err => {
                dispatch(showError(err.message))
            })
    }
}









