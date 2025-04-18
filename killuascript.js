const homeButton = document.getElementById('homeButton')
function returnHome() {
    alert("You are now being taken to the home screen!");
    const home = window.location.href = "index.html";
    setTimeout(home, 100);
}
homeButton.onclick = returnHome;
