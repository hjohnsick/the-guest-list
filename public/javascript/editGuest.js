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
}

//Get id of the clicked button
function getId(guestId) {
  id = guestId.getAttribute("data-guestId");
  const editIcon = document.querySelector(`#guest-${id}`);
  return editIcon;
}

async function editGuestFormHandler(event) {
  event.preventDefault();
  console.log("Submit button was clicked");

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
  //   const rsvp = document.querySelector("#rsvp-editGuest:checked").value;
  const rsvp = document.querySelector(
    'input[name="Has the guest RSVP’d?"]:checked'
  )?.value;
  const food_id = document.querySelector("#foodchoice-editGuest").value;
  //   const clickedId = event.target.id;
  //   const guestId = clickedId.split("-").pop();
  //   const id = getId(this);
  const id = 1;
  const response = await fetch(`/api/guestList/${id}`, {
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
