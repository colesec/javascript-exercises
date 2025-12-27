const palindromes = function (word) {
  valid = "abcdefghijklmnopqrstuvwxyz1234567890";

  cleanWord = word
    .toLowerCase()
    .split("")
    .filter((char) => valid.includes(char))
    .join("")

  return cleanWord === cleanWord.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
