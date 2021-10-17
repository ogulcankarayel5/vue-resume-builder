const minLength = (inputLength: number, min: number) => {
  return inputLength < min ? `Value must be at least ${min} characters` : null;
};

const isEmail = (email: string) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email) ? null : "Must be a valid email address"
};

export { minLength, isEmail };
