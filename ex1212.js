//5
function solution(numbers) {
  var answer = 0;
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (answer < numbers[i] * numbers[j]) {
        answer = numbers[i] * numbers[j];
      }
    }
  }
  return answer;
}

function solution(numbers) {
  numbers.sort((a, b) => b - a);
  return numbers[0] * numbers[1];
}



//6
function solution(letter) {
  var answer = "";
  const morse = {
    ".-": "a",
    "-...": "b",
    "-.-.": "c",
    "-..": "d",
    ".": "e",
    "..-.": "f",
    "--.": "g",
    "....": "h",
    "..": "i",
    ".---": "j",
    "-.-": "k",
    ".-..": "l",
    "--": "m",
    "-.": "n",
    "---": "o",
    ".--.": "p",
    "--.-": "q",
    ".-.": "r",
    "...": "s",
    "-": "t",
    "..-": "u",
    "...-": "v",
    ".--": "w",
    "-..-": "x",
    "-.--": "y",
    "--..": "z",
  };
  const newArray = letter.split(" ");
  console.log(newArray);
  newArray.forEach((value) => {
    console.log(value);
    console.log(morse[value]);
    answser = answer + morse[value];
    console.log("=========================");
  });
  return answer;
}

solution(".... . .-.. .-.. ---");

// 6-1
//   return newArray
//     .map((value) => {
//       return morse[value];
//     })
//     .join("");
// }

// console.log(solution(".... . .-.. .-.. ---"));

//6-2
// function solution(letter) {
//   var arr = letter.split(" ");
//   const morse = [
//     ".-",
//     "-...",
//     "-.-.",
//     "-..",
//     ".",
//     "..-.",
//     "--.",
//     "....",
//     "..",
//     ".---",
//     "-.-",
//     ".-..",
//     "--",
//     "-.",
//     "---",
//     ".--.",
//     "--.-",
//     ".-.",
//     "...",
//     "-",
//     "..-",
//     "...-",
//     ".--",
//     "-..-",
//     "-.--",
//     "--..",
//   ];
//   const alphabet = [
//     "A",
//     "B",
//     "C",
//     "D",
//     "E",
//     "F",
//     "G",
//     "H",
//     "I",
//     "J",
//     "K",
//     "L",
//     "M",
//     "N",
//     "O",
//     "P",
//     "Q",
//     "R",
//     "S",
//     "T",
//     "U",
//     "V",
//     "W",
//     "X",
//     "Y",
//     "Z",
//   ];
//   for (var i = 0; i < arr.length; i++) {
//     for (var j = 0; j < 26; j++) {
//       if (arr[i] === morse[j]) {
//         arr.splice(i, 1, alphabet[j]);
//       }
//     }
//   }
//   return arr.join("");
// }
// console.log(solution(".... . .-.. .-.. ---"));
