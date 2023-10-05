function findLongestWord(sentence) {
  // Function to count vowels in a word
  function countVowels(word) {
    const vowels = "aeiouAEIOU";
    let count = 0;
    for (let i = 0; i < word.length; i++) {
      if (vowels.includes(word[i])) {
        count++;
      }
    }
    return count;
  }

  let words = sentence.split(/\s+/); // Split sentence into words
  let longestWord = "";
  let maxWordLength = 0;
  let maxVowelsCount = 0;

  for (let word of words) {
    // Remove non-alphabet characters
    let cleanWord = word.replace(/[^a-zA-Z]/g, "");

    if (cleanWord.length > maxWordLength) {
      // Update longest word and max length
      longestWord = cleanWord;
      maxWordLength = cleanWord.length;
      maxVowelsCount = countVowels(cleanWord);
    } else if (cleanWord.length === maxWordLength) {
      // If length is the same, compare vowel count
      let vowelsCount = countVowels(cleanWord);
      if (vowelsCount > maxVowelsCount) {
        longestWord = cleanWord;
        maxVowelsCount = vowelsCount;
      }
    }
  }

  return longestWord;
}

// Test Cases 
const basicSentence = "Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers";
const empty = ""
const OneWord = "Testing"
const specialCharacters = "The quick brown fox, jumps over the lazy dog!"
const longestAtBegining = "Elephants are the largest land animals on Earth."
const longestAtEnd = "The longest word is supercalifragilisticexpialidocious."
const withNumbers = "The answer to 2 + 2 is four."
const RepeatedLongestWord = "The longest river is the Nile. The longest river is the Amazon."

const longest = findLongestWord(RepeatedLongestWord);
console.log(longest); 
