function capitalize(s) {
  var newString = [];
  for(var i = 0; i < s.length; i++) {
    if (i % 2 !== 0) {
      newString[i] = s[i].toUpperCase();
    } else {
      newString[i] = s[i].toLowerCase();
    }
  }
  return newString.join('');
}