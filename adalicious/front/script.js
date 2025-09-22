const usernameInput = document.getElementById("input-name-form");
const nameForm = document.querySelector(".name-form");
const menuTitle = document.querySelector("#menu-title");
console.log(nameForm);



nameForm.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("click!")

    let firstName = usernameInput.value;
    console.log(firstName);


    if (!firstName) {
        alert("veuillez renseigner votre prénom svp.");
        return;
    }

    localStorage.setItem("firstName", firstName);
    window.location.href = 'pages/menus.html';


});

// const menus = fetchMenus()




// const menusPage = async (data) => {


//     // menuTitle.innerHTML = ;

//     try {
//         const menu = await data;
//         console.log(menu)
//     }
//     catch (e) {
//         console.error(e)
//     }

// };

// menusPage(menus);

