// promises

function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/users/1")
        .then((response) => {
          if (response.ok) {
            resolve(response.json());
          } else {
            reject("errror in api call");
          }
        })
        .catch((err) => {
          reject(err);
        });
    }, 1000);
  });
}

// consume promise

// getData()
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// sync code

function syncexample() {
  console.log("sync-opeartion-1");
  console.log("sync-opeartion-2");
  console.log("sync-opeartion-3");
  console.log("sync-opeartion-4");
}

// syncexample();
// console.log('after syncexample functn');

// async code

function asyncexample() {
  console.log("async-opeartion-1");
  console.log("async-opeartion-2");
  console.log("async-opeartion-3");
  setTimeout(() => {
    console.log("async-opeartion-4");
    console.log("async-opeartion-5");
  }, 2000);

  console.log("async-opeartion-6");
}

// asyncexample();

//
async function getDataWithDelay() {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      try {
        const resp = await fetch(
          "https://jsonplaceholder.typicode.com/users/2"
        );

        // if (!resp.ok) {
        //   throw new Error("Error in API call");
        // }
        if (resp.ok) {
          const data = resp.json();
          resolve(data);
        }
        else{
            throw new Error("Error in API call")
        }
      } catch (err) {
        reject(console.error(err.message));
      }
    }, 2000);
  });
}

//

async function fetchDataWithDelay() {
  try {
    console.log("Fetching data...");
    const data = await getDataWithDelay();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

fetchDataWithDelay();
