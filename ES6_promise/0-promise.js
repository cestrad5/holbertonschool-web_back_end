export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const camilo2 = true;

    if (camilo2) {
      resolve();
    } else {
      reject();
    }
  });
}
