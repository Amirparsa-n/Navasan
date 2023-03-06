
// Date
const date = document.querySelector(".date");

const month = new persianDate().month();
const year = new persianDate().year();
const day = new persianDate().date();

date.innerHTML = `${year} / ${month} / ${day}`;

// ---------------------------------------------------------

// Api

const priceUsd = document.querySelector(".price-usd");
const priceEur = document.querySelector(".price-eur");
const priceGbp = document.querySelector(".price-gbp");
const priceAed = document.querySelector(".price-aed");
const priceTry = document.querySelector(".price-try");

const apiKey = "freegwCkxg51VEj7saWkBMuvRvb97UDr";
const url = `http://api.navasan.tech/latest/?api_key=${apiKey}`;

fetch(url)
    .then(res => res.json())
    .then(arz => {
        const {usd ,eur ,gbp ,aed } = arz;

        priceUsd.innerText = usd.value;
        priceEur.innerText = eur.value;
        priceGbp.innerText = gbp.value;
        priceAed.innerText = aed.value;
        priceTry.innerText = arz.try.value;
   

    });




