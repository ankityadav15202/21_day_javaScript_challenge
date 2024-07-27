const mypromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
            resolve('message after 2 seconds');
    },2000)
})

mypromise.then((message)=>{
    console.log(message)
})
mypromise

// Task 2

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Reject message after 2 seconds!");
  }, 2000);
});

myPromise
  .then((message) => {
    console.log(message); 
  })
  .catch((error) => {
    console.error(error); 
  });

// Task 3:

const fetchData = (delay, data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, delay);
    });
  };
  
  fetchData(1000, "Fetching data 1...")
    .then((data) => {
      console.log(data);
      return fetchData(1500, "Processing data 1...");
    })
    .then((data) => {
      console.log(data);
      return fetchData(500, "Fetching data 2...");
    })
    .then((data) => {
      console.log(data);
      return fetchData(800, "Processing data 2...");
    })
    .then((data) => {
      console.log(data);
      console.log("All data processed!");
    })
    .catch((error) => {
      console.error("Error:", error);
    });