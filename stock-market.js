
// for a given array of daily stock values, return the maximum possible profit
// over the days provided.
function maximumProfit(arr){
  var max = -1;
  arr.forEach(function(presValue, index){
    for(var i = index + 1; i < arr.length; i++){
      if((arr[i] - presValue) > max){
        max = arr[i] - presValue;
      }
    }
  });
  return max;
}

console.log(maximumProfit([45, 24, 35, 31, 40, 38, 11]));
console.log(maximumProfit([45, 40, 30, 20, 19, 18]));
