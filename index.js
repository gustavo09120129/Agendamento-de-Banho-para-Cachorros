document.getElementById("booking-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const pet = document.getElementById("pet").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    const bookingList = document.getElementById("booking-list");
    const listItem = document.createElement("li");
    listItem.textContent = `${name} agendou banho para ${pet} em ${date} às ${time}`;
    bookingList.appendChild(listItem);

    document.getElementById("booking-form").reset();
});
