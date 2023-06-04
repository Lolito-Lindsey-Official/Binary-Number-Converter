function convert() {
    const binaryInput = document.getElementById('binaryInput').value;
    /*The parseInt converts strings into integers*/
    const decimalOutput = parseInt(binaryInput, 2);
  
    /*If the given input is not an binary number, invalidate it*/
    if (isNaN(decimalOutput)) {
      document.getElementById('result').textContent = 'Invalid binary number';
    }
    /*Otherwise, present the result in the integer form*/
    else {
      document.getElementById('result').textContent = `Number: ${decimalOutput}`;
    }
  }
  
