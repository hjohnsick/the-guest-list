
// login modal
const loginButton = document.querySelector("#login");
const modalLogin = document.querySelector("#modal-login");
const modalBgLogin = document.querySelector("#modal-background-login");
const modalCloseLogin = document.querySelector("#modal-close-login");

// display login modal when login button is clicked
loginButton.addEventListener("click", () => {
  modalLogin.classList.add("is-active");
});

// close login modal when background is clicked
modalBgLogin.addEventListener("click", () => {
  modalLogin.classList.remove("is-active");
});

// close login modal when x is clicked
modalCloseLogin.addEventListener("click", () => {
  modalLogin.classList.remove("is-active");
});

async function loginFormHandler(event) {
  event.preventDefault();

  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (email && password) {
    const response = await fetch("/api/users/login", {
      method: "post",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/theguestlist");
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector("#login-form")
  .addEventListener("submit", loginFormHandler);
