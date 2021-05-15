const defaultInput = "brrybrybrry";

let input =
  typeof process.argv[2] === "string" ? process.argv[2] : defaultInput;

function canItCreateNoMoreThanTwoTri(inputString) {
  //validate input type
  if (inputString.length !== 11 || !/^[rby]*$/.test(input)) {
    console.log("invalid input");
    return;
  }
  let minimum = Infinity;
  let colors = "rby"; //red, blue, yellow

  // check for each combination and get the minimum
  for (let a = 0; a < colors.length; a++) {
    for (let b = 0; b < colors.length; b++) {
      for (let c = 0; c < colors.length; c++) {
        let numOfCompleteTri = checkNumOfCompleteTri(
          colors[a],
          colors[b],
          colors[c],
          inputString
        );

        if (numOfCompleteTri < minimum) {
          minimum = numOfCompleteTri;
        }
      }
    }
  }
  console.log({ minimum });

  if (minimum < 3) {
    console.log(true);
  } else {
    console.log(false);
  }
}

function checkNumOfCompleteTri(a, b, c, inputString) {
  //check complete triangles formed by each combination of 15 triangles
  let numOfCompleteTri = 0;

  // corner color from triangle 1 to 15
  let triangle_table = [
    [inputString[0], inputString[1], a],
    [inputString[1], inputString[2], a],
    [inputString[2], inputString[3], a],
    [inputString[3], inputString[4], a],
    [inputString[4], inputString[5], b],
    [inputString[5], inputString[6], b],
    [inputString[6], inputString[7], b],
    [inputString[7], inputString[8], b],
    [inputString[8], inputString[9], c],
    [inputString[9], inputString[10], c],
    [inputString[10], inputString[0], c],
    [inputString[0], a, c],
    [inputString[4], a, b],
    [inputString[8], b, c],
    [a, b, c],
  ];

  for (let i = 0; i < triangle_table.length; i++) {
    // condition for complete triangles r !== b, r!==y, b!==y
    if (
      triangle_table[i][0] !== triangle_table[i][1] &&
      triangle_table[i][1] !== triangle_table[i][2] &&
      triangle_table[i][0] !== triangle_table[i][2]
    ) {
      numOfCompleteTri++;
    }

    // if counts exceeds 2 stop counting
    if (numOfCompleteTri > 2) {
      break;
    }
  }

  return numOfCompleteTri;
}

canItCreateNoMoreThanTwoTri(input);
