# cs2-objects

## Learning Target
I am learning how to use JS objects to store complex/related data

## Success Criteria
- I can use create an object using ```let myObject = {key1: "value", key2: "value"}```
- I can get/set object values using ```myObject.key```
- I can use an object to store data entered in a form

# Essential Notes
- Syntax to declare a new JS object
    ```javascript
    let myObject = {key1: "value", key2: "value"};
    ```
    ```javascript
    let person = {name: "Throckmorton", age: 14};
- JS Objects can be written over multiple lines to make it easier to read
    ```javascript
    let person = {
        name: "Throckmorton",
        age: 14
    }
- Access/assign inner key data using the dot (.) operator
    ```javascript
    console.log(person.age); // Prints person.age to the console
    person.age = 15; // Assigns a new value to person.age
    ```
- If a key doesn't exist when you assign to it, it will automatically be created
    ```javascript
    person.birthday = "Jan 1"; // person now contains the key birthday with the value "Jan 1"
    ```
## How to fill an object with form data
- **Option 1:** Get the data directly when declaring the object
    ```javascript
    let person = {
        name: document.getElementById("name").value,
        age: document.getElementById("age").value,
        email: document.getElementById("email").value
    }
    ```
- **Option 2:** Start with an existing object and create keys along the way
    ```javascript
    let person = {}; // Create empty object
    person.name = document.getElementById("name").value; // Create the name key
    person.age = document.getElementById("age").value; // Create the age key
    person.email = document.getElementById("email").value; // Create the email key
    ```

# Example and Exercises
Complete all the tasks labeled as ```// TODO: ...``` in the comments in ```script.js```