// import { route } from "./router.js";

const gameWindow = document.getElementById("gamewindow");

const homeBtn = document.querySelector("#home");
const newAccountBtn = document.querySelector("#new-account");
const loginBtn = document.querySelector("#login-link");

const swap3dAnimation = function () {
  const loginFlip = document.querySelector("#swap-login u");
  const newAccountFlip = document.querySelector("#swap-new-account u");

  const flipContainer = document.querySelector("#flip-container-3d");

  const animate = () => {
    flipContainer.classList.toggle("flip");
  };

  return {
    loginFlip,
    newAccountFlip,
    flipContainer,
    animate,
  };
};

function clearGameWindow() {
  gameWindow.innerHTML = "";
}

clearGameWindow();

let { newAccountFlip, loginFlip } = swap3dAnimation();

newAccountBtn.onclick = async function (e) {
  e.preventDefault();
  const data = await fetch(
    "http://localhost:3000/src/views/newAccount.html"
  ).then((r) => r.text());
  // swap3dAnimation();
  clearGameWindow();
  gameWindow.innerHTML = data;
  loginBtn.classList.remove("active");
  this.classList.add("active");
  loginFlip = swap3dAnimation().loginFlip;
  newAccountFlip = swap3dAnimation().newAccountFlip;
  swap3dAnimation().flipContainer.classList.remove("flip");
  loginFlip.addEventListener("click", swap3dAnimation().animate);
  newAccountFlip.addEventListener("click", swap3dAnimation().animate);
};

loginBtn.onclick = async function (e) {
  e.preventDefault();
  const data = await fetch("http://localhost:3000/src/views/login.html").then(
    (r) => r.text()
  );
  clearGameWindow();
  // swap3dAnimation();
  gameWindow.innerHTML = data;
  newAccountBtn.classList.remove("active");
  this.classList.add("active");
  loginFlip = swap3dAnimation().loginFlip;
  newAccountFlip = swap3dAnimation().newAccountFlip;
  swap3dAnimation().flipContainer.classList.remove("flip");
  loginFlip.addEventListener("click", swap3dAnimation().animate);
  newAccountFlip.addEventListener("click", swap3dAnimation().animate);
};

homeBtn.onclick = clearGameWindow;
