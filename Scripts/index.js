// Elements
let images = ["ordinateur.jpeg", "Carte mère/carte mère.jpeg", "Processeur/processeur.png", "RAM/ram.png", "Carte Graphique/carte graphique.png", "DD/dd.png", "Alim/alim.png"];
let composants = ["Rester ici", "Accéder à la page de la carte mère", "Accéder à la page du processeur", "Accéder à la page de la RAM", "Accéder à la page de la carte graphique", "Accéder à la page des disques durs", "Accéder à la page de l'alimentation"];
let liens = ["index.html", "Pages/mb.html", "Pages/cpu.html", "Pages/ram.html", "Pages/gpu.html", "Pages/dd.html", "Pages/alim.html"];

// Buttons
let precedent = document.getElementById("precedent");
let suivant = document.getElementById("suivant");
let go = document.getElementById("go");
let goLink = document.getElementById("go-link");

// Image
let image = document.getElementById("image");

precedent.addEventListener("click", () => {
    if (image.getAttribute("src") == `Images/Ordinateur/${images[0]}`) {
        image.src = `Images/Ordinateur/${images[6]}`;
        go.innerText = composants[6];
        goLink.href = liens[6];
    }

    else if (image.getAttribute("src") == `Images/Ordinateur/${images[6]}`) {
        image.src = `Images/Ordinateur/${images[5]}`;
        go.innerText = composants[5];
        goLink.href = liens[5];
    }

    else if (image.getAttribute("src") == `Images/Ordinateur/${images[5]}`) {
        image.src = `Images/Ordinateur/${images[4]}`;
        go.innerText = composants[4];
        goLink.href = liens[4];
    }

    else if (image.getAttribute("src") == `Images/Ordinateur/${images[4]}`) {
        image.src = `Images/Ordinateur/${images[3]}`;
        go.innerText = composants[3];
        goLink.href = liens[3];
    }

    else if (image.getAttribute("src") == `Images/Ordinateur/${images[3]}`) {
        image.src = `Images/Ordinateur/${images[2]}`;
        go.innerText = composants[2];
        goLink.href = liens[2];
    }

    else if (image.getAttribute("src") == `Images/Ordinateur/${images[2]}`) {
        image.src = `Images/Ordinateur/${images[1]}`;
        go.innerText = composants[1];
        goLink.href = liens[1];
    }

    else if (image.getAttribute("src") == `Images/Ordinateur/${images[1]}`) {
        image.src = `Images/Ordinateur/${images[0]}`;
        go.innerText = composants[0];
        goLink.href = liens[0];
    }
});

suivant.addEventListener("click", () => {
    if (image.getAttribute("src") == `Images/Ordinateur/${images[0]}`) {
        image.src = `Images/Ordinateur/${images[1]}`;
        go.innerText = composants[1];
        goLink.href = liens[1];
    }

    else if (image.getAttribute("src") == `Images/Ordinateur/${images[1]}`) {
        image.src = `Images/Ordinateur/${images[2]}`;
        go.innerText = composants[2];
        goLink.href = liens[2];
    }

    else if (image.getAttribute("src") == `Images/Ordinateur/${images[2]}`) {
        image.src = `Images/Ordinateur/${images[3]}`;
        go.innerText = composants[3];
        goLink.href = liens[3];
    }

    else if (image.getAttribute("src") == `Images/Ordinateur/${images[3]}`) {
        image.src = `Images/Ordinateur/${images[4]}`;
        go.innerText = composants[4];
        goLink.href = liens[4];
    }

    else if (image.getAttribute("src") == `Images/Ordinateur/${images[4]}`) {
        image.src = `Images/Ordinateur/${images[5]}`;
        go.innerText = composants[5];
        goLink.href = liens[5];
    }

    else if (image.getAttribute("src") == `Images/Ordinateur/${images[5]}`) {
        image.src = `Images/Ordinateur/${images[6]}`;
        go.innerText = composants[6];
        goLink.href = liens[6];
    }

    else if (image.getAttribute("src") == `Images/Ordinateur/${images[6]}`) {
        image.src = `Images/Ordinateur/${images[0]}`;
        go.innerText = composants[0];
        goLink.href = liens[0];
    }
});


go.innerText = composants[0];
goLink.href = liens[0];