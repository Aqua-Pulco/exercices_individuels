
const menu_h1 = document.getElementById('menu-title')
const greetings = document.getElementById('menu-second-title')
const container = document.getElementById('menu-containter')


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


    

const showOnePlate = async (data) => {
    
    
    try {

        const menu = await data;
        compteur = 0;

        for (const el of menu){
            divNumber = String(compteur)
            nouvelleBalise('div', `container-div${divNumber}`, container);
            let dynamiqueDiv = document.getElementById(`container-div${divNumber}`);
            nouvelleBaliseText('h1', menu[compteur].image, dynamiqueDiv);
            nouvelleBaliseText('h2', menu[compteur].plate, dynamiqueDiv);
            nouvelleBaliseText('h3', menu[compteur].description, dynamiqueDiv);
            compteur = compteur + 1;

             }
             console.log(container.children)
    }
    catch (e) {
        console.error(e)
    }
    // console.log(container.children)
};

let menu = fetchMenus()
showOnePlate(menu);

