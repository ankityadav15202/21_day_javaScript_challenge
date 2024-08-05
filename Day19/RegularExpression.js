//Day 19 : Regular Expression
// Task/Activities:
// Activity 1:Basic Regular Expressin
// Task 1: Write a regular expression to match a simple pattern (e.g., match all occurrences of the word "JavaScript" in a string). Log the matches.

let string = "This is the javaScript you are searching for"
let search = /javaScript/g;
let match;

while ((match = search.exec(string)) !== null) {
    console.log(`Found match ${match[0]}`);
    
}


// Task 2: Write a regular expression to match all digits in a string. Log the matches.

string = "this string conatain numbers like 123 and 456."
search = /\d/g
match = null
while((match = search.exec(string)) !== null){
    console.log(`Found match ${match[0]}`)
}


// Activity 2: Character Classes and Quantifiers
// Task 3: Write a regular expression to match all words in a string that start with a capital letter. Log the matches.

string =  "This is A Sectence Containing "
search = /\b[A-Z][a-z]+\b/g
match = null
while ((match = search.exec(string)) !==null) {
    console.log(`Found match ${match[0]}`);
}

// Task 4: Write a regular expression to match all sequences of one or more digits in a string. Log the matches.

string = "this string conatain numbers like 123 and 456."
search = /\d+/g //\d: Matches any digit (0-9),  +: Matches one or more of the preceding element (\d). So, it will match sequences of digits, not just single digits.
match = null
while ((match = search.exec(string)) !== null) {
    console.log(`Founnd Match ${match[0]}`);
}



// Activity 3: Grouping and Capturing
// Task 5: Write a regular expression to capture the area code, central office code, and line number from a US phone number format (e.g., (123) 456-7890). Log the captures.


string = "123 456-7890"
search = /^(\d{3}) (\d{3})-(\d{4})$/

// const phoneNumber = "(123) 456-7890";
// const phoneRegex = /^\((\d{3})\) (\d{3})-(\d{4})$/;

match = search.exec(string)

if(match){
    console.log(`Phone Number Captured`);
    console.log(`Area Code :${match[1]}`);
    console.log(`Central Office Code :${match[2]}`);
    console.log(`Line Number :${match[3]}`);    
}else{
    console.log('Phone Number format not organized');
    
}



// Task 6: Write a regular expression to capture the username and domain from an email address. Log the captures.

string = "ankit@gmail.com"

search = /^([^@]+)@([^@]+)$/
match = search.exec(string)

if (match) {
    console.log(`Username : ${match[1]}`);
    console.log(`Domain : ${match[2]}`);
    console.log(`Full mail : ${match[0]}`);    
}else{
    console.log(`Wrong Expression`);
    
}



// Activity 4: Assertions and Boundaries
// Task 7: Write a regular expression to match a word only if it is at the beginning of a string. Log the matches.
string = "Hello World"
search = /^Hello/
match = search.exec(string)
if (match) {
    console.log(`Matched Word : ${match[0]}`)
}else{
    console.log(`Match not Found`);
    
}


// Task 8: Write a regular expression to match a word only if it is at the end of a string. Log the matches.
string = "Hello world"
search = /world$/
match = search.exec(string)

if(match){
    console.log(`Match found "${match[0]}" at the end of the String`);   
}else{
    console.log(`Not Found`);   
}


// Activity 5: Practical Applications

// Task 9: Write a regular expression to validate a simple password (must include at least one uppercase letter, one lowercase letter, one digit, and one special character). Log whether the password is valid.
function validatePassword(password) {
    // Regex to check for at least one lowercase, one uppercase, one digit, and one special character, with a minimum length of 8 characters
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+~`|}{[\]:;?><,./-]).{8,}$/;
    const isValid = regex.test(password);
    console.log(`Password "${password}" is ${isValid ? 'valid' : 'invalid'}`);
  }
  
  validatePassword('P@ssw0rd1');  // Valid
  validatePassword('password');    // Invalid (missing uppercase, digit, and special character)
  validatePassword('Pa$$w0rd');    // Valid
  validatePassword('Password1');   // Invalid (missing special character)
  validatePassword('Password!');   // Invalid (missing digit)
  
// Task 10: Write a regular expression to validate a URL. Log whether the URL is valid.
function validateURL(url) {
    const regex = /^(https?:\/\/)?([a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+)(:[0-9]{1,5})?(\/.*)?$/;
    const isValid = regex.test(url);
    console.log(`URL "${url}" is ${isValid ? 'valid' : 'invalid'}`);
  }
  
  validateURL('http://www.example.com');      // Valid
  validateURL('https://example.com');         // Valid
  validateURL('www.example.com');             // Valid
  validateURL('example.com');                 // Valid
  validateURL('http://example.com/path');     // Valid
  validateURL('https://example.com/path');    // Valid
  validateURL('https://example.com:8080');    // Valid
  validateURL('example');                     // Invalid
  validateURL('http://example');              // Invalid
  validateURL('http://example.c');            // Invalid
  validateURL('http://example..com');         // Invalid
  validateURL('://example.com');              // Invalid
  