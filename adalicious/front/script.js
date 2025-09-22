const usernameInput = document.getElementById("input-name-form");
const nameForm = document.querySelector(".name-form");

async function fetchMenus() {
    const reponse = await fetch("http://localhost:3000/menu");
    const menu = await reponse.json();
    console.log(menu);
}


nameForm.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("click!")

    let firstName = usernameInput.value;

    if (!firstName) {
        alert("veuillez renseigner votre prénom svp.");
        return;
    }
    window.location.href='pages/menus.html';

});

