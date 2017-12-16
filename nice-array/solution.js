function isNice(arr) {
  if (arr.length == 0) {
    return false;
  }
  var counter = 0;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      if ((arr[i] == arr[j] + 1) || (arr[i] == arr[j] - 1)) {
        counter++;
        break;
      }
    }
  }
  if (counter == arr.length) {
    return true;
  } else {
    return false;
  }
}