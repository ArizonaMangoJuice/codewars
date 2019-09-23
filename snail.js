snail = function(array) {
    // enjoy
    let snail = [];
    let column = 0;
    let rowIndex = 0;
    
    for(i in array){
      console.log('this is the array block', array[i]);
      for(k in array[i]){

        console.log('this is the array row', array[k]);
      }
    }
    console.log(array);
    

  // hold the account of the column
  //traverse the first row of the array completely 
  //   than go to the bottom of the last element of every row
  // traverse the last row of the the array without the last element
  //   traverse the first column of the array excep skip the first row.
  // keep on going by decrementing till you are done.
  }