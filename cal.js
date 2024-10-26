// calculator.js
function stringCalculator(numbers) {
    if (numbers === "") return 0;  // Step 1
  
    const numArray = numbers.split(",");  // Step 2
    const sum = numArray.reduce((total, num) => total + parseInt(num), 0); // Step 3
    return sum;
  }
  
  module.exports = stringCalculator;

  //new
  function stringCalculato(numbers) {
    if (numbers === "") return 0;
  
    const numArray = numbers.split(/,|\n/);  // Regex to handle both comma and newline
    const sum = numArray.reduce((total, num) => total + parseInt(num), 0);
    return sum;
  }
  module.exports = stringCalculato;
  