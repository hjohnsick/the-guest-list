async function addGuestFormHandler(event) {
    event.preventDefault();
    console.log("clicked")
    const first_name = document.querySelector("#firstname-editGuest").value.trim();
    const last_name = document.querySelector("#lastname-editGuest").value.trim();
    const street = document.querySelector("#address-editGuest").value.trim();
    const city = document.querySelector("#city-editGuest").value.trim();
    const state = document.querySelector("#state-editGuest").value.trim();
    const zipcode = document.querySelector("#zipcode-editGuest").value.trim();
    const email = document.querySelector("#email-editGuest").value.trim();
    const phone_number = document.querySelector("#phonenumber-editGuest").value.trim();
    const rsvp = document.querySelector("#rsvp-editGuest:checked").value.trim();
    const food_id = document.querySelector("#foodchoice-editGuest").value.trim();

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
          food_id
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