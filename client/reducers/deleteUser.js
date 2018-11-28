import {DELETE_DATA} from '../actions/deleteFormAction'

function deleteUser (state = [], action) {
    switch (action.type) {
        case DELETE_DATA:
        return state

        default:
        return state

    }
}


export default deleteUser