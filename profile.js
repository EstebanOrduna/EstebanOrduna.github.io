const profile = {
    image: "bw.jpeg",
    name: "Esteban Orduña",
    title: "QA Automation Engineer · SDET",
    tags: ["Ing. Mecatrónico", "LSS Black Belt", "MSc. Manufactura", "MC. TIC"],
    intro: "Comencé como ingeniero de procesos industriales. Con el tiempo me obsesioné con eliminar el trabajo repetitivo: primero con Excel, luego con Python, automatizando mis propias actividades hasta que el resultado habló solo. Esa experiencia me llevó a especializarme en software y a fundar EO Automations. Hoy ayudo a empresas a identificar y eliminar sus cuellos de botella desde adentro, entendiendo tanto el lado técnico como el operativo.",
    experience: [
        { icon: "fa-graduation-cap", text: "Ing. en Mecatrónica – Universidad TecMilenio" },
        { icon: "fa-graduation-cap", text: "MSc. Sistemas de Manufactura – ITESM (Tec de Monterrey)" },
        { icon: "fa-graduation-cap", text: "MC. Tecnologías de la Información – IEXETEC" },
        { icon: "fa-certificate",    text: "Lean Six Sigma Black Belt" },
        { icon: "fa-code",           text: "QA Automation Engineer" },
        { icon: "fa-laptop-code",    text: "SDET (Software Developer Engineer in Test)" }
    ],
    services: [
        { icon: "fa-robot",      name: "Automatización de procesos",  desc: "" },
        { icon: "fa-chart-line", name: "Consultoría de procesos",     desc: "" },
        { icon: "fa-camera",     name: "Fotografía",                  desc: "Proyectos selectivos según disponibilidad" }
    ],
    projects: [
        {
            name: "AutoMate – Framework RPA",
            desc: "Framework de automatización robótica de procesos construido en Python. Arquitectura modular con motores intercambiables (Playwright, Selenium, Excel) que desacopla la lógica de negocio de la tecnología subyacente. Incluye gestión centralizada de credenciales y configuración por cliente.",
            stack: ["Python", "Flask", "Playwright", "Selenium", "PyInstaller"],
            type: "personal"
        },
        {
            name: "Agente AI local",
            desc: "Asistente de codificación autohospedable pensado para equipos que necesitan apoyo de IA sin enviar código a servidores externos. Soporta múltiples LLMs locales vía Ollama con sistema de herramientas, contexto persistente y plugins.",
            stack: ["TypeScript", "Node.js", "Ollama"],
            type: "personal"
        },
        {
            name: "Portal de operaciones",
            desc: "Migración de sistema operativo basado en hojas de cálculo a portal web para empresa de logística. Login con roles, CRUD de empleados y unidades, registro de operaciones, CI/CD automatizado y deploy en infraestructura propia del cliente.",
            stack: ["Next.js", "TypeScript", "Prisma", "Docker", "GitHub Actions"],
            type: "cliente"
        }
    ],
    // Email split to avoid scraper harvesting from public repo source
    email: ["esteban.orduna", "gmail.com"],
    linkedin: "https://www.linkedin.com/in/esteban-ordu%C3%B1a-045473104/",
    // Create a free form at formspree.io and replace YOUR_FORM_ID with your form's ID
    formspreeId: "YOUR_FORM_ID"
};
