// addGuest modal
const addGuestButton = document.querySelector("#addGuest");
const modalAddGuest = document.querySelector("#modal-addGuest");
const modalBgAddGuest = document.querySelector("#modal-background-addGuest");
const modalCloseAddGuest = document.querySelector("#modal-close-addGuest");


// display addGuest modal when addGuest button is clicked
addGuestButton.addEventListener("click", () => {
  modalAddGuest.classList.add("is-active");
});

// close addGuest modal when background is clicked
modalBgAddGuest.addEventListener("click", () => {
  modalAddGuest.classList.remove("is-active");
});

// close addGuest modal when x is clicked
modalCloseAddGuest.addEventListener("click", () => {
  modalAddGuest.classList.remove("is-active");
});
