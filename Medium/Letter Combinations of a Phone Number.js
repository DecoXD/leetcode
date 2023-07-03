const letterCombinations = (digits) => {
    if (digits.length === 0) {
      return [];
    }
  
    const phoneMap = {
      "2": ["a", "b", "c"],
      "3": ["d", "e", "f"],
      "4": ["g", "h", "i"],
      "5": ["j", "k", "l"],
      "6": ["m", "n", "o"],
      "7": ["p", "q", "r", "s"],
      "8": ["t", "u", "v"],
      "9": ["w", "x", "y", "z"],
    };
  if(digits.length === 1 ) return phoneMap[digits]
    const queue = [""];
    for (const digit of digits) {
      const letters = phoneMap[digit];
      const queueLength = queue.length;
      for (let i = 0; i < queueLength; i++) {
        const currStr = queue.shift();
        for (const letter of letters) {
          queue.push(currStr + letter);
        }
      }
    }
  
    return queue;
  };
