function processData(input) {
  // Your code here
  const lines = input.split('\n').slice(1);

  for (let j = 0; j < lines.length; j++) {
    let evenInput = "";
    let oddInput = "";

    for (let i = 0; i < lines[j].length; i++) {
      if (i % 2 === 0) {
        evenInput += lines[j][i];
      } else {
        oddInput += lines[j][i];
      }
    }
    console.log(evenInput + " " + oddInput);
  }
}
