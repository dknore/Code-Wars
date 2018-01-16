function mutateMyStrings(stringOne, stringTwo) {
  var splitOne = stringOne.split('');
  var splitTwo = stringTwo.split('');

  for (var i = 0; i < splitOne.length; i++) {
    var sepFirst = splitOne.indexof[i];
    for (var j = 0; j < splitTwo.lenth; j++) {
      var sepSecond = splitTwo.indexof[j];
      return sepFirst[i].indexof(sepSecond[j]);
    }
  }
}
mutateMyStrings();