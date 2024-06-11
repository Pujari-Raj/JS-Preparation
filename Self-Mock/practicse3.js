// async await(use only .then.catch & use async-await keyword on function, fetch, response obj)

async function getData() {
  try {
    /**
 * 
The fetch("api") function initiates an asynchronous request to the specified URL.
It returns a Promise that resolves to a Response object representing the response to the request.
By using await before fetch("api"), we are waiting for the promise returned by fetch() to resolve, which means we wait until the HTTP request is completed and a response is received before proceeding with the execution of the code.'
*
*/
    // use await, to resolve/reject promise
    const resp = await fetch("https://jsonplaceholder.typicode.com/users/2");

    // use await
    if (resp.ok) {
      /**
The fetch() function returns a Promise that resolves to the Response object associated with the request.
The Response object has various methods, including .json(), which returns a promise that resolves to the JSON representation of the response body.
By using await before response.json(), we are waiting for the promise returned by response.json() to resolve, which means we wait until the JSON data is fully received and parsed before proceeding with the execution of the code.

*/
      // use await, to resolve/reject promise

      const data = await resp.json();
      return data;
    } else {
      console.error("Failed to fetch data");
    }
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
}

// calling a function
// (use only async-await keyword on function,response obj)
async function getUsersData() {
  const data = await getData();
  if (data) {
    console.log(data);
  } else {
    // Handle the case where data is null (e.g., failed to fetch)
    console.log("Failed to fetch data!!.");
  }
}

getUsersData();
