export const isValidAnagram = (s1, s2) => {
  if (s1.length != s2.length) return false;

  let charCount = {};

  for (let char of s1) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (let char of s2) {
    if (!charCount[char]) {
      return false;
    }
    charCount[char]--;
  }

  return true;
};
