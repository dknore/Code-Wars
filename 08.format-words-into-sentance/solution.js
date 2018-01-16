function formatWords (words) {
  if (!words) return '';
  var newArray = words.filter(arr => arr);
  var string = newArray.join(", ").replace(/,([^,]*)$/, ' and$1');
  return string;
}