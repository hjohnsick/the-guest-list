// signup modal
const signupButton = document.querySelector("#signup");
const modalSignUp = document.querySelector("#modal-sign-up");
const modalBgSignUp = document.querySelector("#modal-background-signup");
const modalCloseSignup = document.querySelector("#modal-close-signup");

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
