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
