//Create a function that reverses a string:
//'Hi My name is Jenny' should be:
//'ynneJ si eman yM iH'

const reverse = (str) => {
  //check input
  if (!str || str.length < 2 || typeof str !== "string") {
    return "not a valid input";
  }

  const backwardsArr = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; i >= 0; i--) {
    backwardsArr.push(str[i]);
  }

  const newString = backwardsArr.join("");
  return newString;
};

//More readable version:
const reverse2 = (str) => {
  return str.split('').reverse().join('');
}

//More succinct version:
const reverse3 = str => [...str].reverse().join('');


console.log(reverse("Hi My name is Jenny"));
console.log(reverse2("Hi My name is Jenny"));
console.log(reverse3("Hi My name is Jenny"));
