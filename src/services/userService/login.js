async function login() {
  const login = document.querySelector("#login-btn");

  login.onclick = async function (e) {
    e.preventDefault();

    const user = document.querySelector("#user-login").value;
    const password = document.querySelector("#password-login").value;

    const response = await fetch(API_URL + "/login", {
      method: "POST",
      body: {
        user,
        password,
      },
    });
  };
}
