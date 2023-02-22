const gameWindow = document.getElementById("gamewindow");

const homeBtn = document.querySelector("#home");
const newAccountBtn = document.querySelector("#new-account");
const loginBtn = document.querySelector("#login-link");

function clearGameWindow() {
  gameWindow.innerHTML = "";
}

clearGameWindow();

newAccountBtn.onclick = async function (e) {
  e.preventDefault();
  const data = await fetch(
    "http://localhost:3000/src/views/newAccount.html"
  ).then((r) => r.text());
  clearGameWindow();
  gameWindow.innerHTML = data;
};

loginBtn.onclick = async function (e) {
  e.preventDefault();
  const data = await fetch("http://localhost:3000/src/views/login.html").then(
    (r) => r.text()
  );
  clearGameWindow();
  gameWindow.innerHTML = data;
};

homeBtn.onclick = clearGameWindow;
