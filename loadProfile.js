document.addEventListener("DOMContentLoaded", function() {
    // document.getElementById('imagen-perfil'). = profile.imagen;
    // Asignar el nombre de la foto de perfil
    const fotoPerfil = document.querySelector(".profile-pic");
    fotoPerfil.src = `assets/img/${profile.image}`;
    
    document.getElementById('nombre').innerText = profile.name;
    document.getElementById('titulo').innerText = profile.title;
    document.getElementById('intro').innerText = profile.intro;
    document.getElementById('experiencia').innerText = profile.experience;
    
    let serviciosLista = document.getElementById('lista-servicios');
    profile.services.forEach(servicio => {
        let li = document.createElement('li');
        li.textContent = servicio;
        serviciosLista.appendChild(li);
    });

    document.getElementById('email').innerText = profile.email;
    document.getElementById('email').href = `mailto:${profile.email}`;
    
    document.getElementById('whatsapp').innerText = 'Enviar mensaje';
    document.getElementById('whatsapp').href = `https://wa.me/${profile.whatsapp}`;

    document.getElementById('linkedin').innerText = 'Ver Perfil';
    document.getElementById('linkedin').href = profile.linkedin;
});