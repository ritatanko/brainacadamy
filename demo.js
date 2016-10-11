var arr = [1, 4, 5, 9, 55, 64, 81, 99];
var newArray = arr.filter(function (elem, i) {
  return parseInt(Math.sqrt(elem)) == Math.sqrt(elem);
});

console.log(newArray);