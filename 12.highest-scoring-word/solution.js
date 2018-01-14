function high(x){
    var words = x.split(" ");
    var arr = "abcdefghijklmnopqrstuvwxyz";
    var totals = [];
    
    words.forEach(word => {
      var sum = 0;
      for(let i = 0; i < word.length; i++) {
        sum += (arr.indexOf(word[i]) + 1);
      }
      totals.push(sum);
    })
    var highScore = Math.max.apply(null, totals);
    
    var highest = totals.indexOf(highScore);
    return words[highest];
  }