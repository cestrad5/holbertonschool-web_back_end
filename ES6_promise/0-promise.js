function getResponseFromAPI() {
  return new Promise((resolve) => {
    // Simulate an asynchronous API response
    setTimeout(() => {
      resolve('API response received');
    }, 3000); // Simulating a 2-second delay
  });
}

export default getResponseFromAPI;