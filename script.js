let voteTotal = 0;

function vote() {
    const nameInput = document.getElementById("voterName");
    const name = nameInput.value.trim();
    const notification = document.getElementById("notification");
    const voteCount = document.getElementById("voteCount");

    if (name === "") {
        notification.textContent = "Lütfen isminizi girin.";
        return;
    }

    voteTotal += 1;
    voteCount.textContent = `Toplam Oy: ${voteTotal}`;
    notification.textContent = `${name}, oy verdi!`;

    nameInput.value = "";
}

function scrollToForm() {
    document.getElementById("voteForm").scrollIntoView({behavior: "smooth"});
}