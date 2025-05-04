let username;
username =window.prompt("Enter your name: ");
while(username ==="" || username === null){
    username = window.prompt("Please Enter your name:");
    while(username ==="" || username === null){
        username = window.prompt("Enter your Fucking name name:");
        while(username ==="" || username === null){
            username = window.prompt("Enter your Putanginang name:");
            while(username ==="" || username === null){
                username = window.prompt("RAHHHHHHHHHH!!!!!");
            }
        }
    }
}
//window.alert("Thanks for entering yourname "+ username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase() + "!");
username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
document.getElementById("h1").textContent = "Hello " + username + "! Welcome to simple wether api!";

/*document.getElementById("submit").onclick = function() {
    username = document.getElementById("name").value;
    document.getElementById("h2").textContent = "Hello " + username + "! Welcome to this page!";
} */
