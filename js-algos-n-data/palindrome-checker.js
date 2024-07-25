function palindrome(str) {
  let letters = str.replace(/[^a-zA-Z0-9]/g, "");
  letters = letters.toLowerCase();
  
  let stringHold = letters.split("");
  const revString = stringHold.reverse().join("");
  console.log(revString);

  return letters === revString ? true : false;
}

palindrome("eye");