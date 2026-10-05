const form = document.querySelector("#contact-form");

const velden = [
      {id: "naam", boodschap: "Naam is verplicht"},
        {id: "email", boodschap: "vul een geldig email adres in"},
        {id: "bericht", boodschap: "schrijf minimaal 10 tekens"},
    ];

function valideerVeld(veld) {
    const input = document.querySelector(`#${veld.id}`);
    const foutmelding = document.querySelector(`#${veld.id}-error`);
    const geldig = input.checkValidity();

    input.setAttribute("aria-invalid", String(!geldig));
    foutmelding.textContent = geldig ? "" : veld.boodschap;
    return geldig;
}   

function verwerkFormulier(event) {
    event.preventDefault();

    const alleGeldig = velden.map(valideerVeld).every(Boolean);
    const status = document.querySelector("#form-status");

    if (!alleGeldig) {
        status.textContent = "Er zijn fouten in het formulier.";
        return;
    }

    status.textContent = "Formulier succesvol verzonden!";
    form.reset();
}
form.addEventListener("submit", verwerkFormulier);