function validateText(regex, text) {
    console.log(text.match(regex));
    return text.match(regex);
}
function userGuard(input) {
    const v = input.value.replace(/\W/g, "");
    input.value = v;
}
function passwordGuard(input) {
    const v = input.value.replace(/[\.\,]/g, "");
    input.value = v;
}
export { validateText, userGuard, passwordGuard };
