function convertToRoman(num) {
  let romanStr = "";
  const romanNumerals = {
    1: "I",
    5: "V",
    10: "X",
    50: "L",
    100: "C",
    500: "D",
    1000: "M"
  }
  let units = 0;
  let dozens = 0;
  let hundreds = 0;
  let thousands = 0;
  if (num >= 1000) {
    thousands = Math.floor(num / 1000);
    hundreds = Math.floor((num - (thousands * 1000)) / 100);
    dozens = Math.floor((num - (thousands * 1000) - (hundreds * 100)) / 10);
    units = Math.floor((num - (thousands * 1000) - (hundreds * 100) - (dozens * 10)));
    for (thousands; thousands > 0; thousands--) {
      romanStr += romanNumerals[1000];
    }
    for (hundreds; hundreds > 0; hundreds--) {
      if (hundreds === 9) {
        romanStr += "CM";
        break;
      } else if (hundreds >= 5) {
        romanStr = romanNumerals[500];
        hundreds -= 4;
      } else if (hundreds === 4) {
        romanStr += "CD";
        break;
      } else {
        romanStr += romanNumerals[100];
      }
    }
    for (dozens; dozens > 0; dozens--) {
      if (dozens === 9) {
        romanStr += "XC";
        break;
      } else if (dozens >= 5) {
        romanStr += romanNumerals[50];
        dozens -= 4;
      } else if (dozens === 4) {
        romanStr += "XL";
        break;
      } else {
        romanStr += romanNumerals[10];
      }
    }
    for (units; units > 0; units--) {
      if (units === 9) {
        romanStr += "IX";
        break;
      } else if (units >= 5) {
        romanStr += romanNumerals[5];
        units -= 4;
      } else if (units === 4) {
        romanStr += "IV";
        break;
      } else {
        romanStr += romanNumerals[1];
      }
    }
  } else if (num >= 100 && num < 1000) {
    hundreds = Math.floor(num / 100);
    dozens = Math.floor((num - (hundreds * 100)) / 10);
    units = Math.floor((num - (hundreds * 100) - (dozens * 10)));
    for (hundreds; hundreds > 0; hundreds--) {
      if (hundreds === 9) {
        romanStr += "CM";
        break;
      } else if (hundreds >= 5) {
        romanStr = romanNumerals[500];
        hundreds -= 4;
      } else if (hundreds === 4) {
        romanStr += "CD";
        break;
      } else {
        romanStr += romanNumerals[100];
      }
    }
    for (dozens; dozens > 0; dozens--) {
      if (dozens === 9) {
        romanStr += "XC";
        break;
      } else if (dozens >= 5) {
        romanStr += romanNumerals[50];
        dozens -= 4;
      } else if (dozens === 4) {
        romanStr += "XL";
        break;
      } else {
        romanStr += romanNumerals[10];
      }
    }
    for (units; units > 0; units--) {
      if (units === 9) {
        romanStr += "IX";
        break;
      } else if (units >= 5) {
        romanStr += romanNumerals[5];
        units -= 4;
      } else if (units === 4) {
        romanStr += "IV";
        break;
      } else {
        romanStr += romanNumerals[1];
      }
    }
  } else if (num >= 10 && num < 100) {
    dozens = Math.floor(num / 10);
    units = Math.floor((num - (dozens * 10)));
    for (dozens; dozens > 0; dozens--) {
      if (dozens === 9) {
        romanStr += "XC";
        break;
      } else if (dozens >= 5) {
        romanStr += romanNumerals[50];
        dozens -= 4;
      } else if (dozens === 4) {
        romanStr += "XL";
        break;
      } else {
        romanStr += romanNumerals[10];
      }
    }
    for (units; units > 0; units--) {
      if (units === 9) {
        romanStr += "IX";
        break;
      } else if (units >= 5) {
        romanStr += romanNumerals[5];
        units -= 4;
      } else if (units === 4) {
        romanStr += "IV";
        break;
      } else {
        romanStr += romanNumerals[1];
      }
    }
  } else if (num < 10 && num > 0) {
    units = num;
    for (units; units > 0; units--) {
      if (units === 9) {
        romanStr += "IX";
        break;
      } else if (units >= 5) {
        romanStr += romanNumerals[5];
        units -= 4;
      } else if (units === 4) {
        romanStr += "IV";
        break;
      } else {
        romanStr += romanNumerals[1];
      }
    }
  }
 return romanStr;
}

convertToRoman(3);