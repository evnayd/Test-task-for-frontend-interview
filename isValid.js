function isValid(password) {
  let length = password.split("").length;
  let upperCaseArr = password.replace(/[^A-Z]+/g, "").split("");
  let lowerCaseArr = password.replace(/[^a-z]+/g, "").split("");
  let digitsArr = password.replace(/[^0-9]+/g, "").split("");
  let symbolsArr = password.replace(/[^!@#$%^&*]+/g, "").split("");

  if (
    length > 7 &&
    upperCaseArr.length > 0 &&
    lowerCaseArr.length > 0 &&
    digitsArr.length > 0 &&
    symbolsArr.length > 0
  ) {
    return "strong";
  } else if (
    length > 5 &&
    upperCaseArr.length > 0 &&
    lowerCaseArr.length > 0 &&
    digitsArr.length >= 0 &&
    symbolsArr.length > 0
  ) {
    return "medium";
  } else {
    return "weak";
  }
}
