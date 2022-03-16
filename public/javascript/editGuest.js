const first_name = document.querySelector("#firstname-editGuest").value.trim();
const last_name = document.querySelector("#lastname-editGuest").value.trim();
const street = document.querySelector("#address-editGuest").value.trim();
const city = document.querySelector("#city-editGuest").value.trim();
const state = document.querySelector("#state-editGuest").value.trim();
const zipcode = document.querySelector("#zipcode-editGuest").value.trim();
const email = document.querySelector("#email-editGuest").value.trim();
const phone_number = document
  .querySelector("#phonenumber-editGuest")
  .value.trim();
const rsvp = document.querySelector("#rsvp-editGuest:checked").value.trim();
const food_id = document.querySelector("#foodchoice-editGuest").value.trim();

//Get id of the clicked button
function editGuest() {
  //   id = guestId.getAttribute("data-guestId");
  //   const editIcon = document.querySelector(`#guest-${id}`);
  //   console.log(id);
  //   console.log(editIcon);
  const modalEditGuest = document.querySelector("#modal-editGuest");
  modalEditGuest.classList.add("is-active");
  console.log("buttonClicked");
  const modalBgEditGuest = document.querySelector(
    "#modal-background-editGuest"
  );
  const modalCloseEditGuest = document.querySelector("#modal-close-editGuest");
  // close editGuest modal when editGuest background is clicked
  modalBgEditGuest.addEventListener("click", () => {
    modalEditGuest.classList.remove("is-active");
  });
  // close editGuest modal when x is clicked
  modalCloseEditGuest.addEventListener("click", () => {
    modalEditGuest.classList.remove("is-active");
  });
  //   editGuestFormHandler(event, id);
}
//Use the id from the clicked button to open then modal

async function editGuestFormHandler(event, id) {
  event.preventDefault();
  console.log("clicked");

  if (
    first_name &&
    last_name &&
    street &&
    city &&
    state &&
    zipcode &&
    email &&
    phone_number &&
    rsvp
  ) {
    const response = await fetch(`/api/guestlist/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        first_name,
        last_name,
        street,
        city,
        state,
        zipcode,
        email,
        phone_number,
        rsvp,
        food_id,
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
  .querySelector("#editGuest-form")
  .addEventListener("submit", editGuestFormHandler);
