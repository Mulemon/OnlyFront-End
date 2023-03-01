import { api } from "../api";
import { userGuard, passwordGuard } from "./utils";
async function login() {
    const login = document.querySelector("#login-btn");
    login.onclick = async function (e) {
        e.preventDefault();
        const user = userGuard(document.querySelector("#user-login")).value;
        const password = passwordGuard(document.querySelector("#password-login")).value;
        const response = await api("/login", {
            method: "POST",
            body: {
                user,
                password,
            },
        });
        if (response.headers.has("teste")) {
            window.location.assign("/game");
        }
    };
}
