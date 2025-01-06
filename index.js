/* https://developer.mozilla.org/en-US/docs/Web/JavaScript */
/* https://devdocs.io/*/

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("toto");
  }, 300);
});

function handleFulfilledA(result) {
  console.log("Fulfilled A with result:", result);
  return result;
}

function handleRejectedA(error) {
  console.error("Rejected A with error:", error);
}

function handleFulfilledB(result) {
  console.log("Fulfilled B with result:", result);
  return result;
}

function handleRejectedB(error) {
  console.error("Rejected B with error:", error);
}

function handleFulfilledC(result) {
  console.log("Fulfilled C with result:", result);
  return result;
}

function handleRejectedC(error) {
  console.error("Rejected C with error:", error);
}

myPromise
  .then(handleFulfilledA, handleRejectedA)
  .then(handleFulfilledB, handleRejectedB)
  .then(handleFulfilledC, handleRejectedC);
