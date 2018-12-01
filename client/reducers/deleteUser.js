import {DELETE_DATA } from '../actions/deleteFormAction'

function deleteUser (state = [], action) {
    switch (action.type) {
        case DELETE_DATA:
        return state

        case 'DELETED_DATA':
        return action.deletedMessage.message

        default:
        return state

    }
}


export default deleteUser