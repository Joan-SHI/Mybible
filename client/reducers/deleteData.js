import {DELETE_DATA} from '../actions/deleteFormAction'

function deleteData (state = [], action) {
    switch (action.type) {
        case DELETE_DATA:
        return action.deletedMessage.message

        default:
        return state

    }
}


export default deleteData