export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const check = true;
    if (check) {
      resolve();
    } else {
      reject();
    }
  });
}
