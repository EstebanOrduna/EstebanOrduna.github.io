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
        div.innerHTML = `<i class="fas ${svc.icon}"></i><p>${svc.name}</p>`;
        document.getElementById("servicios-grid").appendChild(div);
    });

    const email = profile.email.join("@");
    const emailEl = document.getElementById("email-link");
    emailEl.href = `mailto:${email}`;
    document.getElementById("email-text").textContent = email;

    document.getElementById("linkedin-hero").href = profile.linkedin;
    document.getElementById("linkedin-contact").href = profile.linkedin;

    const observer = new IntersectionObserver(
        entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }),
        { threshold: 0.15 }
    );
    document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));
});
