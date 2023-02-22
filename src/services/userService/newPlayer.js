function newPlayer() {
  const submit = document.querySelector("#submit");
  console.log(submit);
  submit.onclick = async function (e) {
    e.preventDefault();
    const name = document.querySelector("#name").value;
    const nickname = document.querySelector("#nickname").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const region = document.querySelector("#region").value;

    const response = await fetch("http://localhost:3000/register", {
      method: "post",
      body: {
        name,
        nickname,
        email,
        password,
        region,
        type: "Pokemon Trainer",
      },
    });

    const data = await response.json();
    if (data) {
      alert("Usuário criado");
    }
  };
}
