document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".profile-pic").src = `assets/img/${profile.image}`;
    document.getElementById("nombre").textContent = profile.name;
    document.getElementById("titulo").textContent = profile.title;
    document.getElementById("intro").textContent = profile.intro;
    document.getElementById("footer-copy").textContent =
        `© ${new Date().getFullYear()} ${profile.name}. Todos los derechos reservados.`;

    profile.tags.forEach(tag => {
        const span = document.createElement("span");
        span.className = "tag";
        span.textContent = tag;
        document.getElementById("hero-tags").appendChild(span);
    });

    profile.experience.forEach(item => {
        const div = document.createElement("div");
        div.className = "timeline-item fade-in";
        div.innerHTML = `<i class="fas ${item.icon}"></i><p>${item.text}</p>`;
        document.getElementById("experiencia-lista").appendChild(div);
    });

    profile.services.forEach(svc => {
        const div = document.createElement("div");
        div.className = "service-card fade-in";
        div.innerHTML = `
            <i class="fas ${svc.icon}"></i>
            <span class="service-name">${svc.name}</span>
            ${svc.desc ? `<span class="service-desc">${svc.desc}</span>` : ""}
        `;
        document.getElementById("servicios-grid").appendChild(div);
    });

    document.getElementById("linkedin-hero").href = profile.linkedin;
    document.getElementById("linkedin-contact").href = profile.linkedin;

    // Contact form via Formspree
    const form = document.getElementById("contact-form");
    const status = document.getElementById("form-status");
    form.action = `https://formspree.io/f/${profile.formspreeId}`;

    form.addEventListener("submit", async function (e) {
        e.preventDefault();
        const btn = form.querySelector("button[type=submit]");
        btn.disabled = true;
        btn.textContent = "Enviando...";
        status.className = "form-status";
        status.textContent = "";

        try {
            const res = await fetch(form.action, {
                method: "POST",
                body: new FormData(form),
                headers: { Accept: "application/json" }
            });
            if (res.ok) {
                form.reset();
                status.className = "form-status success";
                status.textContent = "¡Mensaje enviado! Te respondo pronto.";
                btn.textContent = "Enviado ✓";
            } else {
                throw new Error();
            }
        } catch {
            status.className = "form-status error";
            status.textContent = "Hubo un error al enviar. Intenta de nuevo.";
            btn.disabled = false;
            btn.innerHTML = '<i class="fas fa-paper-plane"></i> Enviar mensaje';
        }
    });

    const observer = new IntersectionObserver(
        entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }),
        { threshold: 0.15 }
    );
    document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));
});
