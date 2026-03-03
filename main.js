

const section = document.createElement("section");
section.classList.add("footer");

const background = document.createElement("div");
background.classList.add("background");

const footerText = document.createElement("div");
footerText.classList.add("footer-text");

const h2 = document.createElement("h2");
h2.classList.add("thx");
h2.textContent = "СПАСИБО!!!";

const desc = document.createElement("p");
desc.classList.add("footer-description");
desc.innerHTML = `
<b>
BMW — это не просто инженерия. Это мышление в движении, идея,
воплощённая в металле и<br> скорости. Это диалог разума и эмоций, где каждая линия кузова — как
штрих в архитектуре <br>будущего, а каждый поворот — выбор свободы. <br><br>

BMW — это путь. Не кратчайший, а настоящий. <br><br>

С уважением, <br>Aluminevii2
</b>
`;

const copy = document.createElement("p");
copy.classList.add("sinestatator");
copy.innerHTML = "<b>© BMW AG 2025</b>";

const icons = document.createElement("div");
icons.classList.add("footer-icons");

const socials = [
    { src: "/data/home/tg.svg", alt: "Telegram" },
    { src: "/data/home/inst.svg", alt: "Instagram" },
    { src: "/data/home/x.svg", alt: "X" },
    { src: "/data/home/reddit.svg", alt: "Reddit" }
];

socials.forEach(item => {
    const a = document.createElement("a");
    a.href = "#";

    const img = document.createElement("img");
    img.src = item.src;
    img.alt = item.alt;

    a.appendChild(img);
    icons.appendChild(a);
});

footerText.appendChild(h2);
footerText.appendChild(desc);
footerText.appendChild(copy);
footerText.appendChild(icons);

background.appendChild(footerText);
section.appendChild(background);

document.getElementById("app").appendChild(section);





const bestModelsBtn = document.getElementById("bestModelsBtn");
const searchContainer = document.getElementById("searchContainer");
const result = document.getElementById("result");

const models = {
    "m3": "data/home/m3.png",
    "x6": "data/home/x6.png",
    "m5": "data/home/CAR.png",
    "x7": "data/home/x7.png"
};


function showModel(value) {
    if (models[value]) {
        result.innerHTML = `<img src="${models[value]}" width="400px">`;
        localStorage.setItem("selectedBMW", value);
    } else {
        result.innerHTML = "<p>Модель не найдена</p>";
    }
}

bestModelsBtn.addEventListener("click", function (e) {
    e.preventDefault();

    searchContainer.innerHTML = `
        <input type="text" id="searchInput" placeholder="Введите модель BMW...">
        <button id="searchBtn">Поиск</button>
    `;

    const searchInput = document.getElementById("searchInput");
    const searchBtn = document.getElementById("searchBtn");

    searchBtn.addEventListener("click", function () {
        const value = searchInput.value.toLowerCase();
        showModel(value);
    });
});

window.addEventListener("DOMContentLoaded", function () {
    const savedModel = localStorage.getItem("selectedBMW");

    if (savedModel && models[savedModel]) {
        showModel(savedModel);
    }
});
