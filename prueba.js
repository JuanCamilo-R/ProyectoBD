const array = ["Federico", "Alejandra", "Papa Duolingo"];
let result = array.reduce((acum, currentVal) => (acum += currentVal + ","), "");

result = result.slice(0, result.length - 1);

console.log(result);
