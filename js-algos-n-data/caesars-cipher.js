const letters = "abcdefghijklmnopqrstuvwxyz";

let alphabet = {};
let nums = {};

for (let i = 0; i < letters.length; i++) {
  nums[i+1] = letters[i].toUpperCase();
  alphabet[letters[i].toUpperCase()] = i + 1;
}

// console.log(alphabet);
// console.log(nums);

const nonAlphaNumeric = /[^a-zA-Z0-9]/g;
const specialChar = (val) => nonAlphaNumeric.test(val);

// console.log(specialChar(" "));

function decoder(value) {
  let trueValue = value - 13;
  trueValue = trueValue <= 0 ? 26 + trueValue : trueValue;
  return trueValue;
}

function rot13(str) {
  const messageHold = str.split("");
  let messageOutput = [];

  for (const info of messageHold) {
    messageOutput.push(specialChar(info) ? info : nums[decoder(alphabet[info])]);
  }

  console.log(messageHold);
  console.log(messageOutput);

  const message = messageOutput.join("");
  return message;
}
