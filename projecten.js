const projecten = [ 
    {naam : "Portfolio Website", beschrijving : "Ik heb een persoonlijke portfolio website gemaakt om mijn werk en vaardigheden te tonen. De website is gebouwd met HTML, CSS en JavaScript.", taal : "html", jaar : 2023},
    {naam : "Medicatie beheer", beschrijving : "Tijdens mijn eerste jaar studie heb ik een medicatie beheer systeem ontwikkeld. Het systeem helpt patiënten om hun medicatie te beheren en te volgen. Het is een simpele programma dat gebruik maakt van een database om de gegevens op te slaan en op te vragen. ik heb het gemaakt met java code en mysql database. Dit is terug te vinden op mijn GitHub profiel.(:", taal : "java", jaar : 2022},
    {naam : "NN game", beschrijving : "Ik heb een neurale netwerk game ontwikkeld. De game is geïnspireerd door een neurale netwerk om te leren hoe het beste te spelen. De game is gebouwd met Python en TensorFlow. je moet in de game jou poppetje bewegen en de obstakels vermijden. het word moeilijker naarmate je hoger komt. er is ook een ai in de game. je moet de ai begeleiden om de obstakels te vermijden. hoe meer je speelt, hoe beter je ai getraind wordt.", taal : "python", jaar : 2028},
]

function renderProjecten(lijst) {
  const container = document.querySelector("#projecten-lijst");
  container.textContent = "";

  lijst.forEach((project) => {
    const article = document.createElement("article");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");

    h2.textContent = project.naam;
    p.textContent = project.beschrijving;

    article.appendChild(h2);
    article.appendChild(p);
    container.appendChild(article);
  });
}

function sorteerOpJaar() {
  const gesorteerd = [...projecten];
  gesorteerd.sort((a, b) => b.jaar - a.jaar);
  renderProjecten(gesorteerd);
}
function filterOpTaal() {
  const gekozen = document.querySelector("#filter-taal").value;

  if (gekozen === "alle") {
    renderProjecten(projecten);
    return;
  }

  const gefilterd = projecten.filter((project) => project.taal === gekozen);
  renderProjecten(gefilterd);
}
const button = document.querySelector("#sorteer-jaar");
button.addEventListener("click", sorteerOpJaar);
const select = document.querySelector("#filter-taal");
select.addEventListener("change", filterOpTaal);

renderProjecten(projecten);