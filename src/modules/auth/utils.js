const minLength = (inputLength, min) => {
    return inputLength < min ? `Value must be at least ${min} characters` : null;
};
const isEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email) ? null : "Must be a valid email address";
};
export { minLength, isEmail };
//# sourceMappingURL=utils.js.map