const { Axios, default: axios } = require('axios');
const module1 = require('./module1')
const {min} = require('lodash')
module1.add(1,5)

console.log(module1.obj.fname);
console.log(module1.obj.getFullName());
console.log(module1.fun());
console.log(module1.calculator(2,5));

const result= min([1,2,3,4,5])
console.log(result);

axios.get('https://api.github.com/users/ankityadav15202')
.then(Response=>{
    const user = Response.data;
    console.log(`Name: ${user.name}`);
    console.log(`Email: ${user.email}`);
  })
  .catch(error => {
    // Handle any errors
    console.error('Error fetching data:', error);
})