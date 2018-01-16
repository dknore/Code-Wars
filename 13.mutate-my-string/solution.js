function mutateMyStrings(stringOne, stringTwo){
    var arr1 = stringOne.split('');
    var arr2 = stringTwo.split('');
    var answerString = [arr1.join('')];
    
    for(let i = 0; i < arr1.length; i++) {
     if(arr1[i] !== arr2[i]) {
        arr1[i] = arr2[i];
        answerString.push(arr1.join(''));
      }
    }
    return answerString.join('\n') + '\n';
  }