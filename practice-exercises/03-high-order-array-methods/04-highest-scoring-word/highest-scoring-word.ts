export function highestScoringWord(str: string): string {
  const newStr: string[] = str.split(' ');

  const mapStr = newStr.map((word) => {
    let score = 0;
    for (const letter of word) {
      score += letter.charCodeAt(0) - 'a'.charCodeAt(0);
    }
    return score;
  });

  let highestScore = 0;
  let highestIndex = 0;
  for (let i = 0; i < mapStr.length; i++) {
    if (mapStr[i] > highestScore) {
      highestScore = mapStr[i];
      highestIndex = i;
    }
  }

  return newStr[highestIndex];
}
