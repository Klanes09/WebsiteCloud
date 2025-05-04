document.getElementById("form1").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const password = document.getElementById("password").value;
    if (name === "Kland" && password === "020905") {
        window.location.href = 'more2.html';
    } else {
        alert("Invalid username or password.");
    }
});