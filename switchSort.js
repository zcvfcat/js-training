function switchSort(arr) {
  function getIndex(arr, value) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === value) {
        return i
      }
    }
  }

  var value = 1
  var count = 0
  while (value <= arr.length) {
    var index = getIndex(arr, value)
    var changeValue = arr[value - 1]
    //console.log("index: " + index);
    //console.log("value: " + value);
    //console.log("changeValue: " + changeValue);
    if (value != changeValue) {
      count++
      arr[value - 1] = value
      arr[index] = changeValue
    }
    value++
  }
  //console.log(arr);
  console.log(count)
  return count
}

module.exports = switchSort

// keep this function call here
// to see how to enter arguments in JavaScript scroll down
