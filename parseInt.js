//loop through and check the next index to see the length of the values
function parseInt(string) {
  // TODO: it's your task now
  let numDictionary = {
    one: '1',
    two: '2',
    three: '3',
    four: '4',
    five: '5',
    six: '6',
    seven: '7',
    eight: '8',
    nine: '9',
    zero: '0',
    twenty: '2',
    thirty: '3',
    forty: '4',
    fifty: '5',
    sixty: '6',
    seventy: '7',
    eighty: '8',
    ninety: '9'
  }
  // this will be used to add the big numbers for example One hundred-Thousand
  let length = {
    hundred: '100',
    thousand: '1000',
    tenThousand: '10000',
    hundredThousand: '100000',
    million: '1000000'
  }

  let newString = string.replace(/-/g, ' ');
  newString = newString.split(' ');
//     console.log('new number split by space', newString)
  let newNumber = [];
  
  for(let i = 0; i < newString.length; i++){
  
    if(numDictionary[newString[i]]){
      newNumber.push(numDictionary[newString[i]]);
    }
  }
  
//     newNumber = newNumber;
  let stringNumber = '';
  newNumber.forEach(e => stringNumber += e);
//     newNumber = parseInt(newNumber);
  return parseFloat(stringNumber);
}

console.log(parseInt('One million four-hundred thousand'))


//count till you get -1