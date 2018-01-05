function find_average(array) {
  let add = array.reduce((acc, cur) => acc + cur);
  let result = add / array.length;
  return result;
}
