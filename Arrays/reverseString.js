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

console.log(reverse("Hi My name is Jenny"));
