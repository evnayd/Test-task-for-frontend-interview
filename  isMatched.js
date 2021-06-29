function isMatched(string) {
  let arr = string.split("");
  let leftParentheses = arr.filter((el) => el == "(");
  let rightParentheses = arr.filter((el) => el == ")");

  if (leftParentheses.length == rightParentheses.length) {
    return "true";
  } else if (leftParentheses.length == 0 && rightParentheses.length == 0) {
    return "true";
  } else {
    return "false";
  }
}
