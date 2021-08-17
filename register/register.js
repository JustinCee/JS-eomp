function newUser() {
  const name = document.getElementById("first_name").value;
  const surname = document.getElementById("last_name").value;
  const cellphone = document.getElementById("cell_number").value;
  const email = document.getElementById("email").value;
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  console.log(name, surname, cellphone, email, username, password);

  try {
    if (
      typeof name === "number" ||
      typeof surname === "number" ||
      typeof cell === "string"
    ) {
      throw "Please enter the correct information in the fields";
    }
  } catch (j) {
    alert("Mistake: " + j);
  } finally {
    fetch("https://boiling-plains-09363.herokuapp.com/register/", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        first_name: name,
        last_name: surname,
        cell_number: cellphone,
        email: email,
        username: username,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        console.log("You have been registered");

        if (data["message"] == "Success") {
          alert("Please go back to the Login page to view the products");
          window.location.href = "./index.html";
        } else {
          alert("Please fill in all the fields");
        }
      });
  }
}
