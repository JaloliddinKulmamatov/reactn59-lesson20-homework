// import Swal from "sweetalert2";

const API_URL = "https://restcountries.com/v3.1/all";
const loading = document.querySelector(".loading") as HTMLElement;
const mainland = document.querySelector(".mainland") as HTMLElement;


interface Country {
    flags: {
        png: string;
    };
    name: {
        common: string;
    };
    capital: string[];
}

async function fetchData(api: string): Promise<void> {
    try {
        let response = await fetch(api);
        let data = await response.json();
        createCard(data);
    } catch (err) {
        console.log(err);
    } finally {
// Swal.fire({
//   position: "top-end",
//   icon: "success",
//   title: "Your work has been saved",
//   showConfirmButton: false,
//   timer: 1500
// });
    }

}

fetchData(API_URL );

function createCard(data: Country[]): void {
    data.forEach((el: Country) => {
        let countries = document.createElement('div');
        countries.classList.add("country");
        countries.innerHTML = `
        <div class="country__right">
            <img src="${el.flags.png}" alt="${el.name.common} flag">
        </div>
        <div class="country__left">
            <h2>${el.capital[0]}</h2>
            <p>${el.name.common}</p>
        </div>
        `;
        mainland.append(countries);
    });
}

