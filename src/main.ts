import './style.css'
import typescriptLogo from './typescript.svg';
import viteLogo from '/vite.svg';

const API_LINK: string = "https://api.escuelajs.co/api/v1/users";
const $app: HTMLElement | null = document.querySelector("#app");


async function fetchData(api : string) {
    let data = await fetch(api)
    data 
    .json()
    .then(res => createCard(res))
    .catch(err => console.log(err))
}
fetchData(API_LINK);

interface User {
    id: number;
    name: string;
    avatar: string;
    email: string;
}

function createCard(data: User[]): void {
    if ($app) {
        data.forEach(({  name, avatar, email }) => {
            const card = document.createElement("div");
            card.classList.add("wrapper__card");
            card.innerHTML = `
                <div class="wrapper__card__top">
                    <img class="wrapper__img" src="${avatar}" alt=" not found">
                </div>
                <div class="wrapper__card__bottom">
                    <p class="email">${email}</p>
                    <h3>${name}</h3>
                </div>
            `;
           $app.appendChild(card);
        });
    }
}


