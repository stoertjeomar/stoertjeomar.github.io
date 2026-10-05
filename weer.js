const url = "https://api.open-meteo.com/v1/forecast?latitude=52.07&longitude=4.30&current=temperature_2m,wind_speed_10m";

function toonStatus(tekst) {
    const status = document.querySelector("#weer-status");
    status.textContent = tekst;
}
function toonWeer(data) {
    const section = document.querySelector("#weer");

    const temperatuur = document.createElement("p");
    temperatuur.textContent = `Temperatuur: ${data.current.temperature_2m}°C`;

    const wind = document.createElement("p");
    wind.textContent = `Wind: ${data.current.wind_speed_10m} km/u`;

    section.appendChild(temperatuur);
    section.appendChild(wind);
}

async function haalWeerOp() {
    toonStatus("Weer wordt opgehaald...");

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("foutje van de server oops: " + response.status);
        }

        const data = await response.json();
        toonStatus("");
        toonWeer(data);
    } catch (error) {
        console.log(error);
        toonStatus("Er is een fout opgetreden bij het ophalen van het weer.");
    }
}
haalWeerOp();