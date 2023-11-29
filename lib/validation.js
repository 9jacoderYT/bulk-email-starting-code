export const isEmail = (email) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,20}$/i.test(email);

export const isPassword = (password) => {
  if (password.length < 7 || password.length > 15) {
    return false;
  } else {
    return true;
  }
};
