myArray = [1, 20, 89, 54, 70, -4, 3];

function palindrom(myArray) {
  let result = [];
  j = myArray.length - 1;

  for (let i = 0; i <= j; j--) {
    let element = myArray[j];
    console.log(element + " index ke " + i);
    result.push(element);
  }
  //   console.log(result);
  return result;
}

let mydata = palindrom(myArray);
console.log(mydata);
