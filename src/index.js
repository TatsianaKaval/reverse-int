module.exports = function reverse(n) {
  const strNumber = n.toString();
  let i = 0;
  let reverseNum = '';
  while (i < strNumber.length) {
    reverseNum = strNumber[i] + reverseNum;
    i += 1;
  }
  if (reverseNum.at(-1) === '-') {
    reverseNum = reverseNum.slice(0, -1);
  }
  return reverseNum;
};
