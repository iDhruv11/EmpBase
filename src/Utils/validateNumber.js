const validateNumber = (number) => {
    if(number.length > 10 || number.length < 10) return "A number must contain exactly 10 digits."
    if(!number.length) return "Empty Number."
    return null;
}
export { validateNumber }