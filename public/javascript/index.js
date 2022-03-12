// modal
const signupButton = document.querySelector("#signup");
const modalBg = document.querySelector(".modal-background");
const modal = document.querySelector(".modal");
const modalClose = document.querySelector("#modal-close");

signupButton.addEventListener("click", () => {
  modal.classList.add("is-active");
});

modalBg.addEventListener("click", () => {
  modal.classList.remove("is-active");
});

modalClose.addEventListener("click", () => {
  modal.classList.remove("is-active");
});
