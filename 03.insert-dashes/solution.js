function insertDash(num) {
  let toString = num.toString();
  let dashNum = [toString[0]];
    for (var i = 1; i < toString.length; i++)
    if((toString[i]%2 === 1)&&(toString[i-1]%2 === 1)){
      dashNum.push('-', toString[i]);
    } else { 
      dashNum.push(toString[i]);
    }
    return(dashNum.join(''));
}