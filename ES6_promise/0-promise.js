// Return a Promise
function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
      if (resolve) {
        resolve('Working OK');
      } else {
        reject(Error('Not working'));
      }
    });
  }
  
  export default getResponseFromAPI;
      