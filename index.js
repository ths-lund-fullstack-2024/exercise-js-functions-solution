// #13. Create a function called countVowels that takes a string as a parameter and logs the number of vowels (a, e, i, o, u) in that string.

function countVowels(str) {
  let count = 0;
  const vowels = ["a", "e", "i", "o", "u"];

  for (const letter of str.toLowerCase()) {
    if (vowels.includes(letter)) {
      count++;
    }
  }

  return count;
}

const count = countVowels("Niklas");
console.log(`Vowels = ${count}`);
