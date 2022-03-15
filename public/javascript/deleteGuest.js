async function deleteGuestHandler(event) {
  event.preventDefault();

  const guestId = event.target.id;

  const response = await fetch(`/api/guestlist/${guestId}`, {
    method: "DELETE",
  });

  if (response.ok) {
    document.location.replace("/theguestlist");
  } else {
    alert(response.statusText);
  }
}
