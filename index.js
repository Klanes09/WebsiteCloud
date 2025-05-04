let username;
username =window.prompt("Enter your name: ");
while(username ==="" || username === null){
    username = window.prompt("Please Enter your name:");
    while(username ==="" || username === null){
        username = window.prompt("Enter your NAMEEE name name:");
        while(username ==="" || username === null){
            username = window.prompt("Enter your NAMEESSAEADA name:");
            while(username ==="" || username === null){
                username = window.prompt("RAHHHHHHHHHH!!!!!");
            }
        }
    }
}
//window.alert("Thanks for entering yourname "+ username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase() + "!");
username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
document.getElementById("h1").textContent = "Hello " + username + "! Welcome to simple comments";

/*document.getElementById("submit").onclick = function() {
    username = document.getElementById("name").value;
    document.getElementById("h2").textContent = "Hello " + username + "! Welcome to this page!";
} */


    const USERID = {
        name: null,
        identity: null,
        image: null,
        message: null,
        date: null
    }
    
    const userComment = document.querySelector(".usercomment");
    const publishBtn = document.querySelector("#publish");
    const comments = document.querySelector(".comments");
    const userName = document.querySelector(".user");
    const notify = document.querySelector(".notifyinput");
    
        userComment.addEventListener("input", e => {
            if(!userComment.value) {
                publishBtn.setAttribute("disabled", "disabled");
                publishBtn.classList.remove("abled")
            }else {
                publishBtn.removeAttribute("disabled");
                publishBtn.classList.add("abled")
            }
        })
    
        function addPost() {
            if(!userComment.value) return;
            USERID.name = userName.value;
            if(USERID.name === "Anonymous") {
                USERID.identity = false;
                
            }else {
                USERID.identity = true;
                
            }
    
            USERID.message = userComment.value;
            USERID.date = new Date().toLocaleString();
            let published = 
            `<div class="parents">
                <img src="${USERID.image}">
                <div>
                    <h1>${USERID.name}</h1>
                    <p>${USERID.message}</p>
                    <span class="date">${USERID.date}</span>
                </div>    
            </div>`
    
            comments.innerHTML += published;
            userComment.value = "";
            publishBtn.classList.remove("abled")
    
            let commentsNum = document.querySelectorAll(".parents").length;
            document.getElementById("comment").textContent = commentsNum;
    
        }
    
        publishBtn.addEventListener("click", addPost);