console.log("Script started")

// Test working with objects here
let person = {
    name: "Paul", 
    age: "80",
    eyeColor: "green"
};
    console.log(person.name);

    person.name = "Ringo";
    console.log(person.name);

    person.birthday = "Jan 1";
    console.log(person);



function processForm(event) {
    console.log("click");
    // Prevent this function from reloading the page when the form is submitted
    event.preventDefault();
    // TODO: Create a newUser object that has all the user's info from the form
    let newUser =  {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        birthdate: document.getElementById("birthdate").value,
        favColor: document.getElementById("favcolor").value
    };
    console.log(newUser);

    // TODO: Call the addUser function and pass the newUser object as a parameter
}

function addUser(user) {
    // Create a div to hold the user's info
    let div = document.createElement("div");
    // TODO: Set the background color of the div to the user's favorite color

    // Create a heading for the user's name
    let name = document.createElement("h2");
    // TODO: Set the text using the object data
    div.appendChild(name); // Add the heading to the div

    // Create a paragraph for the user's email
    let email = document.createElement("p");
    // TODO: Set the text using the object data
    div.appendChild(email); // Add the paragraph to the div
    
    // Create a paragrapn for the user's birthdate
    let birthdate = document.createElement("p");
    // TODO: Set the text using the object data
    div.appendChild(birthdate); // Add the paragraph to the div

    document.body.appendChild(div); // Add the div to the page
}