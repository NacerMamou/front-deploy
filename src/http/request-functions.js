// const mainDomain = "http://localhost:8015";
const mainDomain = "https://www.data-visualization.nmamou.com";

export async function getRequest(endpoint) {
  const url = `${mainDomain}${endpoint}`;
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
}
