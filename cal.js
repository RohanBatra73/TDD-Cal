
function stringCalculator(numbers) {
    if (numbers === "") return 0;  
  
    const numArray = numbers.split(",");  
    const sum = numArray.reduce((total, num) => total + parseInt(num), 0); // Step 3
    return sum;
  }
  
  module.exports = stringCalculator;


  function stringCalculato(numbers) {
    if (numbers === "") return 0;
  
    const numArray = numbers.split(/,|\n/);  
    const sum = numArray.reduce((total, num) => total + parseInt(num), 0);
    return sum;
  }
  module.exports = stringCalculato;
  