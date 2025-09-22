
const menu_h1 = document.getElementById('menu-title')
const greetings = document.getElementById('menu-second-title')
const container = document.getElementById('menu-containter')



let username = localStorage.getItem('firstName');
console.log(username)

async function fetchMenus() {
    const reponse = await fetch("http://localhost:3000/menu");
    const data = await reponse.json();
    console.log(data);
    
    return data;
}

function dynamicGreetings() {
    menu_h1.innerText = '🥦Adalicious';
    greetings.innerText = `Bonjour ${username} !`
}

dynamicGreetings();