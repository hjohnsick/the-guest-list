async function addGuestFormHandler(event) {
    event.preventDefault();
  
    const first_name = document.querySelector("#firstname-addGuest").value.trim();
    const last_name = document.querySelector("#lastname-addGuest").value.trim();
    const street = document.querySelector("address-addGuest").value.trim();
    const city = document.querySelector("city-addGuest").value.trim();
    const state = document.querySelector("state-addGuest").value.trim();
    const zipcode = document.querySelector("zipcode-addGuest").value.trim();
    const email = document.querySelector("email-addGuest").value.trim();
    const phone_number = document.querySelector("phonenumber-addGuest").value.trim();
    const rsvp = document.querySelector("rsvp-addGuest").value.trim();
    //const food_choice = document.querySelector("foodchoice-addGuest").value.trim();

    if (first_name && last_name && street && city && state && zipcode && email && phone_number && rsvp) {
      const response = await fetch("/api/guestlist", {
        method: "post",
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
    .querySelector("#addGuest-form")
    .addEventListener("submit", addGuestFormHandler);