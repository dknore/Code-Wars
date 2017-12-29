function removeComma(word){
  var array = ['ninja', 'samurai', 'ronin'];
  var string = array.toString();

  for(var i = 0; i < string.length; i++) {
    if (i = string.length - 1) {
      return string.replace(/,/i, ' and ');
    } else {
      return string.join(', ');
    }
  }
}
removeComma();