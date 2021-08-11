module.exports = function check(str, bracketsConfig) {

  const openedBrackets = bracketsConfig.map( el => el[0]);
  const revesedSubArray = bracketsConfig.map( el => [ el[1], el[0] ]);
  const bracketPair = Object.fromEntries(revesedSubArray);
  debugger;
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    const currentSymbol = str[i];

    if ( openedBrackets.includes(currentSymbol) && bracketPair[currentSymbol] !== currentSymbol  ) {
      stack.push(currentSymbol);
    } else if (bracketPair[currentSymbol] === currentSymbol && !stack.includes(currentSymbol)) {
      stack.push(currentSymbol);
      } else {
        if (stack.length === 0) {
          return false;
      } 

      let topOfStack = stack[stack.length - 1];

      if(bracketPair[currentSymbol] === topOfStack) {
        stack.pop();
      } else {
        return false;
      } 
    }
  }
  return stack.length === 0; 
}
