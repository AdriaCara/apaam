document.addEventListener("DOMContentLoaded", () => {
    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            // --- Nosaltres ---
            document.querySelector("#nosaltres h1").textContent = data.nosaltres.titulo;
            document.querySelector(".imgAboutUs").src = data.nosaltres.imagen;
            document.querySelector(".textNosaltres p").textContent = data.nosaltres.descripcion;

            // --- Activitats (3 últimas) ---
            const activitatsContainer = document.querySelector(".cardsActivitats");
            activitatsContainer.innerHTML = "";
            data.activitats.slice(-3).forEach(act => {
                const card = document.createElement("div");
                card.classList.add("card");
                card.innerHTML = `
                    <img src="${act.imagen}" alt="Cartell ${act.titulo}">
                    <h3>${act.titulo}</h3>
                `;
                activitatsContainer.appendChild(card);
            });

            // --- Junta ---
            const juntaContainer = document.querySelector(".cardsJunta");
            juntaContainer.innerHTML = "";
            data.junta.forEach(member => {
                const membre = document.createElement("div");
                membre.classList.add("membre");
                membre.innerHTML = `
                    <img src="${member.imagen}" alt="Foto de ${member.nombre}">
                    <h3>${member.nombre}</h3>
                    <p>${member.cargo}</p>
                `;
                juntaContainer.appendChild(membre);
            });

            // --- Actes (3 últimas) ---
            const actesContainer = document.querySelector(".actesList");
            actesContainer.innerHTML = "";
            data.actes.slice(-3).forEach(acta => {
                const div = document.createElement("div");
                div.classList.add("acta");
                div.innerHTML = `
                    <p>${acta.titulo}</p>
                    <a href="${acta.archivo}" download class="button">Descarregar PDF</a>
                `;
                actesContainer.appendChild(div);
            });

            // --- Contacte ---
            const contactLinks = document.querySelector(".contactLinks");
            contactLinks.innerHTML = `
                <a href="${data.contacte.instagram}" target="_blank" class="socialLink instagram">
                    <i class="fab fa-instagram"></i> Instagram
                </a>
                <a href="${data.contacte.facebook}" target="_blank" class="socialLink facebook">
                    <i class="fab fa-facebook"></i> Facebook
                </a>
                <a href="mailto:${data.contacte.email}" class="socialLink email">
                    <i class="fas fa-envelope"></i> ${data.contacte.email}
                </a>
            `;
            document.querySelector(".address").textContent = "08358 Arenys de Munt, Barcelona, Catalunya";
        })
        .catch(err => console.error("Error carregant el JSON:", err));

    const menuToggle = document.getElementById("menu-toggle");
    const menuLinks = document.getElementById("menu-links");

    menuToggle.addEventListener("click", () => {
        menuLinks.classList.toggle("show");
    });

    document.querySelectorAll(".menu-links a").forEach(link => {
        link.addEventListener("click", () => {
            menuLinks.classList.remove("show"); // Cierra al hacer clic
        });
    });

});
