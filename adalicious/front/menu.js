
const menu_h1 = document.getElementById('menu-title')
const greetings = document.getElementById('menu-second-title')
const container = document.getElementById('menu-containter')

let menuTextBtn; let orderButton; let orderBtn;

let username = localStorage.getItem('firstName');
console.log(username)

function dynamicGreetings() {
    menu_h1.innerText = '🥦Adalicious';
    greetings.innerText = `Bonjour ${username} !`
}
dynamicGreetings();

function nouvelleBaliseText(typeBalise, texte, id) {
    let element = document.createElement(`${typeBalise}`);
    element.innerText = texte;
    return id.appendChild(element); //demander a Jeremy pour autre que id
}

function nouvelleBalise(typeBalise, declareId, targetId) {
    let element = document.createElement(`${typeBalise}`);
    element.id = declareId;
    return targetId.appendChild(element); //demander a Jeremy pour autre que id
}

let compteur;

async function fetchMenus() {
    const reponse = await fetch("http://localhost:3000/menu");
    const data = await reponse.json();
    return data;
}

const showPlates = async (data) => {


    try {

        const menu = await data;
        compteur = 0;
        menuTextBtn = "commander"

        for (const el of menu) {
            divNumber = String(compteur)


            // GROS DEGUEULI - PARTIE A REVOIR FACTORISER LA REPETITION

            nouvelleBalise('div', `container-div${divNumber}`, container);
            let dynamiqueDiv1 = document.getElementById(`container-div${divNumber}`);
            dynamiqueDiv1.className = "div-menu"

            nouvelleBalise('div', `2-div${divNumber}`, dynamiqueDiv1);
            let dynamiqueDiv2 = document.getElementById(`2-div${divNumber}`);
            dynamiqueDiv2.className = "div-menu-2"
            nouvelleBaliseText('h1', menu[compteur].image, dynamiqueDiv2);

            nouvelleBalise('div', `text-div${divNumber}`, dynamiqueDiv2);
            let dynamiqueDiv3 = document.getElementById(`text-div${divNumber}`);
            dynamiqueDiv3.className = "div-menu-text"
            nouvelleBaliseText('h2', menu[compteur].plate, dynamiqueDiv3);
            nouvelleBaliseText('h3', menu[compteur].description, dynamiqueDiv3);

            orderButton = nouvelleBaliseText('button', menuTextBtn, dynamiqueDiv1);
            orderButton.className='order-button';
            compteur = compteur + 1;


        }


        orderBtn = document.querySelector('.order-button')

        
        orderBtn.addEventListener("click", (e) => {
            e.preventDefault()

            window.location.href = './commande.html';

        })
        console.log(container.children)
    }
    catch (e) {
        console.error(e)
    }
    // console.log(container.children)
};

let menu = fetchMenus()
showPlates(menu);



// >>>>>>>> NEXT COMMANDER <<<<<<<<