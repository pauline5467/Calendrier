// Sélection du conteneur du calendrier
const calendar = document.getElementById("calendar");

// Dates de début et de fin
const startDate = new Date("2024-12-01");
const endDate = new Date("2025-02-15");
const today = new Date();

// Chemins des images
const images = [
    "images/pasInfo.jpg", "images/infoQuestion.jpg", "images/jour3.jpg", "images/indice.jpg", 
    "images/themeQuestion.jpg", "images/06_12.jpg", "images/07_12.jpg", "images/08_12.jpg", 
    "images/09_12.jpg", "images/10_12.jpg", "images/11_12.jpg","images/12_12.jpg", "images/13_12.jpg", 
    "images/14_12.jpg", "images/15_12.jpg", "images/16_12.jpg", "images/17_12.jpg","images/18_12.jpg", 
    "images/19_12.jpg", "images/20_12.jpg","images/21_12.jpg", "images/22_12.jpg", "images/23_12.jpg","images/24_12.jpg","images/25_12.jpg",
    "images/26_12.jpg","images/27_12.jpg","images/28_12.jpg","images/29_12.jpg","images/30_12.jpg","images/31_12.jpg","images/01_01.jpg","images/02_01.jpg","images/03_01.jpg","images/04_01.jpg",
    "images/05_01.jpg","images/06_01.jpg","images/07_01.jpg","images/08_01.jpg","images/09_01.jpg","images/10_01.jpg","images/11_01.jpg","images/12_01.jpg","images/13_01.jpg","images/14_01.jpg",
    "images/15_01.jpg","images/16_01.jpg","images/17_01.jpg","images/18_01.jpg","images/19_01.jpg","images/20_01.jpg",
    "images/09_12.jpg", "images/10_12.jpg", "images/11_12.jpg","images/12_12.jpg", "images/13_12.jpg",
    "images/05_01.jpg","images/06_01.jpg","images/07_01.jpg","images/08_01.jpg","images/09_01.jpg","images/10_01.jpg","images/11_01.jpg","images/12_01.jpg","images/13_01.jpg","images/14_01.jpg",
    "images/15_01.jpg","images/16_01.jpg","images/17_01.jpg","images/18_01.jpg","images/19_01.jpg","images/20_01.jpg",
    "images/06_01.jpg","images/07_01.jpg","images/08_01.jpg","images/09_01.jpg",
    "images/pasInfo.jpg", "images/infoQuestion.jpg", "images/jour3.jpg",
    // Ajoutez d'autres images pour janvier et février...
];

// Fonction pour calculer la différence en jours entre deux dates
function daysBetween(start, end) {
    const oneDay = 24 * 60 * 60 * 1000;
    return Math.round((end - start) / oneDay);
}

// Nombre total de jours entre le 1er décembre et le 15 février
const totalDays = daysBetween(startDate, endDate) + 1;

// Génération des cases du calendrier
let currentMonth = ""; // Suivi du mois actuel pour créer des sections
for (let i = 0; i < totalDays; i++) {
    const currentDate = new Date(startDate);
    currentDate.setDate(startDate.getDate() + i);

    const dayNumber = currentDate.getDate();
    const monthName = currentDate.toLocaleString("fr-FR", { month: "long" });
    const formattedDate = `${dayNumber} ${monthName}`;

    // Si le mois change, ajouter un titre de mois
    if (monthName !== currentMonth) {
        currentMonth = monthName;
        const monthHeader = document.createElement("div");
        monthHeader.className = "month-header";
        monthHeader.textContent = monthName.charAt(0).toUpperCase() + monthName.slice(1);
        calendar.appendChild(monthHeader);
    }

    // Création de la case
    const dayBox = document.createElement("div");
    dayBox.className = "case";
    dayBox.textContent = dayNumber; // Affiche le numéro du jour

    if (currentDate > today) {
        dayBox.classList.add("locked");
    }

    // Gestion de l'image
    const imageIndex = i; // Index basé sur l'ordre des jours
    const imageSrc = images[imageIndex];
    const image = document.createElement("img");
    image.src = imageSrc;
    image.alt = `Image pour le ${formattedDate}`;
    image.style.display = "none"; // L'image est cachée au départ

    dayBox.appendChild(image);


    // Gestion des clics sur les cases
    dayBox.addEventListener("click", () => {
        if (currentDate > today) {
            alert(`Patience ! Ce jour (${formattedDate}) n'est pas encore disponible.`);
        } else {
            dayBox.classList.add("revealed");
            image.style.display = "block"; // Affiche l'image
        }
    });

    calendar.appendChild(dayBox);
}




    calendar.appendChild(dayBox);
}


