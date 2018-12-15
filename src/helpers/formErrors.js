
const handleError = (error) => {
  let isAlreadyUser = false;
  let isEmpty = false;
  let wrongEmailPassword = false;
  switch (error.response.data.error) {
    case 'email-not-unique':
      isAlreadyUser = true;
      break;
      case 'user-not-found-or-password-wrong':
    wrongEmailPassword = true;
      break;
    default :
      isEmpty = true;
      break;
  }
  return {wrongEmailPassword, isAlreadyUser, isEmpty};
}


// Export
export default {
  handleError
}
  
