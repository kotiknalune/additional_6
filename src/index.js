module.exports = function zeros(expression) {
  var numbers = [];
  for (var i = 0; i < expression.length; i++) {
    var temporary = '';
    var count = 0;
    var j = i;
    while (true) {
      if (expression[j] == '*' || expression[j] == '!' || expression[j] =='undefined') {
        break;
      } else {
        temporary += expression[j];
      }
      count++;
      j++;
    }
    if (expression[i+count] === '!' && expression[i+count+1] === '!') {
      numbers.push(factDouble(parseInt(temporary, 10)));
      i += count + 1;
    } else if (expression[i+count] === '!') {
      numbers.push(fact(parseInt(temporary, 10)));
      i += count;
    } else {
      i+= count;
    }
  }
  function fact(n) {
    if (n < 3) return n;
    return n * fact(n-1);
  }
  function factDouble(n) {
    if (n < 3) return n;
    return n * factDouble(n-2);
  }
  var output = '' + numbers.reduce((acc, num) => acc*num, 1);
  return output.split('').reduce((acc, num) => num == '0' ? acc++ : acc = acc);
}
