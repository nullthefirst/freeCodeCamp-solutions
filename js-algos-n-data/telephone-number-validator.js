function telephoneCheck(str) {
  // exclude poorly formatted numbers starting with "1"
  if (str[1] === " " && str[5] === ")") {
    return false;
  }

  if (str[1] === "(" && str[5] === " ") {
    return false;
  }

  // exclude poorly formatted numbers starting without "1"
  if (str[0] === "5" && str[3] === ")") {
    return false;
  }

  if (str[0] === "(" && (str[3] === "5" && str[4] !== ")")) {
    return false;
  }

  const checker = /^1?([-\( ])?\(?(\d{3})\)?[-\) ]?(\d{3})[- ]?(\d{4})$/;
  return str.match(checker) !== null ? true : false;
}

console.log(telephoneCheck("(555)555-5555"));