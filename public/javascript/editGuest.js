function editGuest(event) {
  const modalEditGuest = document.querySelector("#modal-editGuest");
  modalEditGuest.classList.add("is-active");
  document.getElementById("firstname-editGuest").value =
    event.target.getAttribute("data-firstName");
  document.getElementById("lastname-editGuest").value =
    event.target.getAttribute("data-lastName");
  document.getElementById("address-editGuest").value =
    event.target.getAttribute("data-street");
  document.getElementById("city-editGuest").value =
    event.target.getAttribute("data-city");
  document.getElementById("state-editGuest").value =
    event.target.getAttribute("data-state");
  document.getElementById("guest-id").value =
    event.target.getAttribute("data-guestId");
  document.getElementById("state-editGuest").value =
    event.target.getAttribute("data-state");
  document.getElementById("zipcode-editGuest").value =
    event.target.getAttribute("data-zipcode");
  document.getElementById("phonenumber-editGuest").value =
    event.target.getAttribute("data-phoneNumber");
  document.getElementById("email-editGuest").value =
    event.target.getAttribute("data-email");
  document.getElementById("rsvp-editGuest").value =
    event.target.getAttribute("data-rvsp");
  document.getElementById("foodchoice-editGuest").value =
    event.target.getAttribute("data-food");
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
}

async function editGuestFormHandler(event) {
  event.preventDefault();
  console.log("Submit button was clicked");
  console.log(event);
  const first_name = document
    .querySelector("#firstname-editGuest")
    .value.trim();
  const last_name = document.querySelector("#lastname-editGuest").value.trim();
  const street = document.querySelector("#address-editGuest").value.trim();
  const city = document.querySelector("#city-editGuest").value.trim();
  const state = document.querySelector("#state-editGuest").value.trim();
  const zipcode = document.querySelector("#zipcode-editGuest").value.trim();
  const email = document.querySelector("#email-editGuest").value.trim();
  const phone_number = document
    .querySelector("#phonenumber-editGuest")
    .value.trim();
  const rsvp = document.querySelector(
    'input[name="Has the guest RSVP’d?"]:checked'
  )?.value;
  const food_id = document.querySelector("#foodchoice-editGuest").value;
  const guestId = document.getElementById("guest-id").value;
  console.log(guestId);
  const response = await fetch(`/api/guestList/${guestId}`, {
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

document
  .querySelector("#editGuest-form")
  .addEventListener("submit", editGuestFormHandler);
