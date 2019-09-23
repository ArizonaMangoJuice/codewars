function numericals(s){
    // dictionary to hold the ounter and the times its been seen
    let dict = {};
    // split the string into an array
    let sArr = s.split('');
    // create output String
    let outputString = '';

    for(let i = 0; i < sArr.length; i++){

      if( dict[sArr[i]] ){
        let increment = dict[sArr[i]];
        increment += 1;
        dict[sArr[i]] = increment; 
      }

      if( !dict[sArr[i]] ) dict[sArr[i]] = 1;
      
      outputString += dict[sArr[i]];
    }
    return outputString;
  }

  /* 
    shorter solutions to do 
    const numericals = (str, seen = {}) =>
        str.replace(/./g, char => 
        seen[char] = (seen[char] || 0) + 1)
  */