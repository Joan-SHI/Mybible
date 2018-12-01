
function getUser (state = '', action) {
  switch (action.type) {
    case 'RECEIVEDUSER':
      return [action.newuser.user]

    default:
      return state
  }
}

export default getUser
