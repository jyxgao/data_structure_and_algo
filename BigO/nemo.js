const nemo = ["nemo"];
const everyone = [
  "dory",
  "bruce",
  "marlin",
  "nemo",
  "gill",
  "bloat",
  "nigel",
  "squirt",
  "darla",
  "hank",
];

const large = new Array(1000).fill('nemo');

const findNemo = (array) => {
  let t0 = Date.now();

  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("Found NEMO!");
    }
  }
  let t1 = Date.now();
  console.log(`call to find Nemo took ${t1 - t0} milliseconds`);
};

findNemo(large);
