const myDb = window.localStorage;
const users = window.localStorage;

// login function
function login() {
  const username = document.getElementById("username-input").value;
  const password = document.getElementById("password-input").value;
  console.log(username, password);
  fetch("https://boiling-plains-09363.herokuapp.com/auth", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      console.log(res["access_token"]);

      if (
        res["description"] ==
        "Please retry typing in your username and password"
      ) {
        alert("Incorrect username or password");
      } else {
        myDb.setItem("jwt-token", res["access_token"]);
        users.setItem("users", username);
        console.log("Success");
        alert("You are Logged in");
        window.location.href = "./products/producsts.html";
      }
    });
}
