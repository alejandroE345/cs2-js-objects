console.log("Script started")

// TODO: Test working with objects here



function processForm() {
    console.log("click");
    // TODO: prevent this function from reloading the page when the form is submitted

    // TODO: Create a newUser object that has all the user's info from the form

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