// Return a Promise
function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const camilo = true;

    if (camilo) {
      resolve();
    } else {
      reject();
    }
  });
}

export default getResponseFromAPI;
