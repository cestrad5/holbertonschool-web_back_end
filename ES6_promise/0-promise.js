// Return a Promise
function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    if (resolve) {
      resolve();
    } else {
      reject(Error());
    }
  });
}

export default getResponseFromAPI;
