module.exports = function zeros(expression) {
  var numbers = [];
  for (var i = 0; i < expression.length; i++) {
    var temporary = '';
    var counter = 0;
    var j = i;
    while (true) {
      if (expression[j] == '*' || expression[j] == '!' || expression[j] =='undefined') {
        break;
      } else {
        temporary += expression[j];
      }
      counter++;
      j++;
    }
    if (expression[i+counter] === '!' && expression[i+counter+1] === '!') {
      numbers.push(factDouble(parseInt(temporary, 10)));
      i += counter + 1;
    } else if (expression[i+counter] === '!') {
      numbers.push(fact(parseInt(temporary, 10)));
      i += counter;
    } else {
      i+= counter;
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
