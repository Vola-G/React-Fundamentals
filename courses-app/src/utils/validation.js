export function useNameValidation (name) {
  return name.length > 0 ? true : false;
}

export function useEmailValidation (email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

export function usePassValidation (pass) {
  return pass.length > 6 ? true : false;
}

export function useAuthorValidation (value) {
  return value.length > 1 || value.length === 0 ? true : false;
}

export function useDescriptionValidation (text) {
  const textStatus = {
    warning: '',
    isTextValid: true
  }
  if(text.length === 0) {
    textStatus.warning = ""
    textStatus.isTextValid = false
  }
  if(text.length === 1) {
    textStatus.warning = "Field must contain at least 2 characters"
    textStatus.isTextValid = false
  }
  return textStatus
}

export function useTimeValidation (time) {
  const timeStatus = {
    warning: '',
    isTimeValid: true
  }
  if(Number.isNaN(Number(time))) {
    timeStatus.warning = "Duration should be a number"
    timeStatus.isTimeValid = false
    return timeStatus
  } 
  if(time <= 0 && time.length !== 0) {
    timeStatus.warning="Duration should be more than 0 minute"
    timeStatus.isTimeValid=false
    return timeStatus
  }
  return timeStatus
}
