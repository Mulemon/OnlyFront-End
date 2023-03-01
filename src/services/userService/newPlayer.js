import { api } from "../api.ts";
import { validateText } from "./utils";
function newPlayer() {
    const messageEl = document.querySelector("span#na-status-message");
    const submit = document.querySelector("#submit");
    console.log(submit);
    submit.onclick = async function (e) {
        e.preventDefault();
        const user = document.querySelector("#na-user").value;
        const nickname = document.querySelector("#na-nickname").value;
        const email = document.querySelector("#na-email").value;
        const password = document.querySelector("#na-password").value;
        const region = document.querySelector("#region").value;
        const validUser = validateText(/^\D\w+/, user)[0].length === user.length;
        const validNickName = validateText(/\w+/, nickname)[0].length === user.length;
        const validPassword = validateText(/\w+/, password)[0].length === password.length;
        const validEmail = validateText(/(\w+)@(\w){5,}(\.)(\w){3,}/, email)[0].length ===
            email.length;
        if (validUser && validNickName && validPassword && validEmail) {
            console.log("sucesso!");
        }
        const response = await api("/newtrainer", {
            method: "POST",
            body: {
                user,
                nickname,
                email,
                password,
                region,
                typetrainer: "Pokemon Trainer",
            },
        });
        const data = await response.json();
        if (data) {
            data.exists && (messageEl.innerText = "Nome de usuário já existe.");
            !data.exists &&
                (() => {
                    messageEl.innerText = "Usuário criado com sucesso.";
                    setTimeout(() => {
                        messageEl.innerText = "";
                        document.querySelector("#flip-container-3d").classList.add("flip");
                    }, 1000);
                })();
        }
    };
}
