// signup modal
const signupButton = document.querySelector("#signup");
const modalSignUp = document.querySelector("#modal-sign-up");
const modalBgSignUp = document.querySelector("#modal-background-signup");
const modalCloseSignup = document.querySelector("#modal-close-signup");
console.log(signupButton);
// display signup modal when signup button is clicked
signupButton.addEventListener("click", () => {
  modalSignUp.classList.add("is-active");
});

// close signup modal when background is clicked
modalBgSignUp.addEventListener("click", () => {
  modalSignUp.classList.remove("is-active");
});

// close signup modal when x is clicked
modalCloseSignup.addEventListener("click", () => {
  modalSignUp.classList.remove("is-active");
});

async function signupFormHandler(event) {
  event.preventDefault();

  const first_name = document.querySelector("#firstname-signup").value.trim();
  const last_name = document.querySelector("#lastname-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (first_name && last_name && email && password) {
    const response = await fetch("/api/users", {
      method: "post",
      body: JSON.stringify({
        first_name,
        last_name,
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
  .querySelector("#signup-form")
  .addEventListener("submit", signupFormHandler);
