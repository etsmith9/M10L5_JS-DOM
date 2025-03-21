function User(name, email, message) {
    this.name = name;
    this.email = email;
    this.message = message;
}

User.prototype.displayInfo = function () {
    return `
        <p><strong>Name:</strong> ${this.name}</p>
        <p><strong>Email:</strong> ${this.email}</p>
        <p><strong>Message:</strong> ${this.message}</p>
        <hr>
    `;
};

// Task 2: Write JavaScript code to handle form submissions and store user input in an object.
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("logIn").addEventListener("submit", function (event) {
        event.preventDefault();

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("comments").value; 

        let newUser = new User(name, email, message);

        let userElement = document.createElement("div");
        userElement.innerHTML = newUser.displayInfo();

        document.getElementById("userInfo").appendChild(userElement);

        this.reset(); 
    });
});
